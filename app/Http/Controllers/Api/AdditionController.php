<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Addition;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\Addition as AdditionResource;

class AdditionController extends Controller
{
    /**
     *  @OA\Get(
     *      path="/additions",
     *      summary="Get additions",
     *      description="Return list of additions with relations",
     *      operationId="getAdditions",
     *      tags={"additions"},
     *      @OA\Parameter(
     *          name="with",
     *          in="query",
     *          required=false,
     *          description="Parameter allow gets addition relations",
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
     *                      ref="#/components/schemas/Addition",
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
        $this->authorize('viewAny', Addition::class);

        $additions = $this->getModelCollectionWithRequestParams($request, Addition::class);

        return AdditionResource::collection($additions);
    }

    /**
     *  @OA\Post(
     *      path="/additions",
     *      summary="Create addition",
     *      description="Create a new addition",
     *      operationId="createAddition",
     *      tags={"additions"},
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              required={"title", "link"},
     *              @OA\Property(property="title", type="string"),
     *              @OA\Property(property="link", type="string"),
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
        $this->authorize('create', Addition::class);

        $data = $this->validate($request, Addition::createRules());

        $addition = Addition::create($data);

        return response()->json($addition, Response::HTTP_CREATED);
    }

    /**
     *  @OA\Get(
     *      path="/additions/{id}",
     *      summary="Get addition",
     *      description="Return addition with relations",
     *      operationId="showAddition",
     *      tags={"additions"},
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          description="Addition ID",
     *          @OA\Schema(
     *              type="integer",
     *          ),
     *      ),
     *      @OA\Parameter(
     *          name="with",
     *          in="query",
     *          required=false,
     *          description="Parameter allow gets addition relations",
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
     *                  ref="#/components/schemas/Addition",
     *              ),
     *          )
     *      ),
     *  )
     */
    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Addition $addition
     * @return AdditionResource
     * @throws AuthorizationException
     */
    public function show(Request $request, Addition $addition)
    {
        $this->authorize('view', $addition);

        $with = $this->getWithRelationsParameterInModel(Addition::class, $request->get('with'));

        return $with ? new AdditionResource($addition->load($with)) : new AdditionResource($addition);
    }

    /**
     *  @OA\Put(
     *      path="/additions/{id}",
     *      summary="Update addition",
     *      description="Update addition",
     *      operationId="updateAddition",
     *      tags={"additions"},
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          description="Addition ID",
     *          @OA\Schema(
     *              type="integer",
     *          ),
     *      ),
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              @OA\Property(property="title", type="string"),
     *              @OA\Property(property="link", type="string"),
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
     * @param Addition $addition
     * @return JsonResponse
     * @throws ValidationException
     * @throws AuthorizationException
     */
    public function update(Request $request, Addition $addition)
    {
        $this->authorize('update', $addition);

        $data = $this->validate($request, Addition::updateRules());

        $addition->update($data);

        return response()->json($addition, Response::HTTP_OK);
    }

    /**
     *  @OA\Delete(
     *      path="/additions/{id}",
     *      summary="Delete addition",
     *      description="Delete addition",
     *      operationId="deleteAddition",
     *      tags={"additions"},
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          description="Addition ID",
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
     * @param Addition $addition
     * @return JsonResponse
     * @throws Exception
     * @throws AuthorizationException
     */
    public function destroy(Addition $addition)
    {
        $this->authorize('delete', $addition);

        $tasks = $addition->tasks();
        $tasks_ids = $tasks->allRelatedIds()->all();
        $tasks->detach($tasks_ids);

        $addition->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
