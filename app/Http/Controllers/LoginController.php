<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Carbon\Carbon;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
            'remember' => ['required']
        ]);
        $ingat =$validatedData['remember'] ? true : false;
        if (Auth::attempt($request->only('email', 'password'),$ingat)){
         
            return response()->json(Auth::User(), 200);
        }
        throw ValidationException::withMessages([
            'email' =>['The provided credentials are incorect.']
        ]);
    }
    public function updatelogin(Request $request)
    {
     $account = \App\User::where('id_akun',$request->iduser)->first();
     $account->last_login = Carbon::now()->toDateTimeString();
     $account->save();
     return response()->json($account);
    }
    public function logout()
    {
        Auth::logout();
    }
}
