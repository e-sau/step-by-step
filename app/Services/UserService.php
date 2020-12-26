<?php

namespace App\Services;

use App\Models\Grade;
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

                $lastItem = $userTasksSorted->last();
                $completeDate = is_object($lastItem) ? $lastItem->pivot->updated_at : null;

                $data[] = [
                    'id' => $subject->id,
                    'slug' => $subject->slug,
                    'title' => $subject->title,
                    'grade' => '1', // Пока заглушка (в текущей логике относится к пользователю, а не к предмету
                    'score' => $middleScore,
                    'completeDate' => $completeDate
                ];
            }
        }

        return [
            'data' => $data
        ];
    }

    public static function getUserSubjectTasks(User $user, Subject $subject): array
    {
        $tasks = $user->tasks()->where(['subject_id' => $subject->id])->get()->all();

        $data = $tasks ? array_map(function ($task) use ($user) {
            $userTask = $task->userTask()->where([
                'task_id' => $task->id,
                'user_id' => $user->id,
            ])->first();

            return [
                'id' => $task->id,
                'title' => $task->title,
                'description' => $task->description,
                'difficult' => $task->difficult,
                'solution' => $task->solution,
                'type' => $task->type->name,
                'isCompleted' => $userTask ? !!$userTask->isCompleted : null,
                'created_at' => $userTask ? $userTask->created_at : null,
                'updated_at' => $userTask ? $userTask->updated_at : null,
            ];
        }, $tasks) : [];

        return [
            'data' => $data
        ];
    }

    public static function getUserRatingByGrade(User $user): array
    {
        /* @var Grade|null $grade */
        $grade = $user->grade->first();
        if (!$grade) return ['data' => null];

        $users = $grade->users->all();

        $rating = [];
        foreach ($users as $user) {
            $userTasksCompleted = $user->userTask()
                ->where([
                    'user_id' => $user->id,
                    ['isCompleted', '<>', null]
                ])
                ->get()
                ->count();

            $rating[] = [
                'id' => $user->id,
                'name' => $user->name,
                'completed' => $userTasksCompleted
            ];
        }

        if ($rating) {
            usort($rating, function($a, $b) {
                return $b['completed'] <=> $a['completed'] ;
            });
        }

        return [
            'data' => [
                'grade' => $grade->level.$grade->letter,
                'rating' => $rating
            ]
        ];
    }
}
