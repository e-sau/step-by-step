<?php

namespace App\Services;

use App\Models\Subject;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class UserService
{
    public static function getUserTasks(User $user, $getCompleted = false): array
    {
        $isCompleted = $getCompleted ? 1 : null;

        $tasks = $user->tasks()->where(['isCompleted' => $isCompleted])->get()->all();
        $data = [];

        foreach ($tasks as $task) {
            $subject = $task->subject;
            /* @var Collection $grade */
            $grade = $user->grade->first();

            $taskData = [
                'id' => $task->id,
                'subject' => $subject ? $subject->title : '',
                'grade' => $grade ? $grade->level : '', // В текущей логике это класс пользователя
                'difficult' => $task->difficult,
            ];

            $isCompleted
                ? $taskData['completeDate'] = $task->pivot->updated_at
                : $taskData['startDate'] = $task->pivot->created_at;

            $data[] = $taskData;
        }

        return [
            'data' => $data
        ];
    }

    public static function getUserCompletedSubjects(User $user): array
    {
        $data = [];

        $subjects = Subject::all();
        foreach ($subjects as $subject) {
            /* @var Collection $subjectTasks */
            $subjectTasks = $subject->tasks;
            $userTasks = $user->tasks()->where(['isCompleted' => 1, 'subject_id' => $subject->id])->get();

            $diff = $subjectTasks->diff($userTasks);

            if (!$diff->all()) {
                $middleScore = $userTasks->avg(function ($task) {
                    return $task->difficult;
                });

                $userTasksSorted = $userTasks->sortBy(function ($value, $key) {
                    return $value->pivot->updated_at;
                });

                $data[] = [
                    'id' => $subject->id,
                    'slug' => $subject->slug,
                    'title' => $subject->title,
                    'grade' => '1', // Пока заглушка (в текущей логике относится к пользователю, а не к предмету
                    'score' => $middleScore,
                    'completeDate' => $userTasksSorted->last()->pivot->updated_at
                ];
            }
        }

        return [
            'data' => $data
        ];
    }
}
