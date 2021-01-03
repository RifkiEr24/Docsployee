<template>
    <div>
         <form  method="POST" enctype="multipart/form-data" class="px-5" @submit.prevent="update">
            <div class="form-group">
                <label for="exampleInputEmail1">NPWP</label>
                <input type="number" class="form-control rounded-pill" placeholder="Masukkan NPWP Anda disini" id="NPWP"
                    aria-describedby="emailHelp" v-model="user.npwp">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail2">Email</label>
                <input type="email" class="form-control rounded-pill" v-model="user.email"
                    placeholder="Masukkan Email Anda disini" id="Email" aria-describedby="emailHelp">
                <label for="exampleInputEmail2">Nama</label>
                <input type="text" class="form-control rounded-pill" v-model="user.name"
                    placeholder="Masukkan Nama Anda disini" id="Name" aria-describedby="emailHelp">
            </div>
          
            <div class="row">
                <div class="col-md-6">
                     <div class="form-group">
                <label for="exampleInputEmail2">Tanggal Lahir</label>
                <input type="date" class="form-control rounded-pill" v-model="user.tgl_lahir"
                    placeholder="Masukkan Tanggal Lahir Anda disini" id="date" aria-describedby="dateHelp">
                <label for="exampleInputEmail2">Alamat</label>
                <textarea class="form-control border-rounded" v-model="user.alamat"
                    rows=" 4" placeholder="Masukkan Alamat Anda disini" id="Adress" aria-describedby="emailHelp"></textarea>
            </div>
                </div>
                <div class="col-md-6">
            <label for="inputState">Jenis Kelamin</label>
                <select id="inputState" class="form-control" v-model="user.jen_kel">
                    <option selected>Laki - laki</option>
                    <option>Perempuan</option>
                </select>
                   <label for="exampleInputEmail2" class="mt-2">No Telepon</label>
                <input type="tel" class="form-control rounded-pill" v-model="user.no_telp"
                    placeholder="Masukkan Nomor Telepon Anda disini" id="tel" aria-describedby="dateHelp">
                </div>
                
             
            </div>
          
            <button class="btn btn-primary rounded-pill ml-auto mr-auto d-block mb-3" type="submit">Register
                Akun</button>

        </form>
    </div>
</template>
<script>
export default {
    data () {
      return {
      user: { }
      }
    },
   created () {
       axios.get('/api/user').then((res)=>{
            this.user = res.data
        }).then(()=>{
             axios.get('/api/userall',{params:{iduser:this.user.id_akun}}).then((res)=>{
            this.user = res.data;
            console.log(this.user);
        })
        })
   },
   methods : {
       update(){
           this.axios.put('/api/account/updateall', this.user).then((response) => {
                   console.log(response);
                });
       }
   }
}
</script>