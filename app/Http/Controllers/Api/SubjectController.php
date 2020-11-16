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
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return AnonymousResourceCollection
     * @throws AuthorizationException
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Subject::class);

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

        $data = $this->validate($request, Subject::rules());

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
        $this->authorize('view', $subject);

        $with = $this->getWithRelationsParameterInModel(Subject::class, $request->get('with'));
        if ($with) {
            return new SubjectResource(Subject::with($with)->find($subject->id));
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

        $data = $this->validate($request, Subject::rules());

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
