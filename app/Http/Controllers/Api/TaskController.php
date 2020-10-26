<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return response()->json(Task::all(), 200);
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
        $data = $this->validate($request, Task::rules());

        $task = Task::create($data);

        return response()->json($task, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  Task  $task
     * @return JsonResponse
     */
    public function show(Task $task)
    {
        return response()->json($task, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Task $task
     * @return JsonResponse
     * @throws ValidationException
     */
    public function update(Request $request, Task $task)
    {
        $data = $this->validate($request, Task::rules());

        $task->update($data);

        return response()->json($task, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Task $task
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(Task $task)
    {
        $users = $task->users();
        $user_ids = $users->allRelatedIds()->all();
        $users->detach($user_ids);

        $additions = $task->additions();
        $additions_ids = $additions->allRelatedIds()->all();
        $additions->detach($additions_ids);

        $task->delete();

        return response()->json(null, 204);
    }
}
