<template>
    <div>
        <form  method="POST" enctype="multipart/form-data" @submit.prevent="update">
            <div>
                
                <div class="form-group">
                                 <ValidationProvider name="NPWP" rules="length:15" v-slot="{ errors }">

                    <label for="npwp">NPWP</label>
                    <input type="number" class="form-control rounded-pill" placeholder="Masukkan NPWP Anda disini"
                        id="NPWP" aria-describedby="npwp" v-model="user.npwp">
                    <span v-if="errors[0]" class="ml-2  text-danger font-weight-bold">{{ errors[0] }}</span>

                                 </ValidationProvider>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control rounded-pill" v-model="user.email"
                        placeholder="Masukkan Email Anda disini" id="Email" aria-describedby="emailHelp">
                    <label for="name">Nama</label>
                    <input type="text" class="form-control rounded-pill" v-model="user.name"
                        placeholder="Masukkan Nama Anda disini" id="Name" aria-describedby="emailHelp">
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="date">Tanggal Lahir</label>
                            <input type="date" class="form-control rounded-pill" v-model="user.tgl_lahir"
                                placeholder="Masukkan Tanggal Lahir Anda disini" id="date" aria-describedby="dateHelp">
                            <label for="address">Alamat</label>
                            <textarea class="form-control border-rounded" v-model="user.alamat" rows=" 4"
                                placeholder="Masukkan Alamat Anda disini" id="Adress"
                                aria-describedby="adressHelp"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="inputState">Jenis Kelamin</label>
                        <select id="inputState" class="form-control" v-model="user.jen_kel">
                            <option selected>Laki - laki</option>
                            <option>Perempuan</option>
                        </select>
                        <label for="tel" class="mt-2">No Telepon</label>
                        <input type="tel" class="form-control rounded-pill" v-model="user.no_telp"
                            placeholder="Masukkan Nomor Telepon Anda disini" id="tel" aria-describedby="dateHelp">
                    </div>
                </div>
            </div>
            <button class="btn btn-primary rounded-pill ml-auto mr-auto d-block mb-3" type="submit">Simpan Data</button>
            <a :href="'/api/account/exportpdf/'+user.id_akun">
            <button class="btn btn-success rounded-pill ml-auto mr-auto d-block mb-3" @click="a()"
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
    data() {
        return {
            user: [],
        }
    },
    created() {
        axios.get('/api/user').then((res) => {
            this.user = res.data
        }).then(() => {
            axios.get('/api/userall', {
                params: {
                    iduser: this.user.id_akun
                }
            }).then((res) => {
                this.user = res.data[0];
            })
        })
    },
    methods: {
        update() {
            this.$swal.showLoading();
            let npwplength=this.user.npwp.toString().length;
            if(npwplength !==15){
                                this.$swal.close();

                  this.$swal.fire({
                        title: 'Update Gagal',
                        text: "NPWP Harus berisi 15 angka !",
                        icon: 'error',
                    })
            }else{
                 this.axios.put('/api/account/updateall', this.user).then(() => {
                this.$swal.close();
                this.$swal.fire({
                    icon: 'success',
                    title: 'Sukses',
                    text: 'Akun Berhasil di perbaharui',
                })
            });
            }
           
        },
        a() {
        }
    },
     components: {
        ValidationProvider,
        ValidationObserver
    },
}
</script>