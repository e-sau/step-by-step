<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Review extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  mixed $request
     * @return array
     */
    public function toArray($request)
    {
        $user = $this->user;
        $fio = $user->name.' '.$user->surname;

        return [
            'id' => $this->id,
            'message' => $this->message,
            'fio' => $fio,
            'user' => $user,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
