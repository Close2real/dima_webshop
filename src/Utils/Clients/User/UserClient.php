<?php

namespace App\Utils\Clients\User;

use App\Utils\Request\HttpRequest\HttpRequestParameters;
use App\Utils\Response\User\MockUserResponse;
use App\Utils\Traits\HttpUtils;

class UserClient implements UserClientInterface
{
    use HttpUtils;

    public function getMockUser(string $username)
    {
//        $url = "$this->esbSj3Base/sj3-1/v1/$this->jobId/user/$username";
        $url = "https://run.mocky.io/v3/81efa611-ef58-4637-831c-289f7aa56daa";

        $request = new HttpRequestParameters();
        $request->setIsExternalUri(true);
        $request->setUri($url);

        $response = $this->get($request);

        return $this->parseResponse($response, MockUserResponse::class, false);
    }
}