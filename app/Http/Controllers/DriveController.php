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
        $iduser = $request->validate([
            'iduser' => ['required', 'integer'],
        ]);
        $document = DB::table('documents')->where('id_akun', $iduser)->get();
        return $document->toJson();
    }
    public function store(Request $request){
        // $request->validate([
        //     'image' => 'required|file|image|',
        // ]);
    
        $iduser=$request->iduser;
        $imagename = $iduser.'.'.$request->image->getClientOriginalName();
        $imagesize=$request->image->getSize();
        // $contents = file_get_contents($request->photo->path());
        $defaultnum= 1;
        $path = Storage::putFileAs('public/images/'.$iduser, $request->image,$imagename);
        Document::create([
        'id_akun' => $iduser,
        'id_category' => $defaultnum,
        'file_name' => $imagename]);
    }
}
