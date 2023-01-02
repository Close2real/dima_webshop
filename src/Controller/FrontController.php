<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FrontController extends AbstractController
{
    #[Route(path: '/', name: 'app.home', methods: 'GET')]
    #[Route(path: '/login', name: 'app.login', methods: 'GET')]
    #[Route(path: '/about-us', name: 'app.about-us', methods: 'GET')]
    #[Route(path: '/contacts', name: 'app.contacts', methods: 'GET')]
    #[Route(path: '/catalog', name: 'app.catalog', methods: 'GET')]
    #[Route(path: '/product', name: 'app.product', methods: 'GET')]
    #[Route(path: '/policy', name: 'app.policy', methods: 'GET')]
    public function entryPoint(): Response
    {
        return $this->render("index.html.twig");
    }
}
