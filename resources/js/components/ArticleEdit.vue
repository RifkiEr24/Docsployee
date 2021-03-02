<template>
    <div >
        <form method="POST" enctype="multipart/form-data" @submit.prevent="update">
            <div ref="content" id="konten" class="p-5">
                <!-- <img :src="'/storage/images/'+user.name+'/'+user.file_name" class="w-25 ml-auto mr-auto d-block" alt=""> -->
                <div class="form-group" v-if="usersession.id_akun == user.id_akun">
                     <label for="role">Hak Akses</label>
                        <select required id="role" disabled class="form-control" v-model="user.role">
                            <option selected>admin</option>
                            <option>user</option>
                        </select>
                </div>
                <div class="form-group" v-else>
                     <label for="roleb">Hak Akses</label>
                        <select required id="roleb" class="form-control" v-model="user.role">
                            <option selected>admin</option>
                            <option>user</option>
                        </select>
                </div>
             <ValidationProvider name="NPWP" rules="length:15" v-slot="{ errors }">

                <div class="form-group">

                    <label for="exampleInputEmail1">NPWP</label>
                    <input required type="number" class="form-control rounded-pill" placeholder="Masukkan NPWP Anda disini"
                        id="NPWP" aria-describedby="emailHelp"  v-model="user.npwp">
                 <span v-if="errors[0]" class="ml-2  text-danger font-weight-bold">{{ errors[0] }}</span>

            
                </div>
                  </ValidationProvider>
                <div class="form-group">
                    
                    <label for="exampleInputEmail2">Email</label>
                    <input required type="email" class="form-control rounded-pill" v-model="user.email"
                        placeholder="Masukkan Email Anda disini" id="Email" aria-describedby="emailHelp">
                    <label for="exampleInputEmail2">Nama</label>
                    <input required type="text" class="form-control rounded-pill" v-model="user.name"
                        placeholder="Masukkan Nama Anda disini" id="Name" aria-describedby="emailHelp">
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputEmail2">Tanggal Lahir</label>
                            <input required type="date" class="form-control rounded-pill" v-model="user.tgl_lahir"
                                placeholder="Masukkan Tanggal Lahir Anda disini" id="date" aria-describedby="dateHelp">
                            <label for="exampleInputEmail2">Alamat</label>
                            <textarea required class="form-control border-rounded" v-model="user.alamat" rows=" 4"
                                placeholder="Masukkan Alamat Anda disini" id="Adress"
                                aria-describedby="emailHelp"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="inputState">Jenis Kelamin</label>
                        <select required id="inputState" class="form-control" v-model="user.jen_kel">
                            <option selected>Laki - laki</option>
                            <option>Perempuan</option>
                        </select>
                        <label for="exampleInputEmail2" class="mt-2">No Telepon</label>
                        <input required type="tel" class="form-control rounded-pill" v-model="user.no_telp"
                            placeholder="Masukkan Nomor Telepon Anda disini" id="tel" aria-describedby="dateHelp">
                    </div>
                </div>
            </div>
            <button class="btn btn-primary rounded-pill ml-auto mr-auto d-block mb-3" type="submit">Simpan Data</button>
                 <a :href="'/api/account/exportpdf/'+user.id_akun">
                          <button class="btn btn-success rounded-pill ml-auto mr-auto d-block mb-3" @click="exportToPDF()"
                type="button">Export PDF</button>
                </a>
          
        </form>
    </div>
</template>
<script>
   import {
        length,
        required,
        email,
        integer,
    } from 'vee-validate/dist/rules';
import {
    ValidationProvider
} from 'vee-validate';
import {
    ValidationObserver
} from 'vee-validate';
import {
    extend
} from 'vee-validate';
extend('length', value => {
  if (value.length == 15) {
    return true;
  }
  return '{_field_} Harus Berisi 15 Angka!';
});
extend('required',value =>{
     if (value.length !== 0) {
    return true;
  }
  return '{_field_} Harus diisi!';
});
    export default {
        props: ['session'],
        data(){
        return {
            user:{ },
            usersession: this.$props.session,
            errors: [],
            title: null,
            content: null,

        }
    },
mounted() {
   
      axios.get('/api/userall',{params:{iduser: this.$route.params.id}}).then((response) => {
            this.user = response.data[0];
            this.user.npwp;
        });
    },
    methods: {
        update(){
            let npwplength=this.user.npwp.toString().length;
            if(npwplength !==15){
                  this.$swal.fire({
                        title: 'Update Gagal',
                        text: "NPWP Harus berisi 15 angka !",
                        icon: 'error',
                    })
            }else{
            this.axios.put('/api/account/updateall', this.user).then(
                 this.$swal.fire({
                    title: 'Success',
                    text: "Akun Berhasil diperbaharui",
                    icon: 'success',
                }).then(()=>{
                     this.$router.push({name: 'employeelist'});
                }));
               }
        }
    },
     components: {
        ValidationProvider,
        ValidationObserver
    },
  }
</script>