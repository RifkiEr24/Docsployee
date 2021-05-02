<template>
    <div class="container">
        <h2 class="text-center mt-4">Daftar Kepegawaian</h2>

        <form  method="POST" enctype="multipart/form-data" class="px-md-5 px-2" @submit.prevent="AccountCreate">
            <div class="form-group">
         <ValidationObserver>
                <ValidationProvider name="NPWP" rules="length:15" v-slot="{ errors }">
                <label for="exampleInputEmail1" >NPWP</label>
                <input   type="number"  class="form-control rounded-pill" required placeholder="Masukkan NPWP Anda disini" id="NPWP"
                    aria-describedby="emailHelp" v-model="form.npwp">
                    
                <span v-if="errors[0]" class="ml-2  text-danger font-weight-bold">{{ errors[0] }}</span>

             </ValidationProvider>
         </ValidationObserver>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail2">Email</label>
                <input type="email" class="form-control rounded-pill" required v-model="form.email"
                    placeholder="Masukkan Email Anda disini" id="Email" aria-describedby="emailHelp">
                <label for="exampleInputEmail2">Nama</label>
                <input type="text" class="form-control rounded-pill" required v-model="form.name"
                    placeholder="Masukkan Nama Anda disini" id="Name" aria-describedby="emailHelp">
            </div>
            <ValidationObserver>
                <div class="form-group">
                    <label for="exampleInputEmail3">Password</label>
                    <ValidationProvider rules="required|password:@confirm" v-slot="{ errors }">
                        <input type="password" class="form-control rounded-pill" required
                            placeholder="Masukkan Password anda Disini" v-model="form.password">
                        <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Re-Password</label>
                    <ValidationProvider name="confirm" rules="required" v-slot="{ errors }">
                        <input type="password" class="form-control rounded-pill" 
                            placeholder="Masukkan Ulang Password anda Disini" required v-model="form.password_confirmation">
                        <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
            </ValidationObserver>
            <div class="row">
                <div class="col-md-6">
                     <div class="form-group">
                <label for="exampleInputEmail2">Tanggal Lahir</label>
                <input type="date" class="form-control rounded-pill" required v-model="form.date"
                    placeholder="Masukkan Tanggal Lahir Anda disini" id="date" aria-describedby="dateHelp">
                <label for="exampleInputEmail2">Alamat</label>
                <textarea class="form-control border-rounded" required v-model="form.address"
                    rows=" 4" placeholder="Masukkan Alamat Anda disini" id="Adress" aria-describedby="emailHelp"></textarea>
            </div>
                </div>
                <div class="col-md-6">
            <label for="inputState">Jenis Kelamin</label>
                <select id="inputState" class="form-control" required v-model="form.gender">
                    <option selected>Laki - laki</option>
                    <option>Perempuan</option>
                </select>
                   <label for="exampleInputEmail2" class="mt-2">No Telepon</label>
                <input type="tel" class="form-control rounded-pill" required v-model="form.tel"
                    placeholder="Masukkan Nomor Telepon Anda disini" id="tel" aria-describedby="dateHelp">
                </div>
                <div class="col-md-6 mt-2 mt-md-0">
                    <h5 class="text-center">Masukkan Pas Foto Anda</h5>
                    <img class="w-50 ml-auto mr-auto d-block border-rounded shadow-sm"   :src="urlpas" alt="">
                    <div class="form-group">
                        <img id="output" />

                        <input @change="processFilePasFoto($event)"  type="file" accept="image/*" class=" d-none form-control-file  " id="photoForm">
                        <label class="btn btn-primary rounded-pill ml-auto mr-auto d-block w-75" for="photoForm">Input PAS Foto</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <h5 class="text-center">Masukkan Scan KTP Anda</h5>
                    <img  :src="urlktp" class="w-75 mt-4 ml-auto mr-auto d-block  border-rounded shadow-sm" alt="">
                    <div class="form-group">
                        <img id="output" />

                        <input  @change="processFileKTP($event)"  type="file" accept="image/*" class=" d-none form-control-file  " id="idCard">
                        <label class="btn btn-primary rounded-pill ml-auto mr-auto d-block w-75" for="idCard">Input KTP</label>
                    </div>
                </div>
            </div>
            <div class="alert alert-danger" v-if="errors.length">
                <b>Terdapat kesalahan dalam input data:</b>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </div>
            <button class="btn btn-primary rounded-pill ml-auto mt-2 mr-auto d-block mb-3" type="submit">Register
                Akun</button>

        </form>
    </div>
