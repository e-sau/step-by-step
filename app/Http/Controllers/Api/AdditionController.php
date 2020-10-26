<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Addition;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AdditionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return response()->json(Addition::all(), 200);
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
        $data = $this->validate($request, Addition::rules());

        $addition = Addition::create($data);

        return response()->json($addition, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  Addition $addition
     * @return JsonResponse
     */
    public function show(Addition $addition)
    {
        return response()->json($addition, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Addition $addition
     * @return JsonResponse
     * @throws ValidationException
     */
    public function update(Request $request, Addition $addition)
    {
        $data = $this->validate($request, Addition::rules());

        $addition->update($data);

        return response()->json($addition, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Addition $addition
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(Addition $addition)
    {
        $tasks = $addition->tasks();
        $tasks_ids = $tasks->allRelatedIds()->all();
        $tasks->detach($tasks_ids);

        $addition->delete();

        return response()->json(null, 204);
    }
}
