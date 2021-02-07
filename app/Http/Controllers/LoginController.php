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
            'password' => ['required']
        ]);
        $account = \App\User::where('email',$validatedData['email'])->first();
        if (Auth::attempt($request->only('email', 'password'))){
            $account->last_login = Carbon::now()->toDateTimeString();
            $account->save();
            return response()->json(Auth::User(), 200);
        }
        throw ValidationException::withMessages([
            'email' =>['The provided credentials are incorect.']
        ]);
    }
    public function logout()
    {
        Auth::logout();
    }
}
