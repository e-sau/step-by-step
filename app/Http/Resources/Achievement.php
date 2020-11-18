<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Achievement extends JsonResource
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
            'description' => $this->description,
            'code' => $this->code,
            'image' => $this->image,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'users' => User::collection($this->whenLoaded('users'))
        ];
    }
}
