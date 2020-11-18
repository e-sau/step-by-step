<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Grade extends JsonResource
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
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'school' => $this->whenLoaded('school'),
            'users' => User::collection($this->whenLoaded('users'))
        ];
    }
}
