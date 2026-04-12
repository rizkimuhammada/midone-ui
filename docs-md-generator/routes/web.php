<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageConverterController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/generate-react', [PageConverterController::class, 'generateReact']);
Route::get('/generate-vue', [PageConverterController::class, 'generateVue']);
Route::get('/generate-vanilla', [PageConverterController::class, 'generateVanilla']);

Route::get('/generate-all', function () {
    $controller = new PageConverterController();

    $react   = $controller->generateReact()->getData(true);
    $vue     = $controller->generateVue()->getData(true);
    $vanilla = $controller->generateVanilla()->getData(true);

    return response()->json([
        'react'   => $react,
        'vue'     => $vue,
        'vanilla' => $vanilla,
    ]);
});
