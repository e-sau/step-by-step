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

    Route::get('/ratings/grade', \App\Http\Controllers\Api\UserController::class.'@getRatingByGrade');

    Route::get('/user', \App\Http\Controllers\Api\UserController::class.'@show')->middleware('addWithParams');

    /* User Tasks */
    Route::get('/user/tasks/available', \App\Http\Controllers\Api\UserController::class.'@getAvailableTasks');
    Route::get('/user/tasks/completed', \App\Http\Controllers\Api\UserController::class.'@getCompletedTasks');

    Route::put('/user/tasks/{task}/', \App\Http\Controllers\Api\UserTaskController::class.'@update');
    /* /User Tasks */

    /* User Subjects */
    Route::get('/user/subjects/completed', \App\Http\Controllers\Api\UserController::class.'@getCompletedSubjects');

    Route::get('/user/subjects/{subject:slug}', \App\Http\Controllers\Api\UserController::class.'@getSubjectTasks');
    /* User Subjects */

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

        /* User Photos */
        Route::group([
            'as' => 'avatar',
            'prefix' => 'user'
        ], function () {
            Route::post('/avatar', \App\Http\Controllers\Api\UserPhotoController::class.'@store');
            Route::delete('/avatar', \App\Http\Controllers\Api\UserPhotoController::class.'@destroy');
        });

        Route::group([
            'as' => 'photo',
            'prefix' => 'user'
        ], function () {
            Route::post('/photo', \App\Http\Controllers\Api\UserPhotoController::class.'@store');
            Route::delete('/photo', \App\Http\Controllers\Api\UserPhotoController::class.'@destroy');
        });
        /* /User Photos */

        Route::apiResource('reviews', \App\Http\Controllers\Api\ReviewController::class, [
            'except' => ['index', 'show']
        ]);
    });
});

Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('/login', \App\Http\Controllers\Api\Auth\AuthController::class.'@login')->name('login');
    Route::post('/register', \App\Http\Controllers\Api\Auth\AuthController::class.'@register')->name('register');

/* Subjects */
    Route::get('/subjects', \App\Http\Controllers\Api\SubjectController::class.'@index');
    Route::get('/subjects/{id}', \App\Http\Controllers\Api\SubjectController::class.'@show');
/* /Subjects */

/* Reviews */
    Route::get('/reviews', \App\Http\Controllers\Api\ReviewController::class.'@index');
    Route::get('/reviews/{review}', \App\Http\Controllers\Api\ReviewController::class.'@show');
/* /Reviews */
});

Route::get('{path}', function () {
    return response()->json(null, \Illuminate\Http\Response::HTTP_NOT_FOUND);
})->where('path', '(.*)');
