<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use App\Exports\UsersExport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\File; 
use PDF;
use Carbon\Carbon;

class AccountController extends Controller
{
  public function index()
  {
  
      $accounts = \App\ User::with('detail','document')
      ->get();
      return $accounts->toJson();
  }
  public function accountsearch(Request $request)
  {
      $accounts = \App\ User::with('detail','document')
      ->where('id_akun', $request->iduser)
      ->first();
      return $accounts->toJson();
  }
  public function indexall(Request $request)
  {

    $potocheck = DB::table('documents')
    ->where('id_akun',$request->iduser)
    ->where('id_category',4)
    ->get(); 

    if($potocheck -> isNotEmpty()){
      $users = DB::table('users')
      ->join('user_details', 'users.id_akun', '=', 'user_details.id_akun')
      ->join('documents', 'user_details.id_akun', '=', 'documents.id_akun')
      ->select('users.*', 'user_details.*','documents.file_name')
      ->where('users.id_akun', $request->iduser)
      ->where('documents.id_category', 4)
      ->get();
    }else{
      $users = DB::table('users')
      ->join('user_details', 'users.id_akun', '=', 'user_details.id_akun')
      ->select('users.*', 'user_details.*')
      ->where('users.id_akun', $request->iduser)
      ->get();
    }
  
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
        $documentdata= \App\Document::where('id_akun',$id);
        $accountdetail= \App\UserDetail::find($id);
        $path ='userdata/'.$account->id_akun;
        File::deleteDirectory(public_path($path));
        if($documentdata){
          $documentdata->delete();
        }
        if($accountdetail){
          $accountdetail->delete();

        }
       
        $account->delete();

    }
    public function profilepicture($id){
      $profile= \App\Document::where([
        'id_akun' => $id,
        'id_category' => 4,
      ])->get();
      
      return response()->json($profile);

    }
    public function gendercount(){
      $users = DB::table('user_details')
      ->select(DB::raw('count(jen_kel) as count'))
      ->groupBy('jen_kel')
      ->get();

      return response()->json($users);

    }
    public function logincount(){
      $users = DB::table('users')
      ->select(DB::raw('count(last_login) as count'))
      ->where('last_login', Carbon::now()->toDateString())
      ->first();

      return response()->json($users);

    }
    public function usercount(){
      $users = DB::table('users')
      ->select(DB::raw('count(id_akun) as count'))
      ->first();

      return response()->json($users);

    }
    public function exportexcel() 
    {
        return Excel::download(new UsersExport, 'users.xlsx');
    }

    public function exportpdf($id) 
    {
      $users = DB::table('users')
      ->join('user_details', 'users.id_akun', '=', 'user_details.id_akun')
      ->join('documents', 'user_details.id_akun', '=', 'documents.id_akun')
      ->select('users.*', 'user_details.*','documents.file_name')
      ->where('users.id_akun', $id)
      ->take(1)
      ->get();
      $pdf = PDF::loadView('mahasiswa', compact('users'));
        return $pdf->stream('mahasiswa.pdf');
    }
  }