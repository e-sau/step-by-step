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
        $userId = $request->user()->id;
        $data = $this->validate($request, UserTask::updateRules());
        $userTask = UserTask::query()
            ->where([
                ['user_id', '=',  $userId ],
                ['task_id', '=', $task->id ]
            ])->first();

        if ( !$userTask ) {
           $model = new UserTask();
           $model->user_id = $userId;
           $model->task_id = $task->id;
           $model->isCompleted = $data['isCompleted'];
           $model->save();

        } else {
            $userTask->update( $data );
        }

        return response()->json(null, Response::HTTP_OK);
    }
}
