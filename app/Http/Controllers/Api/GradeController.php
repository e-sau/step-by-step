<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\Grade as GradeResource;

class GradeController extends Controller
{
    /**
     *  @OA\Get(
     *      path="/grades",
     *      summary="Get grades",
     *      description="Return list of grades with relations",
     *      operationId="getGrades",
     *      tags={"subjects"},
     *      @OA\Parameter(
     *          name="with",
     *          in="query",
     *          required=false,
     *          description="Parameter allow gets grade relations",
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
     *                      ref="#/components/schemas/Grade",
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
        $this->authorize('viewAny', Grade::class);

        $grades = $this->getModelCollectionWithRequestParams($request, Grade::class);

        return GradeResource::collection($grades);
    }

    /**
     *  @OA\Post(
     *      path="/grades",
     *      summary="Create grade",
     *      description="Create a new grade",
     *      operationId="createGrade",
     *      tags={"grades"},
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              required={"level", "school_id"},
     *              @OA\Property(property="title", type="string"),
     *              @OA\Property(property="school_id", type="integer"),
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
        $this->authorize('create', Grade::class);

        $data = $this->validate($request, Grade::createRules());

        $grade = Grade::create($data);

        return response()->json($grade, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Grade $grade
     * @return GradeResource
     * @throws AuthorizationException
     */
    public function show(Request $request, Grade $grade)
    {
        $this->authorize('view', $grade);

        $with = $this->getWithRelationsParameterInModel(Grade::class, $request->get('with'));
        if ($with) {
            return new GradeResource($grade->load($with));
        }

        return new GradeResource($grade);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Grade $grade
     * @return JsonResponse
     * @throws ValidationException
     * @throws AuthorizationException
     */
    public function update(Request $request, Grade $grade)
    {
        $this->authorize('update', $grade);

        $data = $this->validate($request, Grade::updateRules());

        $grade->update($data);

        return response()->json($grade, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Grade $grade
     * @return JsonResponse
     * @throws Exception
     * @throws AuthorizationException
     */
    public function destroy(Grade $grade)
    {
        $this->authorize('delete', $grade);

        Grade::deleteWithRelations($grade);

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
