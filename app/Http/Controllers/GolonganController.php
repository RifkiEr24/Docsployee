<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GolonganController extends Controller
{
    public function index()
    {
        $golongan = \App\Golongan::all();
 
        return $golongan->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'no_golongan' => 'required',
          'nama_golongan' => 'required',
        ]);
 
        $project = \App\Golongan::create([
          'no_golongan' => $validatedData['no_golongan'],
          'nama_golongan' => $validatedData['nama_golongan'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Golongan Berhasil Dibuat'
        ];
 
        return response()->json($msg);
    }
 
    public function getGolongan($id) // for edit and show
    {
        $golongan = \App\Golongan::find($id);
 
        return $golongan->toJson();
    }
 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
          'no_golongan' => 'required',
          'nama_golongan' => 'required',
        ]);
 
        $golongan = \App\Golongan::find($id);
        $golongan->no_golongan = $validatedData['no_golongan'];
        $golongan->nama_golongan = $validatedData['nama_golongan'];
        $golongan->save();
 
        $msg = [
            'success' => true,
            'message' => 'Golongan Berhasil Diperbaharui'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $golongan = \App\Golongan::find($id);
        if(!empty($golongan)){
            $golongan->delete();
            $msg = [
                'success' => true,
                'message' => 'Golongan Berhasil Dihapus!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Golongan Gagal Dihapus'
            ];
            return response()->json($msg);
        }
    }
}
