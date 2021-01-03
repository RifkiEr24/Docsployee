<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

use App\Exports\UsersExport;
use Maatwebsite\Excel\Facades\Excel;

class AccountController extends Controller
{
  public function index()
  {
      $accounts = \App\User::all();
      return $accounts->toJson();
  }
  public function indexall(Request $request)
  {
    $users = DB::table('users')
    ->join('user_details', 'users.id_akun', '=', 'user_details.id_akun')
    ->join('documents', 'user_details.id_akun', '=', 'documents.id_akun')
    ->select('users.*', 'user_details.*','documents.file_name')
    ->where('users.id_akun', $request->iduser)
    ->where('documents.id_category', 1)
    ->first();
    return response()->json($users);

  }
  public function update(Request $request)
  {
      $validatedData = $request->validate([
        'alamat' => 'required',
        'id_akun' => 'required',
        'jen_kel' => 'required',
        'no_telp' => 'required',
        'npwp'  => 'required',
        'tgl_lahir' => 'required',
        'email' => 'required',
        'name' => 'required',
      ]);

      $article = \App\User::find($validatedData['id_akun']);
      $article->email = $validatedData['email'];
      $article->name = $validatedData['name'];
      $article->npwp = $validatedData['npwp'];
      $article->save();
    
      $detail = \App\UserDetail::find($validatedData['id_akun']);
      $detail->tgl_lahir = $validatedData['tgl_lahir'];
      $detail->jen_kel = $validatedData['jen_kel'];
      $detail->alamat = $validatedData['alamat'];
      $detail->no_telp = $validatedData['no_telp'];
      $detail->save();
      $msg = [
          'success' => true,
          'message' => 'Article updated successfully'
      ];

      return response()->json($msg);
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
    public function export() 
    {
        return Excel::download(new UsersExport, 'users.xlsx');
    }
}