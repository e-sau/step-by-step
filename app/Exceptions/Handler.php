<?php

namespace App\Exceptions;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    public function render($request, Throwable $e)
    {
        if ($request->expectsJson())
        {
            if ($e instanceof ValidationException)
            {
                return response()->json(['errors' => $e->errors()], $e->status);
            }

            if ($e instanceof ModelNotFoundException)
            {
                return response()->json(null, Response::HTTP_NOT_FOUND);
            }

            if ($e instanceof MethodNotAllowedHttpException)
            {
                return response()->json(null, $e->getStatusCode());
            }
        }

        return parent::render($request, $e);
    }
}
