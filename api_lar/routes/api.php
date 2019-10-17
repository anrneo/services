<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('adduser', 'UserController@adduser');
Route::post('userlogged', 'UserController@confiruser');
Route::get('alluser', 'UserController@alluser');
Route::get('getclientes', 'UserController@getclientes');
Route::get('getreport/{cli}', 'UserController@getreport');
Route::get('getuser/{id}', 'UserController@getuser');
Route::resource('services', 'ServiceController');

