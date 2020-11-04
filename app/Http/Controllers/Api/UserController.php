<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('viewAny', User::class);

        return response()->json(User::all(), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(Request $request)
    {
        $this->authorize('create', User::class);

        // stub
        return response()->json(null, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  User  $user
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(User  $user)
    {
        $this->authorize('view', $user);

        return response()->json($user, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  User  $user
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(Request $request, User  $user)
    {
        $this->authorize('update', $user);

        // stub
        return response()->json(null, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return JsonResponse
     * @throws Exception
     * @throws AuthorizationException
     */
    public function destroy(User  $user)
    {
        $this->authorize('delete', $user);

        $user->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
