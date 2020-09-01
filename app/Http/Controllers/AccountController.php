<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'nama' => 'required',
          'password' => 'required',
        ]);
 
        $project = \App\Account::create([
          'Nama' => $validatedData['nama'],
          'Password' => $validatedData['password'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Account created successfully!'
        ];
 
        return response()->json($msg);
    } 
}
