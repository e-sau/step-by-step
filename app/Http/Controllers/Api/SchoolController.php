<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\School;
use Illuminate\Http\Request;

class SchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(School::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $school = School::create($request->all());

        return response()->json($school, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  School  $school
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(School $school)
    {
        return response()->json($school, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  School  $school
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, School $school)
    {
        $school->update($request->all());

        return response()->json($school, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  School  $school
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(School $school)
    {
        // TODO: delete relations
        $school->delete();

        return response()->json(null, 204);
    }
}
