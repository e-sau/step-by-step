<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\Task as TaskResource;

class TaskController extends Controller
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
        $this->authorize('viewAny', Task::class);

        $tasks = $this->getModelCollectionWithRequestParams($request, Task::class);

        return TaskResource::collection($tasks);
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
     * @param Request $request
     * @param Task $task
     * @return TaskResource
     * @throws AuthorizationException
     */
    public function show(Request $request, Task $task)
    {
        $this->authorize('view', $task);

        $with = $this->getWithRelationsParameterInModel(Task::class, $request->get('with'));
        if ($with) {
            return new TaskResource(Task::with($with)->find($task->id));
        }

        return new TaskResource($task);
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
