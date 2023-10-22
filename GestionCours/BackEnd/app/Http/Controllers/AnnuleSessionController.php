<?php

namespace App\Http\Controllers;

use App\Models\SessionCours;
use Illuminate\Http\Request;
use App\Models\AnnuleSession;
use App\Http\Requests\StoreAnnuleSessionRequest;
use App\Http\Resources\resources\AnnuleResource;
use App\Http\Requests\UpdateAnnuleSessionRequest;

class AnnuleSessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $demande = AnnuleSession::where('etat','en cours')->get();
       return AnnuleResource::collection($demande);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
       
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $idsess = $request->id;
       $annule =  AnnuleSession::create([
            "session_cours_id" =>$idsess,
            'motif'=>$request->motif,
            'etat'=>'en cours'
       ]);

       return $annule;
    }


    public function traiterDemandeAnnulation(Request $request)
    {
        $res = ['refuse', 'valide'];
        $id = $request->id;
        $etat = $request->etat;
        AnnuleSession::where('id',$id)
                    ->update(['etat'=>$res[$etat]]);
        return response()->json(["message"=>'Demande bien Traitée']);
    }


    /**
     * Display the specified resource.
     */
    public function show(AnnuleSession $annuleSession)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AnnuleSession $annuleSession)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAnnuleSessionRequest $request, AnnuleSession $annuleSession)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AnnuleSession $annuleSession)
    {
        //
    }
}
