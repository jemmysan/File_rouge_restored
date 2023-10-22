<?php

namespace App\Http\Resources\resources;

use Illuminate\Http\Request;
use App\Http\Resources\resources\CoursResource;
use App\Http\Resources\resources\SalleResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SessionCoursResource extends JsonResource
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
            'cours_id'=>new CoursResource($this->cours),
            'salle'=>$this->salle,
            'type_session'=>$this->type_session,
            'date'=>$this->date,
            'heure_debut'=>$this->heure_debut,
            'heure_fin'=>$this->heure_fin
        ];
    }
}
