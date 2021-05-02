<template>
    <div>
        <form method="POST" enctype="multipart/form-data" @submit.prevent="update">
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
                     <div class="border-top border-bottom py-2">
                     <label for="mengajar">Apakah Mengajar</label>
                        <select required id="mengajar" @change="toggle_teach()" class="form-control" v-model="user.is_mengajar">
                            <option value="1" >Ya</option>
                            <option value="0" >Tidak</option>
                        </select>
                        <div class="form-group mt-2">
                            <label for="bidang" >Bidang</label>
                                <select :disabled="disabledteacher == 0" @change="toggle_jurusan()"  id="bidang" class="form-control" v-model="user.bidang_guru">
                                     <option >Normatif & Adaptif</option>
                                    <option >Produktif</option>
                                </select>
                        </div>
                         <div class="form-group mt-2">
                            <label for="bidang">Jurusan</label>
                                <select :disabled="disabledteacher == 0 || disabledjurusan==0" @change="toggle_jurusan_option()"  id="bidang" class="form-control" v-model="user.id_jurusan">
                                    <option v-for="item in jurusan" :key="item.id_jurusan" v-bind:value="item.id_jurusan">
                                        {{ item.nama_jurusan }}
                                    </option>
                                </select>
                        </div>
                         <div class="form-group mt-2">
                            <label for="bidang">Matpel</label>
                                <select :disabled="disabledteacher == 0 "  id="bidang" class="form-control" v-model="user.id_matpel">
                                     <option v-for="item in matpel" :key="item.id_matpel" v-bind:value="item.id_matpel">
                                        {{ item.nama_matpel }}
                                    </option>
                                </select>
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
             disabledteacher:null,
            disabledjurusan:0,
            disabledmatpel:0,
            matpel:{},
            jurusan:{},
            jabatan:{}
        }
    },
    created() {
        this.matpelNormatif();
    this.jurusanIndex();
    this.jabatanIndex();
        axios.get('/api/user').then((res) => {
            this.user = res.data
        }).then(() => {
            axios.get('/api/userall', {
                params: {
                    iduser: this.user.id_akun
                }
            }).then((res) => {
                this.user = res.data[0];
                if (this.user.is_mengajar == 0) {
                    this.disabledteacher=0
                }
            })
        })
    },
    methods: {
        jabatanIndex(){
              let uri = `/api/jabatan`;
            this.axios.get(uri).then((response) => {
            this.jabatan = response.data;
        });
        },
             matpelNormatif(){
              let uri = `/api/matpelnormatif`;
            this.axios.get(uri).then((response) => {
            this.matpel = response.data;
        });
        },
            matpelProduktif(){
                console.log(this.user.id_jurusan)
              let uri = `/api/matpelproduktif/${this.user.id_jurusan}`;
            this.axios.get(uri).then((response) => {
                console.log(response.data);
            this.matpel = response.data;
        });
        },
        jurusanIndex(){
              let uri = `/api/jurusan`;
            this.axios.get(uri).then((response) => {
            this.jurusan = response.data;
        });
        },
        toggle_teach(){
                if(this.user.is_mengajar == "1"){
                    this.disabledteacher=1;
                    this.user.bidang_guru==0;
                }else{
                    this.disabledteacher=0;
                }
        },  
        toggle_jurusan(){
                this.disabledmatpel=1;
                if(this.user.bidang_guru == "Produktif"){
                    this.disabledjurusan=1;
                    this.matpelProduktif();
                }else{
                    this.disabledjurusan=0;
                    this.matpelNormatif();
                }
        },  
        toggle_jurusan_option(){
                    this.matpelProduktif();

        },
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