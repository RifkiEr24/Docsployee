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



// CRUD Akun
Route::get('/account','AccountController@index');
Route::get('/userall','AccountController@indexall');
Route::post('/account/store', 'AccountController@store');
Route::put('/account/updateall/', 'AccountController@update');
Route::delete('/account/delete/{id}', 'AccountController@delete'); 
Route::get('/account/exportexcel', 'AccountController@exportexcel');
Route::get('/account/exportpdf/{id}', 'AccountController@exportpdf');
Route::get('/account/search','AccountController@search');
Route::get('/account/accountsearch','AccountController@accountsearch');
Route::get('/account/accountsearchid','AccountController@searchid');
Route::get('/account/profilepicture/{id}', 'AccountController@profilepicture');
// PASSWORD
Route::post('/account/changepassword', 'AccountController@changepassword');
Route::post('/account/changepasswordadmin', 'AccountController@changepasswordadmin');

Route::get('/account/edit/{id}', 'ArticleController@getArticle');

Route::put('/account/update/{id}', 'ArticleController@update');

// count
Route::get('/account/gendercount', 'AccountController@gendercount'); 
Route::get('/account/logincount', 'AccountController@logincount'); 
// event crud
Route::get('/account/usercount', 'AccountController@usercount'); 
Route::get('/event','EventController@index');
Route::post('/event/addevent','EventController@addevent');
Route::put('/event/update','EventController@update');
Route::get('/event/show','EventController@search');
Route::get('/event/monthly','EventController@monthevent');
Route::delete('/event/delete/{id}', 'EventController@delete'); 

// EMAIL
Route::get('/kirim-email', 'EmailController@index');
Route::get('/sentemailall', 'EmailController@sendemailtoall');
// register Login
Route::post('register', 'RegisterController@register');
Route::post('/login', 'LoginController@login');
Route::get('/updatelogin', 'LoginController@updatelogin');
Route::post('/logout', 'LoginController@logout');

// DRIVE / BERKAS
Route::post('/uploadimg', 'DriveController@store');
Route::get('/document', 'DriveController@index');
Route::get('/category', 'CategoryController@index');
Route::get('/datacheck', 'CategoryController@missingdata');
Route::get('/category/search', 'CategoryController@search');
Route::get('/category/detailname/{id}', 'CategoryController@detailname');
Route::get('/category/detail/{id}', 'CategoryController@detail');
Route::delete('/document/delete/{id}', 'DriveController@delete'); 


// CRUD GOLONGAN
Route::get('/golongan', 'GolonganController@index');
Route::post('/golongan/store', 'GolonganController@store');
Route::get('/golongan/{id}', 'GolonganController@getGolongan');
Route::put('/golongan/update/{id}', 'GolonganController@update');
Route::delete('/golongan/delete/{id}', 'GolonganController@delete'); 

// CRUD JABATAN
Route::get('/jabatan', 'JabatanController@index');
Route::post('/jabatan/store', 'JabatanController@store');
Route::get('/jabatan/{id}', 'JabatanController@getJabatan');
Route::put('/jabatan/update/{id}', 'JabatanController@update');
Route::delete('/jabatan/delete/{id}', 'JabatanController@delete'); 

// CRUD Jurusan
Route::get('/jurusan', 'JurusanController@index');
Route::post('/jurusan/store', 'JurusanController@store');
Route::get('/jurusan/{id}', 'JurusanController@getJurusan');
Route::put('/jurusan/update/{id}', 'JurusanController@update');
Route::delete('/jurusan/delete/{id}', 'JurusanController@delete'); 


// CRUD Matpel
Route::get('/matpel', 'MatpelController@index');
Route::get('/matpelproduktif/{id}', 'MatpelController@getMatpelProduktif');
Route::get('/matpelnormatif', 'MatpelController@getMatpelNormatif');
Route::post('/matpel/store', 'MatpelController@store');
Route::get('/matpel/{id}', 'MatpelController@getMatpel');
Route::put('/matpel/update/{id}', 'MatpelController@update');
Route::delete('/matpel/delete/{id}', 'MatpelController@delete'); 

//KELUARGA
Route::put('/keluarga/update/{id}', 'KeluargaController@update');
Route::get('/keluarga/{id}', 'KeluargaController@getKeluarga');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/athenticated', function () {
    return true;
});