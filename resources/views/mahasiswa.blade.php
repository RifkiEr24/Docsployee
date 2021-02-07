<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cetak Mahasiswa</title>
    <style>
        @page { margin: 0px 0px; }
        
        header { position: fixed; top: 0px; left: 0px; right: 0px; background-color: #2b1673; height: 75px; }
        footer { position: fixed; bottom: 0px; left: 0px; right: 0px; background-color: #2b1673; height: 85px; }
      </style>
</head>
<body>

@foreach ($users as $user)
<div style="text-align: center;">
    <header></header>
        <h1 style="margin-top: 100px;">Data Kepegawaian <br> SMK Negeri 1 Cimahi</h1>
        <img src="{{public_path('/images/Logo_SMKN_1_Cimahi-2014.jpg')}}" style="width: 50%; margin-top:50px">
        <h3>NPWP : {{ $user->npwp }}</h3>
        <h3>Nama : {{ $user->name }}</h3>
        <h3>Email : <span style="color: blue;"><u>{{ $user->email }}</u></span></h3>
        <h3>Tanggal Lahir : {{ $user->tgl_lahir }}</h3>
        <h3>Jenis Kelamin : {{ $user->jen_kel }}</h3>
        <h3>Alamat : {{ $user->alamat }}</h3>  
        <h3>No Telepon : {{ $user->no_telp}}</h3>
        <footer><p style="color: white; margin-bottom: 0px;"><b>SMK Negeri 1 Cimahi</b></p>
            <p style="color: white; margin-top: 0px;">Jl. Mahar Martanegara No.48, Utama, Kec. Cimahi Selatan.<br> Kota Cimahi, Jawa Barat 40521</p></footer>

    </div>
        @endforeach
</body>
</html>