<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JurusanController extends Controller
{
    public function index()
    {
        $jurusan = \App\Jurusan::all();
 
        return $jurusan->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'nama_jurusan' => 'required',
        ]);
 
        $jurusan = \App\Jurusan::create([
          'nama_jurusan' => $validatedData['nama_jurusan'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Jurusan Berhasil Dibuat'
        ];
 
        return response()->json($msg);
    }
 
    public function getJurusan($id) // for edit and show
    {
        $jurusan = \App\Jurusan::find($id);
 
        return $jurusan->toJson();
    }
 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
          'nama_jurusan' => 'required',
        ]);
 
        $jurusan = \App\Jurusan::find($id);
        $jurusan->nama_jurusan = $validatedData['nama_jurusan'];
        $jurusan->save();
 
        $msg = [
            'success' => true,
            'message' => 'Jurusan Berhasil Diperbaharui'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $jurusan = \App\Jurusan::find($id);
        if(!empty($jurusan)){
            $jurusan->delete();
            $msg = [
                'success' => true,
                'message' => 'Jurusan Berhasil Dihapus!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Jurusan Gagal Dihapus'
            ];
            return response()->json($msg);
        }
    }
}
