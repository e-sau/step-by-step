<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class GradeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return response()->json(Grade::all(), 200);
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
        $data = $this->validate($request, Grade::rules());

        $grade = Grade::create($data);

        return response()->json($grade, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  Grade  $grade
     * @return JsonResponse
     */
    public function show(Grade $grade)
    {
        return response()->json($grade, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Grade $grade
     * @return JsonResponse
     * @throws ValidationException
     */
    public function update(Request $request, Grade $grade)
    {
        $data = $this->validate($request, Grade::rules());

        $grade->update($data);

        return response()->json($grade, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Grade $grade
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(Grade $grade)
    {
        $users = $grade->users();
        $users->detach($users->allRelatedIds()->all());

        $grade->delete();

        return response()->json(null, 204);
    }
}
