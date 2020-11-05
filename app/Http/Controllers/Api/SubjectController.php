<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return response()->json(Subject::all(), Response::HTTP_OK);
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
        $data = $this->validate($request, Subject::rules());

        $subject = Subject::create($data);

        return response()->json($subject, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  Subject $subject
     * @return JsonResponse
     */
    public function show(Subject $subject)
    {
        return response()->json($subject, Response::HTTP_OK);
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
        // if the subject has tasks, update tasks first
        if ($subject->tasks->all())
        {
            return response()->json(null, Response::HTTP_CONFLICT);
        }

        $subject->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
