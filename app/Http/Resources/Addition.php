<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Addition extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  mixed  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'link' => $this->link,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'tasks' => Task::collection($this->whenLoaded('tasks'))
        ];
    }
}
