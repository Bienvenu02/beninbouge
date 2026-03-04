<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Home');
    }

    public function dashboard()
    {
        return Inertia::render('Admin/Dashboard/Dashboard');
    }
}
