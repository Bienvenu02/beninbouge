<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Déterminer le chemin de base
$basePath = $_SERVER['APP_BASE_PATH'] ?? dirname(__DIR__);

// Vérifier si l'application est en mode maintenance
if (file_exists($maintenance = $basePath . '/storage/framework/maintenance.php')) {
    require $maintenance;
}

// Charger l'autoloader
require $basePath . '/vendor/autoload.php';

// Bootstrap Laravel
/** @var Application $app */
$app = require_once $basePath . '/bootstrap/app.php';

// Gérer la requête
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$response = $kernel->handle(
    $request = Request::capture()
);
$response->send();

$kernel->terminate($request, $response);