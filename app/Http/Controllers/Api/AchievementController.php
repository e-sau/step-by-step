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
     *  @OA\Get(
     *      path="/achievements",
     *      summary="Get achievements",
     *      description="Return list of achievements with relations",
     *      operationId="getAchievements",
     *      tags={"achievements"},
     *      @OA\Parameter(
     *          name="with",
     *          in="query",
     *          required=false,
     *          description="Parameter allow gets achievement relations",
     *          @OA\Schema(
     *              type="array",
     *              minItems=1,
     *              @OA\Items(
     *                  type="string"
     *              ),
     *          ),
     *          style="form",
     *          explode=false,
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthorized",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Success",
     *          @OA\JsonContent(
     *              @OA\Property(property="data", type="array",
     *                  @OA\Items(
     *                      type="object",
     *                      ref="#/components/schemas/Achievement",
     *                  ),
     *              ),
     *          )
     *      ),
     *  )
     */
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
     *  @OA\Post(
     *      path="/achievements",
     *      summary="Create achievement",
     *      description="Create a new achievement",
     *      operationId="createAchievement",
     *      tags={"achievements"},
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              required={"title", "description", "code"},
     *              @OA\Property(property="title", type="string"),
     *              @OA\Property(property="description", type="string"),
     *              @OA\Property(property="code", type="string"),
     *              @OA\Property(property="image", type="string"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthorized",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=201,
     *          description="Created",
     *      ),
     *  )
     */
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
     *  @OA\Get(
     *      path="/achievements/{id}",
     *      summary="Get achievement",
     *      description="Return achievement with relations",
     *      operationId="showAchievement",
     *      tags={"achievements"},
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          description="Achievement ID",
     *          @OA\Schema(
     *              type="integer",
     *          ),
     *      ),
     *      @OA\Parameter(
     *          name="with",
     *          in="query",
     *          required=false,
     *          description="Parameter allow gets achievement relations",
     *          @OA\Schema(
     *              type="array",
     *              minItems=1,
     *              @OA\Items(
     *                  type="string",
     *              ),
     *          ),
     *          style="form",
     *          explode=false,
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthorized",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Success",
     *          @OA\JsonContent(
     *              @OA\Property(
     *                  property="data",
     *                  type="object",
     *                  ref="#/components/schemas/Achievement",
     *              ),
     *          )
     *      ),
     *  )
     */
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

        return $with ? new AchievementResource($achievement->load($with)) : new AchievementResource($achievement);
    }

    /**
     *  @OA\Put(
     *      path="/achievements/{id}",
     *      summary="Update achievement",
     *      description="Update achievement",
     *      operationId="updateAchievement",
     *      tags={"achievements"},
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          description="Achievement ID",
     *          @OA\Schema(
     *              type="integer",
     *          ),
     *      ),
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              @OA\Property(property="title", type="string"),
     *              @OA\Property(property="description", type="string"),
     *              @OA\Property(property="code", type="string"),
     *              @OA\Property(property="image", type="string"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthorized",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Success",
     *      ),
     *  )
     */
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
     *  @OA\Delete(
     *      path="/achievements/{id}",
     *      summary="Delete achievement",
     *      description="Delete achievement",
     *      operationId="deleteAchievement",
     *      tags={"achievements"},
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          description="Achievement ID",
     *          @OA\Schema(
     *              type="integer",
     *          ),
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthorized",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=204,
     *          description="Success",
     *      ),
     *  )
     */
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
