<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('viewAny', Task::class);

        return response()->json(Task::all(), Response::HTTP_OK);
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
        $this->authorize('create', Task::class);

        $data = $this->validate($request, Task::createRules());

        $task = Task::create($data);

        return response()->json($task, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  Task  $task
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Task $task)
    {
        $this->authorize('view', $task);

        return response()->json($task, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Task $task
     * @return JsonResponse
     * @throws ValidationException
     * @throws AuthorizationException
     */
    public function update(Request $request, Task $task)
    {
        $this->authorize('update', $task);

        $data = $this->validate($request, Task::updateRules());

        $task->update($data);

        return response()->json($task, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Task $task
     * @return JsonResponse
     * @throws Exception
     * @throws AuthorizationException
     */
    public function destroy(Task $task)
    {
        $this->authorize('delete', $task);

        $users = $task->users();
        $user_ids = $users->allRelatedIds()->all();
        $users->detach($user_ids);

        $additions = $task->additions();
        $additions_ids = $additions->allRelatedIds()->all();
        $additions->detach($additions_ids);

        $task->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
