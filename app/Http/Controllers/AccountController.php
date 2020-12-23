<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
  public function index()
  {
      $accounts = \App\User::all();
      return $accounts->toJson();
  }
	public function search(Request $request)
	{
		$search = $request->search;
    $posts = DB::table('users')->where('name','like',"%". $request->get('keywords')."%") -> get();

    return response()->json($posts);
 
	}
    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'email' => 'required',
          'name' => 'required',
          'password' => 'required',
        ]);
 
        $project = \App\User::create([
        'email' => $validatedData['email'],
          'name' => $validatedData['name'],
          'password' => Hash::make($validatedData['password']),
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Account created successfully!'
        ];
 
        return response()->json($msg);
    } 
    public function delete($id)
    {
        $account = \App\User::find($id);
        if(!empty($account)){
            $account->delete();
            $msg = [
                'success' => true,
                'message' => 'Article deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Article deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}