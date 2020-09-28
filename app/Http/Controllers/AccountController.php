<?php

namespace App\Http\Controllers;

use App\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AccountController extends Controller
{
  public function index()
  {
      $accounts = \App\Account::all();
      return $accounts->toJson();
  }
	public function search(Request $request)
	{
		$search = $request->search;
    $posts = DB::table('accounts')->where('nama','like',"%". $search."%") -> get();

    return response()->json($posts);
 
	}
    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'nama' => 'required',
          'password' => 'required',
        ]);
 
        $project = \App\Account::create([
          'nama' => $validatedData['nama'],
          'password' => $validatedData['password'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Account created successfully!'
        ];
 
        return response()->json($msg);
    } 
}
