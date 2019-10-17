<?php

namespace App\Http\Controllers;

use App\Service;
use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function adduser(Request $request)  
    {
        
        // Mail::to('anreno@gmail.com')->send(new TestMail);
        // dd('okis');
        $validatedData = $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|required',
            'confirm_password' => 'required|same:password',
        ]);
        
     

        $campos = $request->all();
        
        // $campos['password'] = ($request->password);
       
        $user = User::create($request->all());
        return $user->id;
    }


    public function confiruser(Request $request){
       // dd($request->all());
        return User::where(['email'=> $request->email,'password' =>  $request->password])->first();

    }

    public function alluser(){
        // dd($request->all());
         return User::all();
     }

     public function getuser($id){
        // dd($request->all());
         return User::find($id);
     }

     public function getclientes(){
        // dd($request->all());
         return Service::pluck('cliente');
     }

     public function getreport($cli){
        // dd($cli);
        $report = Service::where('cliente', $cli)->get();
        foreach ($report as $key => $value) {
            $value->articulos;
            $value->tecnico = User::find($value->user_id);
        }
         return $report;
     }
     
}
