<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Achievement;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\Achievement as AchievementResource;

class AchievementController extends Controller
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
        $this->authorize('viewAny', Achievement::class);

        $achievements = $this->getModelCollectionWithRequestParams($request, Achievement::class);

        return AchievementResource::collection($achievements);
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
        $this->authorize('create', Achievement::class);

        $data = $this->validate($request, Achievement::createRules());

        $achievement = Achievement::create($data);

        return response()->json($achievement, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Achievement $achievement
     * @return AchievementResource
     * @throws AuthorizationException
     */
    public function show(Request $request, Achievement $achievement)
    {
        $this->authorize('view', $achievement);

        $with = $this->getWithRelationsParameterInModel(Achievement::class, $request->get('with'));
        if ($with) {
            return new AchievementResource(Achievement::with($with)->find($achievement->id));
        }

        return new AchievementResource($achievement);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Achievement $achievement
     * @return JsonResponse
     * @throws ValidationException
     * @throws AuthorizationException
     */
    public function update(Request $request, Achievement $achievement)
    {
        $this->authorize('update', $achievement);

        $data = $this->validate($request, Achievement::updateRules());

        $achievement->update($data);

        return response()->json($achievement, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Achievement $achievement
     * @return JsonResponse
     * @throws Exception
     * @throws AuthorizationException
     */
    public function destroy(Achievement $achievement)
    {
        $this->authorize('delete', $achievement);

        $users = $achievement->users();
        $user_ids = $users->allRelatedIds()->all();
        $users->detach($user_ids);

        $achievement->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
