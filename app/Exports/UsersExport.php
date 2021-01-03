<?php

namespace App\Exports;

use App\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;

class UsersExport implements FromCollection, WithMapping, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return User::with('detail')->get();
    }
    public function map($user) : array {
        return [
            $user->id_akun,
            $user->npwp,
            $user->role,
            $user->name,
            $user->email,
            $user->detail->tgl_lahir,
            $user->detail->jen_kel,
            $user->detail->alamat,
            $user->detail->no_telp,

        ] ;
 
 
    }
    public function headings() : array {
        return [
           '#',
           'NPWP',
           'Role',
           'Nama',
           'Email',
           'Tanggal Lahir',
           'Jenis Kelamin',
           'Alamat',
           'No Telepon'
        ] ;
    }
}
