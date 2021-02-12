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
Route::get('/account/exportexcel', 'AccountController@exportexcel');
Route::get('/account/exportpdf/{id}', 'AccountController@exportpdf');
Route::get('/account/search','AccountController@search');
Route::get('/account/accountsearch','AccountController@accountsearch');
Route::get('/account/accountsearchid','AccountController@searchid');
Route::get('/account/edit/{id}', 'ArticleController@getArticle');
Route::put('/account/update/{id}', 'ArticleController@update');
Route::get('/account/profilepicture/{id}', 'AccountController@profilepicture');
Route::put('/account/updateall/', 'AccountController@update');
Route::delete('/account/delete/{id}', 'AccountController@delete'); 
Route::get('/account/gendercount', 'AccountController@gendercount'); 
Route::get('/account/logincount', 'AccountController@logincount'); 
Route::get('/account/usercount', 'AccountController@usercount'); 
Route::get('/event','EventController@index');
Route::post('/event/addevent','EventController@addevent');
Route::put('/event/update','EventController@update');
Route::get('/event/show','EventController@search');
Route::get('/event/monthly','EventController@monthevent');
Route::delete('/event/delete/{id}', 'EventController@delete'); 

Route::get('/articles', 'ArticleController@index');
Route::post('/article/store', 'ArticleController@store');
Route::get('/article/show/{id}', 'ArticleController@getArticle');
Route::put('/article/update/{id}', 'ArticleController@update');
Route::delete('/article/delete/{id}', 'ArticleController@delete'); 
Route::get('/kirim-email', 'EmailController@index');
Route::get('/sentemailall', 'EmailController@sendemailtoall');
Route::post('register', 'RegisterController@register');
Route::post('/login', 'LoginController@login');
Route::get('/updatelogin', 'LoginController@updatelogin');
Route::post('/logout', 'LoginController@logout');
Route::post('/uploadimg', 'DriveController@store');
Route::get('/document', 'DriveController@index');
Route::get('/category', 'CategoryController@index');
Route::get('/datacheck', 'CategoryController@missingdata');
Route::get('/category/search', 'CategoryController@search');
Route::get('/category/detailname/{id}', 'CategoryController@detailname');
Route::get('/category/detail/{id}', 'CategoryController@detail');
Route::delete('/document/delete/{id}', 'DriveController@delete'); 



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/athenticated', function () {
    return true;
});