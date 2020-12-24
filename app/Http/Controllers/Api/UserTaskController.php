<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Models\UserTask;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class UserTaskController extends Controller
{
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
        $data = $this->validate($request, UserTask::updateRules());

        UserTask::where(['task_id' => $task->id, 'user_id' => $request->user()->id])->update($data);

        return response()->json(null, Response::HTTP_OK);
    }
}
