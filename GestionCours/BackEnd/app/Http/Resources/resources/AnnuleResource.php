<?php

namespace App\Http\Resources\resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\resources\SessionCoursResource;

class AnnuleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'session'=>SessionCoursResource::make($this->session),
            'motif'=>$this->motif,
            "etat"=>$this->etat
        ];
    }
}
