<?php

namespace App\Http\Controllers;

use App\Service;
use App\Articulo;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ordenes = Service::all();
        
        foreach ($ordenes as $key => $value) {
            $value->articulos;
        }

        return $ordenes;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $orden = Service::create($request->model);

        foreach ($request->arti as $key => $value) {
           $value['service_id'] = $orden->id;
           Articulo::create($value);
        }

        return ['data' => 1];
    }

    /**
     * 
     * Display the specified resource.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Service $service)
    {
       // dd($request->articulos);
        $dat = Service::find($request->id)->update(['cliente'=> $request->cliente]);
        foreach ($request->articulos as $key => $value) {
            $art = Articulo::find($value['id']);
            $art->articulo = $value['articulo'];
            $art->tipo = $value['tipo'];
            $art->sku = $value['sku'];
            $art->save();
        }
        
        return ['data'=>$dat];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function destroy(Service $service)
    {
        //
    }
}
