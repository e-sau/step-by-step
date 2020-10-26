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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

// without authorize
Route::apiResource('users', \App\Http\Controllers\Api\UserController::class);


Route::apiResource('schools', \App\Http\Controllers\Api\SchoolController::class);
Route::apiResource('grades', \App\Http\Controllers\Api\GradeController::class);
Route::apiResource('subjects', \App\Http\Controllers\Api\SubjectController::class);
Route::apiResource('tasks', \App\Http\Controllers\Api\TaskController::class);
Route::apiResource('achievements', \App\Http\Controllers\Api\AchievementController::class);
Route::apiResource('additions', \App\Http\Controllers\Api\AdditionController::class);