</template>
<script>
    import {
        length,
        required,
        email,
        integer,
        between
    } from 'vee-validate/dist/rules';
extend('required',value =>{
     if (value.length !== 0) {
    return true;
  }
  return '{_field_} Harus diisi!';
});
extend('email', email);
extend('integer', integer);
extend('between', between);
extend('length', value => {
  if (value.length == 15) {
    return true;
  }
  return '{_field_} Harus Berisi 15 Angka!';
});
import {
    ValidationProvider
} from 'vee-validate';
import {
    ValidationObserver
} from 'vee-validate';
import {
    extend
} from 'vee-validate';
extend('password', {  params: ['target'], validate(value, { target }) {
        return value === target;
    },
    message: 'Password confirmation does not match'
}); 
export default {
    data: () => ({
        filePas: '',
        fileKtp: '',
        form: {
            npwp: '',
            name: '',
            email: '',
            password: '',
            role: '',
            password_confirmation: '',
            date: '',
            gender: '',
            address: '',
            tel: ''
        },
        errors: [],
        urlpas: '/images/pasfoto.png',
        urlktp: '/images/card.png'
    }),
    methods: {
        processFilePasFoto(event) {
            this.filePas = event.target.files[0]
            this.urlpas = URL.createObjectURL(this.filePas);
        },
        processFileKTP(event) {
            this.fileKtp = event.target.files[0]
            this.urlktp = URL.createObjectURL(this.fileKtp);
        },
        AccountCreate: function (e) {
            this.$swal.showLoading();
             if(this.form.npwp.length !=15){
                  this.$swal.fire({
                        title: 'Registrasi Gagal',
                        text: "NPWP Harus berisi 15 angka !",
                        icon: 'error',
                    })
            } else if (this.filePas == '' && this.fileKtp == '') {
                  this.$swal.fire({
                        title: 'Registrasi Gagal',
                        text: "Anda belum memasukan File Pas Foto dan KTP Anda",
                        icon: 'error',
                  })
            }else if(this.form.password !== this.form.password_confirmation){
                 this.$swal.fire({
                        title: 'Registrasi Gagal',
                        text: "Password dengan Konfirmasi Password Anda Tidak Sama",
                        icon: 'error',
                  })
            }
            else{
                  const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                const formdata = new FormData();
                Object.entries(this.form).forEach(([key, value]) => {
                    formdata.append(key, value);
                });
                formdata.append('pasfoto', this.filePas);
                formdata.append('pasktp', this.fileKtp);
                let uri = '/api/register';
                this.axios.post(uri, formdata, config).then((response) => {
                    this.$swal.close();
                    this.$swal.fire({
                        title: 'Sukses',
                        text: "Akun Berhasil dibuat",
                        icon: 'success',
                    }).then(() => {
                        if(this.$route.name == 'createaccount'){
                         this.$router.push({
                            name: 'employeelist'
                        });
                        }else{
                             this.$router.push({
                            name: 'login'
                        });
                        }
                       
                    })
                }).catch((error) => {
                        this.errors = error.response.data.errors
                        if(error.response.data.errors.email){
                    this.$swal.fire({
                        title: 'Registrasi gagal',
                        text: "Email yang anda gunakan sudah terdaftar pada Sistem Aplikasi Kepegawaian",
                        icon: 'error',
                    })
                        }else if(error.response.data.errors.npwp){
                 this.$swal.fire({
                        title: 'Registrasi gagal',
                        text: "NPWP yang anda gunakan sudah terdaftar pada Sistem Aplikasi Kepegawaian",
                        icon: 'error',
                    })
                        }else{
                              this.$swal.fire({
                        title: 'Registrasi gagal',
                        text: "Registrasi gagal, Pastikan Ukuran Gambar Kurang dari 2MB",
                        icon: 'error',
                    })
                        }
                    });
                return true;
            }
           

            this.errors = [];

            if (this.filePas='') {
                this.errors.push('Input File PAS Foto Wajib Diisi');
            }
            if (this.fileKtp ='') {
                this.errors.push('Input File KTP Wajib Diisi!');
            }

            e.preventDefault();
        }
    },
    mounted(){
    },
    components: {
        ValidationProvider,
        ValidationObserver
    },

}

</script>
