<?php

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

Route::get('plants', 'PlantsController@getAllPlants');
Route::post('plants', 'PlantsController@createPlant');
Route::post('plants/upload', 'PlantsController@uploadPlantImage');
