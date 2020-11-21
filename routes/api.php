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

Route::middleware('auth:api')->group(function() {
    Route::post('/logout', \App\Http\Controllers\Api\Auth\AuthController::class.'@logout')->name('logout');

    Route::get('/user', function (Request $request) {
        $with = $request->get('with');

        /* Roles always retrieves */
        $request->merge(['with' => "$with,roles"]);

        return (new \App\Http\Controllers\Api\UserController)->show($request, $request->user());
    });

    Route::group(['middleware' => ['cors', 'json.response']], function () {
        Route::apiResource('users', \App\Http\Controllers\Api\UserController::class);
        Route::apiResource('roles', \App\Http\Controllers\Api\RoleController::class);
        Route::apiResource('schools', \App\Http\Controllers\Api\SchoolController::class);
        Route::apiResource('grades', \App\Http\Controllers\Api\GradeController::class);
        Route::apiResource('subjects', \App\Http\Controllers\Api\SubjectController::class, [
            'except' => ['index', 'show']
        ]);
        Route::apiResource('tasks', \App\Http\Controllers\Api\TaskController::class);
        Route::apiResource('achievements', \App\Http\Controllers\Api\AchievementController::class);
        Route::apiResource('additions', \App\Http\Controllers\Api\AdditionController::class);
    });
});

Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('/login', \App\Http\Controllers\Api\Auth\AuthController::class.'@login')->name('login');
    Route::post('/register', \App\Http\Controllers\Api\Auth\AuthController::class.'@register')->name('register');

/* Subjects */
    Route::get('/subjects', \App\Http\Controllers\Api\SubjectController::class.'@index');

    Route::get('/subjects/{slug}', function (Request $request, $slug) {
        $subject = \App\Models\Subject::where(['slug' => $slug])->get()->first();
        return (new \App\Http\Controllers\Api\SubjectController())->show($request, $subject);
    })->where('slug', '[a-z]+');

    Route::get('/subjects/{id}', function (Request $request, $id) {
        $subject = \App\Models\Subject::where(['id' => $id])->get()->first();
        return (new \App\Http\Controllers\Api\SubjectController())->show($request, $subject);
    })->where('id', '[0-9]+');
/* /Subjects */
});

Route::get('{path}', function () {
    return response()->json(null, \Illuminate\Http\Response::HTTP_NOT_FOUND);
})->where('path', '(.*)');
