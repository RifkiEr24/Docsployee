<template>
    <div class="container">
        <h2 class="text-center mt-2">Daftar Kepegawaian</h2>

        <form  method="POST" enctype="multipart/form-data" class="px-5" @submit.prevent="AccountCreate">
            <div class="form-group">
                <label for="exampleInputEmail1">NPWP</label>
                <input type="number" class="form-control rounded-pill" placeholder="Masukkan NPWP Anda disini" id="NPWP"
                    aria-describedby="emailHelp" v-model="form.npwp">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail2">Email</label>
                <input type="email" class="form-control rounded-pill" v-model="form.email"
                    placeholder="Masukkan Email Anda disini" id="Email" aria-describedby="emailHelp">
                <label for="exampleInputEmail2">Nama</label>
                <input type="text" class="form-control rounded-pill" v-model="form.name"
                    placeholder="Masukkan Nama Anda disini" id="Name" aria-describedby="emailHelp">
            </div>
            <ValidationObserver>
                <div class="form-group">
                    <label for="exampleInputEmail3">Password</label>
                    <ValidationProvider rules="required|password:@confirm" v-slot="{ errors }">
                        <input type="password" class="form-control rounded-pill"
                            placeholder="Masukkan Password anda Disini" v-model="form.password">
                        <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Re-Password</label>
                    <ValidationProvider name="confirm" rules="required" v-slot="{ errors }">
                        <input type="password" class="form-control rounded-pill"
                            placeholder="Masukkan Ulang Password anda Disini" v-model="form.password_confirmation">
                        <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
            </ValidationObserver>
            <div class="row">
                <div class="col-md-6">
                     <div class="form-group">
                <label for="exampleInputEmail2">Tanggal Lahir</label>
                <input type="date" class="form-control rounded-pill" v-model="form.date"
                    placeholder="Masukkan Tanggal Lahir Anda disini" id="date" aria-describedby="dateHelp">
                <label for="exampleInputEmail2">Alamat</label>
                <textarea class="form-control border-rounded" v-model="form.address"
                    rows=" 4" placeholder="Masukkan Alamat Anda disini" id="Adress" aria-describedby="emailHelp"></textarea>
            </div>
                </div>
                <div class="col-md-6">
            <label for="inputState">Jenis Kelamin</label>
                <select id="inputState" class="form-control" v-model="form.gender">
                    <option selected>Laki - laki</option>
                    <option>Perempuan</option>
                </select>
                   <label for="exampleInputEmail2" class="mt-2">No Telepon</label>
                <input type="tel" class="form-control rounded-pill" v-model="form.tel"
                    placeholder="Masukkan Nomor Telepon Anda disini" id="tel" aria-describedby="dateHelp">
                </div>
                <div class="col-md-6">
                    <h5 class="text-center">Masukkan Pas Foto Anda</h5>
                    <img src="./../../img/pasfoto.png" class="w-50 ml-auto mr-auto d-block" alt="">
                    <div class="form-group">
                        <img id="output" />

                        <input @change="processFilePasFoto($event)" type="file" accept="image/*" class=" d-none form-control-file  " id="photoForm">
                        <label class="btn btn-primary rounded-pill ml-auto mr-auto d-block w-75" for="photoForm">Example
                            file input</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <h5 class="text-center">Masukkan Scan KTP Anda</h5>
                    <img src="./../../img/card.png" class="w-75 mt-4 ml-auto mr-auto d-block" alt="">
                    <div class="form-group">
                        <img id="output" />

                        <input  @change="processFileKTP($event)" type="file" accept="image/*" class=" d-none form-control-file  " id="idCard">
                        <label class="btn btn-primary rounded-pill ml-auto mr-auto d-block w-75" for="idCard">Example
                            file input</label>
                    </div>
                </div>
            </div>
            <div class="alert alert-danger" v-if="errors.length">
                <b>Terdapat kesalahan dalam input data:</b>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </div>
            <button class="btn btn-primary rounded-pill ml-auto mr-auto d-block mb-3" type="submit">Register
                Akun</button>

        </form>
    </div>
</template>
<script>
    import {
        required,
        email,
        integer,
        between
    } from 'vee-validate/dist/rules';
    extend('required', required);
    extend('email', email);
    extend('integer', integer);
    extend('between', between);

    import { ValidationProvider } from 'vee-validate';
    import { ValidationObserver } from 'vee-validate';
    import { extend } from 'vee-validate';
    extend('password', { params: ['target'],
        validate(value, { target }) { return value === target;},
        message: 'Password confirmation does not match'
    });
    export default {
        data: () => ({
            filePas: '',
            fileKtp : '',
            form: {
                npwp: '',
                name: '',
                email: '',
                password: '',
                role:'',
                password_confirmation: '',
                date :'',
                gender: '',
                address: '',
                tel: ''
            },
              errors:[]
        }),
        methods: {
             processFilePasFoto(event) {
             this.filePas = event.target.files[0]
            },
             processFileKTP(event) {
             this.fileKtp = event.target.files[0]
            },
            AccountCreate: function (e) {
                if (this.$data.form.name != null && this.$data.form.password != null) {
                            const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
                  const formdata = new FormData();
                Object.entries(this.form).forEach(([key, value]) => {
                    formdata.append(key, value);
                });
                formdata.append('pasfoto', this.filePas);
                formdata.append('pasktp', this.fileKtp);
                console.log(formdata);
                    let uri = '/api/register';
                    this.axios.post(uri, formdata,config).then((response) => {
                        this.$swal.fire({
                        title: 'Success',
                        text: "Account created successfully",
                        icon: 'success',
                        timer: 1500
                    })
                        this.$router.push({
                            name: 'login'
                        }).catch((error) =>{
                            this.errors =  error.response.data.errors
                        })
                    });
                    return true;
                }

                this.errors = [];

                if (!this.title) {
                    this.errors.push('Title wajib diisi !');
                }
                if (!this.content) {
                    this.errors.push('Content wajib diisi !');
                }

                e.preventDefault();
            }
        },
        components: {
            ValidationProvider,
            ValidationObserver
        },

    }

</script>
