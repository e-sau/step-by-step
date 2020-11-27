<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\Subject as SubjectResource;

class SubjectController extends Controller
{
    /**
     *  @OA\Get(
     *      path="/subjects",
     *      summary="Get subjects",
     *      description="Return list of subjects with relations",
     *      operationId="getSubjects",
     *      tags={"subjects"},
     *      @OA\Parameter(
     *          name="with",
     *          in="query",
     *          required=false,
     *          description="Parameter allow gets subject relations",
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
     *                      ref="#/components/schemas/Subject",
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
//        $this->authorize('viewAny', Subject::class);

        $subjects = $this->getModelCollectionWithRequestParams($request, Subject::class);

        return SubjectResource::collection($subjects);
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
        $this->authorize('create', Subject::class);

        $data = $this->validate($request, Subject::createRules());

        $subject = Subject::create($data);

        return response()->json($subject, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Subject $subject
     * @return SubjectResource
     * @throws AuthorizationException
     */
    public function show(Request $request, Subject $subject)
    {
//        $this->authorize('view', $subject);

        $with = $this->getWithRelationsParameterInModel(Subject::class, $request->get('with'));
        if ($with) {
            return new SubjectResource($subject->load($with));
        }

        return new SubjectResource($subject);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Subject $subject
     * @return JsonResponse
     * @throws ValidationException
     */
    public function update(Request $request, Subject $subject)
    {
        $this->authorize('update', $subject);

        $data = $this->validate($request, Subject::updateRules());

        $subject->update($data);

        return response()->json($subject, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Subject $subject
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(Subject $subject)
    {
        $this->authorize('delete', $subject);

        // if the subject has tasks, update tasks first
        if ($subject->tasks->all())
        {
            return response()->json(null, Response::HTTP_CONFLICT);
        }

        $subject->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
