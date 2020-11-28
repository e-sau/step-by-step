<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AddWithParams
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $with = $request->get('with');

        /* Add Roles */
        $request->merge(['with' => "$with,roles"]);

        return $next($request);
    }
}
