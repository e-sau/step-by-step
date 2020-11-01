<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Achievement;
use Exception;
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
     */
    public function index()
    {
        return response()->json(Achievement::all(), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     * @throws ValidationException
     */
    public function store(Request $request)
    {
        $data = $this->validate($request, Achievement::rules());

        $achievement = Achievement::create($data);

        return response()->json($achievement, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  Achievement $achievement
     * @return JsonResponse
     */
    public function show(Achievement $achievement)
    {
        return response()->json($achievement, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Achievement $achievement
     * @return JsonResponse
     * @throws ValidationException
     */
    public function update(Request $request, Achievement $achievement)
    {
        $data = $this->validate($request, Achievement::rules());

        $achievement->update($data);

        return response()->json($achievement, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Achievement $achievement
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(Achievement $achievement)
    {
        $users = $achievement->users();
        $user_ids = $users->allRelatedIds()->all();
        $users->detach($user_ids);

        $achievement->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
