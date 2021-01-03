<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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




Route::get('/account','AccountController@index');
Route::get('/userall','AccountController@indexall');
Route::post('/account/store', 'AccountController@store');
Route::get('/account/export', 'AccountController@export');
Route::get('/account/search','AccountController@search');
Route::get('/account/edit/{id}', 'ArticleController@getArticle');
Route::put('/account/update/{id}', 'ArticleController@update');
Route::put('/account/updateall/', 'AccountController@update');
Route::delete('/account/delete/{id}', 'ArticleController@delete'); 
Route::get('/event','EventController@index');
Route::get('/articles', 'ArticleController@index');
Route::post('/article/store', 'ArticleController@store');
Route::get('/article/show/{id}', 'ArticleController@getArticle');
Route::put('/article/update/{id}', 'ArticleController@update');
Route::delete('/article/delete/{id}', 'ArticleController@delete'); 
Route::get('/kirim-email', 'EmailController@index');
Route::post('register', 'RegisterController@register');
Route::post('/login', 'LoginController@login');
Route::post('/logout', 'LoginController@logout');
Route::post('/uploadimg', 'DriveController@store');
Route::get('/document', 'DriveController@index');
Route::get('/category', 'CategoryController@index');
Route::get('/datacheck', 'CategoryController@missingdata');
Route::get('/category/search', 'CategoryController@search');
Route::get('/category/detail/{id}', 'CategoryController@detail');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/athenticated', function () {
    return true;
});