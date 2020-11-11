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
            'name' => $this->name,
            'email' => $this->email,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'roles' => Role::collection($this->whenLoaded('roles')),
            'grades' => Grade::collection($this->whenLoaded('grades')),
            'tasks' => Task::collection($this->whenLoaded('tasks')),
            'achievements' => Achievement::collection($this->whenLoaded('achievements')),
        ];
    }
}
