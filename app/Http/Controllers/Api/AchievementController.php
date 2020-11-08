<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Achievement;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class AchievementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('viewAny', Achievement::class);

        return response()->json(Achievement::all(), Response::HTTP_OK);
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
     * @param  Achievement $achievement
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Achievement $achievement)
    {
        $this->authorize('view', $achievement);

        return response()->json($achievement, Response::HTTP_OK);
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
