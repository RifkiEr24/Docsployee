<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JabatanController extends Controller
{
    public function index()
    {
        $jabatan = \App\Jabatan::with('golongan')->get();
 
        return $jabatan->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nama_jabatan' =>'required',
            'ruang'=>'required',
            'id_golongan' => 'required',
            'gaji' => 'required',
        ]);
 
        $project = \App\Jabatan::create([
          'nama_jabatan' => $validatedData['nama_jabatan'],
          'ruang' => $validatedData['ruang'],
          'id_golongan' => $validatedData['id_golongan'],
          'gaji' => $validatedData['gaji'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Jabatan Berhasil Dibuat'
        ];
 
        return response()->json($msg);
    }
 
    public function getJabatan($id) // for edit and show
    {
        $golongan = \App\Jabatan::with('golongan')->where('id_jabatan',$id)->first();
 
        return $golongan->toJson();
    }
 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nama_jabatan' =>'required',
            'ruang'=>'required',
            'id_golongan' => 'required',
            'gaji' => 'required',
        ]);
 
        $jabatan = \App\Jabatan::find($id);
        $jabatan->nama_jabatan = $validatedData['nama_jabatan'];
        $jabatan->ruang = $validatedData['ruang'];
        $jabatan->id_golongan = $validatedData['id_golongan'];
        $jabatan->gaji = $validatedData['gaji'];
        $jabatan->save();
 
        $msg = [
            'success' => true,
            'message' => 'Jabatan Berhasil Diperbaharui'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $jabatan = \App\Jabatan::find($id);
        if($jabatan){
            $jabatan->delete();
            $msg = [
                'success' => true,
                'message' => 'Jabatan Berhasil Dihapus!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Jabatan Gagal Dihapus'
            ];
            return response()->json($msg);
        }
    }
}
