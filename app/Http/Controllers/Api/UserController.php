<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use App\Models\Subject;
use App\Models\User;
use App\Services\UserService;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use App\Http\Resources\User as UserResource;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     *  @OA\Get(
     *      path="/user",
     *      summary="Get current user",
     *      description="Return current user with relations (roles always retrieves)",
     *      operationId="getCurrentUser",
     *      tags={"users"},
     *      @OA\Parameter(
     *          name="with",
     *          in="query",
     *          required=false,
     *          description="Parameter allow gets user relations",
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
     *              @OA\Property(
     *                  property="data",
     *                  type="object",
     *                  ref="#/components/schemas/User",
     *              ),
     *          )
     *      ),
     *  )
     */

    /**
     *  @OA\Get(
     *      path="/users",
     *      summary="Get users",
     *      description="Return list of users with relations",
     *      operationId="getUsers",
     *      tags={"users"},
     *      @OA\Parameter(
     *          name="with",
     *          in="query",
     *          required=false,
     *          description="Parameter allow gets user relations",
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
     *                      ref="#/components/schemas/User",
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
        $this->authorize('viewAny', User::class);

        $users = $this->getModelCollectionWithRequestParams($request, User::class);

        return UserResource::collection($users);
    }

    /**
     *  @OA\Post(
     *      path="/users",
     *      summary="Create user",
     *      description="Create a new user",
     *      operationId="createUser",
     *      tags={"users"},
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              required={"login", "name", "surname", "birthday", "email", "password", "password_confirmation"},
     *              @OA\Property(property="login", type="string", example="user"),
     *              @OA\Property(property="name", type="string", example="Alex"),
     *              @OA\Property(property="surname", type="string", example="Murphy"),
     *              @OA\Property(property="birthday", type="date", example="2014-01-01"),
     *              @OA\Property(property="email", type="string", example="api@step-by-step.ru"),
     *              @OA\Property(property="password", type="string", example="strongPass"),
     *              @OA\Property(property="password_confirmation", type="string", example="strongPass"),
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
     * @throws AuthorizationException
     */
    public function store(Request $request)
    {
        $this->authorize('create', User::class);

        // stub
        return response()->json(null, Response::HTTP_CREATED);
    }

    /**
     *  @OA\Get(
     *      path="/users/{id}",
     *      summary="Get user",
     *      description="Return user with relations",
     *      operationId="showUser",
     *      tags={"users"},
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          description="User ID",
     *          @OA\Schema(
     *              type="integer",
     *          ),
     *      ),
     *      @OA\Parameter(
     *          name="with",
     *          in="query",
     *          required=false,
     *          description="Parameter allow gets user relations",
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
     *                  ref="#/components/schemas/User",
     *              ),
     *          )
     *      ),
     *  )
     */
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
        if (!$user->id) $user = $request->user();

        $this->authorize('view', $user);

        $with = $this->getWithRelationsParameterInModel(User::class, $request->get('with'));

        return $with ? new UserResource($user->load($with)) : new UserResource($user);
    }

    /**
     *  @OA\Put(
     *      path="/users/{id}",
     *      summary="Update user",
     *      description="Update user",
     *      operationId="updateUser",
     *      tags={"users"},
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          description="User ID",
     *          @OA\Schema(
     *              type="integer",
     *          ),
     *      ),
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              @OA\Property(property="name", type="string"),
     *              @OA\Property(property="email", type="string"),
     *              @OA\Property(property="email_verified_at", type="string"),
     *              @OA\Property(property="password", type="string"),
     *              @OA\Property(property="remember_token", type="string"),
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
     * @param  User  $user
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(Request $request, User  $user)
    {
        $this->authorize('update', $user);
        $user->update( $request->all() );
        return response()->json(null, Response::HTTP_OK);
    }

    /**
     *  @OA\Delete(
     *      path="/users/{id}",
     *      summary="Delete user",
     *      description="Delete user",
     *      operationId="deleteUser",
     *      tags={"users"},
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          description="User ID",
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

    /**
     *  @OA\Get(
     *      path="/ratings/grade",
     *      summary="Get grade rating",
     *      description="Retrieve users grade rating for authorized user",
     *      operationId="getGradeRating",
     *      tags={"users"},
     *      @OA\Response(
     *          response=200,
     *          description="Success",
     *          @OA\JsonContent(
     *              @OA\Property(
     *                  property="data",
     *                  type="object",
     *                      @OA\Property(property="grade", type="string", example="1A"),
     *                      @OA\Property(property="rating", type="array",
     *                          @OA\Items(
     *                              type="object",
     *                              @OA\Property(property="id", type="integer", example=1),
     *                              @OA\Property(property="name", type="string", example="Billy"),
     *                              @OA\Property(property="completed", type="integer", example=5),
     *                          ),
     *                      ),
     *              ),
     *          )
     *      ),
     *  )
     */
    /**
     * Retrieve users grade rating for authorized user
     *
     * @param Request $request
     * @return array
     */
    public function getRatingByGrade(Request $request)
    {
        return UserService::getUserRatingByGrade($request->user());
    }

    public function getAvailableTasks(Request $request): array
    {
        return UserService::getUserTasks($request->user());
    }

    public function getCompletedTasks(Request $request): array
    {
        return UserService::getUserTasks($request->user(), true);
    }

    public function getCompletedSubjects(Request $request): array
    {
        return UserService::getUserCompletedSubjects($request->user());
    }

    public function getSubjectTasks(Request $request, Subject $subject): array
    {
        return UserService::getUserSubjectTasks($request->user(), $subject);
    }
}
