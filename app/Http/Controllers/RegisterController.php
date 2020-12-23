<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\UserDetail;
use App\Document;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' =>['required', 'confirmed'],
            'npwp' => ['required','integer'],
            'date' => ['required','date'],
            'gender' => ['required'],
            'address' => ['required'],
            'tel' => ['required'],
            'pasfoto' => ['required'],
            'pasktp' => ['required']
        ]);

        $UserCreate=User::create([
            'npwp' => $request->npwp,
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        UserDetail::create([
            'id_akun' => $UserCreate->id_akun,
            'tgl_lahir' => $request->date,
            'jen_kel' => $request->gender,
            'alamat' => $request->address,
            'no_telp' => $request->tel,
        ]);
        $imagename = $request->pasfoto->getClientOriginalName();
        $path = Storage::putFileAs('public/images/'.$request->name, $request->pasfoto,$imagename);
        Document::create([
            'id_akun' => $UserCreate->id_akun,
            'id_category' => 1,
            'file_name' => $imagename]);
        
        $imagename = $request->pasktp->getClientOriginalName();
        $path = Storage::putFileAs('public/images/'.$request->name, $request->pasktp,$imagename);
        Document::create([
        'id_akun' => $UserCreate->id_akun,
        'id_category' => 2,
        'file_name' => $imagename]);
    }

}
