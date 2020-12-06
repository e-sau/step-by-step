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

        return $with ? new GradeResource($grade->load($with)) : new GradeResource($grade);
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
