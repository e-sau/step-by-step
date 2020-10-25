<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        // stub
        return response()->json(User::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        // stub
        return response()->json(null, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  User  $user
     * @return JsonResponse
     */
    public function show(User  $user)
    {
        // stub
        return response()->json($user, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  User  $user
     * @return JsonResponse
     */
    public function update(Request $request, User  $user)
    {
        // stub
        return response()->json(null, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return JsonResponse
     * @throws \Exception
     */
    public function destroy(User  $user)
    {
        // stub
        $user->delete();

        return response()->json(null, 204);
    }
}
