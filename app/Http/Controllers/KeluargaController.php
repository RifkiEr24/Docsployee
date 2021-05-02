<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class KeluargaController extends Controller
{
    public function getKeluarga($id) // for edit and show
    {
        $keluarga = \App\Keluarga::find($id);
        return $keluarga->toJson();
    }
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'is_menikah' =>'required',
        ]);
 
        $keluarga = \App\Keluarga::find($id);
        $keluarga->is_menikah = $validatedData['is_menikah'];
        $keluarga->nama_pasangan = $request->nama_pasangan;
        $keluarga->jumlah_anak =$request->jumlah_anak;
        $keluarga->save();
 
        $msg = [
            'success' => true,
            'message' => 'Data Keluarga Berhasil Diperbaharui'
        ];
 
        return response()->json($msg);
    }
}
