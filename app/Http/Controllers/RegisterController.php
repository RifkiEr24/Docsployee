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
            'npwp' => ['required','integer','unique:users'],
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
            'password' => Hash::make($request->password),
            'role' => 'user'
        ]);
        UserDetail::create([
            'id_akun' => $UserCreate->id_akun,
            'tgl_lahir' => $request->date,
            'jen_kel' => $request->gender,
            'alamat' => $request->address,
            'no_telp' => $request->tel,
        ]);
        $imagenamefoto = $request->file('pasfoto')->getClientOriginalName();

        if($request->pasfoto){
            $request->pasfoto->move(public_path('userdata/'.$UserCreate->id_akun.'/'),$imagenamefoto);
        }
        Document::create([
            'id_akun' => $UserCreate->id_akun,
            'id_category' => 4,
            'file_name' => $imagenamefoto]);
        
        $imagename = $request->file('pasktp')->getClientOriginalName();
        if($request->pasktp){
            $request->pasktp->move(public_path('userdata/'.$UserCreate->id_akun.'/'),$imagename);
        }
        Document::create([
        'id_akun' => $UserCreate->id_akun,
        'id_category' => 1,
        'file_name' => $imagename]);
    }

}
