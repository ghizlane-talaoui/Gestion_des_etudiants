<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/home', function () {
    return view('home');
});

Auth::routes();

//Route::get('/home', [App\Http\Controllers\StudentController::class, 'index'])->name('home');
Route::get('/index','App\Http\Controllers\StudentController@index');
Route::post('/store','App\Http\Controllers\StudentController@store');
Route::delete('/destroy/{id}','App\Http\Controllers\StudentController@destroy');
Route::get('/update/{id}','App\Http\Controllers\StudentController@edit');

Route::put('/edit/{id}','App\Http\Controllers\StudentController@update');


