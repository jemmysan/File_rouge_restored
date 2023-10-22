<?php

namespace App\Http\Resources\resources;

use App\Models\ProfModule;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\resources\ProfModuleResource;
use App\Http\Resources\resources\SessionCoursResource;

class CoursResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'sessions'=> $this->sessions,
            'id'=>$this->id,
            "anne_semestre"=>AnneeSemestreResource::make($this->anneesemestre),
            "prof_module_id"=>new ProfModuleResource($this->profModule),
            "classe_id"=>$this->classe,
            "quantum_horaire"=>$this->quantum_horaire,
        ];
    }

}
