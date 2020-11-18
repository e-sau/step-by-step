<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use App\Http\Resources\User as UserResource;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return AnonymousResourceCollection
     * @throws AuthorizationException
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', User::class);

        $users = $this->getModelCollectionWithRequestParams($request, User::class);

        return UserResource::collection($users);
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
     * @param Request $request
     * @param User $user
     * @return UserResource
     * @throws AuthorizationException
     */
    public function show(Request $request, User  $user)
    {
        $this->authorize('view', $user);

        $with = $this->getWithRelationsParameterInModel(User::class, $request->get('with'));
        if ($with) {
            return new UserResource($user->load($with));
        }

        return new UserResource($user);
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
