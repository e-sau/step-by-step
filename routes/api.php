<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->group(function() {
    Route::post('/logout', \App\Http\Controllers\Api\Auth\AuthController::class.'@logout')->name('logout.api');

    Route::apiResource('users', \App\Http\Controllers\Api\UserController::class);
});

Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('/login', \App\Http\Controllers\Api\Auth\AuthController::class.'@login')->name('login.api');
    Route::post('/register', \App\Http\Controllers\Api\Auth\AuthController::class.'@register')->name('register.api');

    // temp
    Route::apiResource('schools', \App\Http\Controllers\Api\SchoolController::class);
    Route::apiResource('grades', \App\Http\Controllers\Api\GradeController::class);
    Route::apiResource('subjects', \App\Http\Controllers\Api\SubjectController::class);
    Route::apiResource('tasks', \App\Http\Controllers\Api\TaskController::class);
    Route::apiResource('achievements', \App\Http\Controllers\Api\AchievementController::class);
    Route::apiResource('additions', \App\Http\Controllers\Api\AdditionController::class);
});
