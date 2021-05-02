<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MatpelController extends Controller
{
    public function index()
    {
        $matpel = \App\Matpel::with('jurusan')->get();
 
        return $matpel->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nama_matpel' =>'required',
            'is_jurusan'=>'required',
        ]);
 
        $project = \App\Matpel::create([
          'nama_matpel' => $validatedData['nama_matpel'],
          'is_jurusan' => $validatedData['is_jurusan'],
          'id_jurusan' => $request->id_jurusan,
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Mata Pelajaran Berhasil Dibuat'
        ];
 
        return response()->json($msg);
    }
 
    public function getMatpel($id) // for edit and show
    {
        $golongan = \App\Matpel::with('jurusan')->where('id_matpel',$id)->first();
 
        return $golongan->toJson();
    }
    public function getMatpelNormatif() // for edit and show
    {
        $golongan = \App\Matpel::with('jurusan')->where('id_jurusan',null)->get();
 
        return $golongan->toJson();
    }
    public function getMatpelProduktif($id) // for edit and show
    {
        $golongan = \App\Matpel::with('jurusan')->where('id_jurusan',$id)->get();
 
        return $golongan->toJson();
    }
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nama_matpel' =>'required',
            'is_jurusan'=>'required',
        ]);
 
        $matpel = \App\Matpel::find($id);
        $matpel->nama_matpel = $validatedData['nama_matpel'];
        $matpel->is_jurusan = $validatedData['is_jurusan'];
        $matpel->id_jurusan = $request->id_jurusan;
        $matpel->save();
 
        $msg = [
            'success' => true,
            'message' => 'matpel Berhasil Diperbaharui'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $matpel = \App\Matpel::find($id);
        if($matpel){
            $matpel->delete();
            $msg = [
                'success' => true,
                'message' => 'matpel Berhasil Dihapus!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'matpel Gagal Dihapus'
            ];
            return response()->json($msg);
        }
    }
}
