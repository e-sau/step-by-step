<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use Illuminate\Http\Request;

class GradeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(Grade::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $grade = Grade::create($request->all());

        return response()->json($grade, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  Grade  $grade
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Grade $grade)
    {
        return response()->json($grade, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Grade  $grade
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Grade $grade)
    {
        $grade->update($request->all());

        return response()->json($grade, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Grade $grade)
    {
        $grade->delete();

        return response()->json(null, 204);
    }
}
