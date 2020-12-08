<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param mixed $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'login' => $this->login,
            'name' => $this->name,
            'surname' => $this->surname,
            'birthday' => date('Y-m-d', strtotime($this->birthday)),
            'email' => $this->email,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'roles' => Role::collection($this->whenLoaded('roles')),
            'grade' => Grade::collection($this->whenLoaded('grade')),
            'tasks' => Task::collection($this->whenLoaded('tasks')),
            'avatar' => $this->avatar ? $this->avatar->url : null,
            'photo' => $this->photo ? $this->photo->url : null,
            'achievements' => Achievement::collection($this->whenLoaded('achievements')),
        ];
    }
}
