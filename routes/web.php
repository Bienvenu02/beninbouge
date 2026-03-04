<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return to_route('home');
});

Route::get('/accueil', [HomeController::class, 'index'])->name('home');

Route::middleware('guest')->group(function () {
    Route::get('/login', function () {
        return redirect('/admin/login');
    })->name('login');
    Route::get('admin/login', [AuthController::class, 'index'])->name('admin.login');
    Route::post('login/store', [AuthController::class, 'storeLogin'])->name('store.login');
});

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('admin/dashboard', [HomeController::class, 'dashboard'])->name('dashboard');
});
