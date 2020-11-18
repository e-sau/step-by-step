<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\Role as RoleResource;

class RoleController extends Controller
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
        $this->authorize('viewAny', Role::class);

        $roles = $this->getModelCollectionWithRequestParams($request, Role::class);

        return RoleResource::collection($roles);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     * @throws ValidationException
     * @throws AuthorizationException
     */
    public function store(Request $request)
    {
        $this->authorize('create', Role::class);

        $data = $this->validate($request, Role::rules());

        $role = Role::create($data);

        return response()->json($role, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Role $role
     * @return RoleResource
     * @throws AuthorizationException
     */
    public function show(Request $request, Role $role)
    {
        $this->authorize('view', $role);

        $with = $this->getWithRelationsParameterInModel(Role::class, $request->get('with'));
        if ($with) {
            return new RoleResource($role->load($with));
        }

        return new RoleResource($role);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Role $role
     * @return JsonResponse
     * @throws ValidationException
     * @throws AuthorizationException
     */
    public function update(Request $request, Role $role)
    {
        $this->authorize('update', $role);

        $data = $this->validate($request, Role::rules());

        $role->update($data);

        return response()->json($role, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Role $role
     * @return JsonResponse
     * @throws Exception
     * @throws AuthorizationException
     */
    public function destroy(Role $role)
    {
        $this->authorize('delete', $role);

        $users = $role->users();
        $users->detach($users->allRelatedIds()->all());

        $role->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
