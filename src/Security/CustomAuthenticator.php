<?php

namespace App\Security;

use App\Repository\UserRepository;
use App\Utils\Constants;
use App\Utils\Exception\InvalidLoginRequestException;
use App\Utils\Exception\InvalidUsernameException;
use App\Utils\Objects\User\LoginRequest;
use App\Utils\Traits\UtilsService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractLoginFormAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;

class CustomAuthenticator extends AbstractAuthenticator
{
    use UtilsService;

    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function authenticate(Request $request): Passport
    {
        /** @var LoginRequest $requestParameters */
        $requestParameters = self::parseObjectToType($request->request->all(), LoginRequest::class);
        $validationViolations = $this->validator->validate($requestParameters);
        if ($validationViolations->count() > 0) {
            throw new InvalidLoginRequestException($validationViolations);
        }

        $userBadge = new UserBadge($requestParameters->getUsername(), function ($userIdentifier) {
            return self::fetchUser($userIdentifier);
        });

        $credentialsBadge = new CustomCredentials(function ($credentials, User $user) {
            return self::checkCredentials($credentials, $user);
        }, $requestParameters->getPassword());

        return new Passport($userBadge, $credentialsBadge);
    }

    public function supports(Request $request): ?bool
    {
        // TODO: Implement supports() method.
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        return new JsonResponse(self::buildClientResponse($token->getUser()));
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): Response
    {
        if ( $exception instanceof InvalidLoginRequestException ) {
            return new JsonResponse(
                self::buildClientResponseOnError($exception->getCode(), $exception->getMessage(), $exception->getFormattedErrors()),
                Constants::HTTP_BAD_REQUEST
            );
        }

        if ($exception instanceof InvalidUsernameException || $exception instanceof BadCredentialsException) {
            $response = self::buildClientResponseOnError($exception->getCode(), "Credenziali errate.");
            return new JsonResponse($response, Constants::HTTP_BAD_REQUEST);
        }

        $response = self::buildClientResponseOnError($exception->getCode(), "Errore durante la login, riprovare.");
        return new JsonResponse($response, Constants::HTTP_SERVER_ERROR);
    }
}