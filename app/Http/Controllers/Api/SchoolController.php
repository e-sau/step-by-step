<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use App\Models\School;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class SchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return response()->json(School::all(), 200);
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
        $data = $this->validate($request, School::rules());

        $school = School::create($data);

        return response()->json($school, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  School  $school
     * @return JsonResponse
     */
    public function show(School $school)
    {
        return response()->json($school, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param School $school
     * @return JsonResponse
     * @throws ValidationException
     */
    public function update(Request $request, School $school)
    {
        $data = $this->validate($request, School::rules());

        $school->update($data);

        return response()->json($school, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param School $school
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(School $school)
    {
        foreach ($school->grades as $grade)
        {
            $users = $grade->users();
            $users->detach($users->allRelatedIds()->all());

            $grade->delete();
        }

        $school->delete();

        return response()->json(null, 204);
    }
}
