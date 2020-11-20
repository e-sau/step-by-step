<?php

namespace App\Http\Resources;

use App\Models\TaskType;
use Illuminate\Http\Resources\Json\JsonResource;

class Task extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param mixed $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'difficult' => $this->difficult,
            'solution' => $this->solution,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'subject' => $this->whenLoaded('subject'),
            'additions' => Addition::collection($this->whenLoaded('additions')),
            'users' => User::collection($this->whenLoaded('users')),
            'type' => $this->whenLoaded('type')
        ];
    }
}
