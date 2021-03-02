<?php

namespace App\Exports;

use App\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;


class UsersExport implements WithColumnFormatting,FromCollection, WithMapping, WithHeadings, ShouldAutoSize, WithStyles
{
    /**
    * @return \Illuminate\Support\Collection
    */

    public function styles(Worksheet $sheet)
    {
        return [
            // Style the first row as bold text.
            1    => ['font' => ['bold' => true]],


        ];
    }

    public function collection()
    {
        return User::with('detail')->get();
    }
    public function columnFormats(): array
    {
        return [
            'B' => NumberFormat::FORMAT_NUMBER,
        ];
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
           'id akun',
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
