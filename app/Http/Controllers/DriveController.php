<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;
use App\Document;
class DriveController extends Controller
{
    public function index(Request $request){
        $accounts = \App\ Document::with('category','user')
      ->where('id_akun', $request->iduser)
      ->get();
      return $accounts->toJson();
    }
    public function store(Request $request){
    
        $iduser=$request->iduser;
        $imagename = $request->file('image')->getClientOriginalName();
        $imagesize=$request->image->getSize();
        $category= $request->idcategory;
        $request->image->move(public_path('userdata/'.$iduser.'/'),$imagename);
        Document::create([
        'id_akun' => $iduser,
        'id_category' => $category,
        'file_name' => $imagename]);
    }
    public function delete($id)
    {
        $document = \App\Document::find($id);
        $user= \App\User::find($document->id_akun);
        $path ='userdata/'.$document->id_akun.'/'.$document->file_name;
        File::delete(public_path($path));
        $document->delete();
    }
}
