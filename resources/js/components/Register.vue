<template>
    <div class="container">
        <h2 class="text-center mt-2">Daftar Kepegawaian</h2>
       
        <form class="px-5" @submit.prevent="AccountCreate">
            <!-- <div class="form-group">
                            <label for="exampleInputEmail1">NIP</label>
                        <input type="number" class="form-control rounded-pill" placeholder="Masukkan NIP Anda disini"
                            id="NIP" aria-describedby="emailHelp">
                    </div> -->
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
                        <h5 class="text-center">Masukkan Pas Foto Anda</h5>
                        <img src="./../../img/pasfoto.png" class="w-50 ml-auto mr-auto d-block" alt="">
                         <div class="form-group">
                              <img id="output"/>
                              
                              <input type="file" accept="image/*"  class=" d-none form-control-file  " id="photoForm">
                            <label class="btn btn-primary rounded-pill ml-auto mr-auto d-block w-75" for="photoForm">Example file input</label>
                          </div>
                    </div>
                    <div class="col-md-6">
                           <h5 class="text-center">Masukkan Scan KTP Anda</h5>
                          <img src="./../../img/card.png" class="w-75 mt-4 ml-auto mr-auto d-block" alt="">
                         <div class="form-group">
                              <img id="output"/>
                              
                              <input type="file" accept="image/*"  class=" d-none form-control-file  " id="idCard">
                            <label class="btn btn-primary rounded-pill ml-auto mr-auto d-block w-75" for="idCard">Example file input</label>
                          </div>
                    </div>
                </div>
                 <div class="alert alert-danger" v-if="errors.length">
            <b>Terdapat kesalahan dalam input data:</b>
            <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </div>
            <button class="btn btn-primary rounded-pill ml-auto mr-auto d-block mb-3" type="submit">Register Akun</button>
            
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
            form: {
                name: '',
                email: '',
                password: '',
                role:'admin',
                password_confirmation: ''
            },
              errors:[]
        }),
        methods: {
            AccountCreate: function (e) {
                console.log(this.$data.form);
                if (this.$data.form.name != null && this.$data.form.password != null) {
                    this.$swal.fire({
                        title: 'Success',
                        text: "Account created successfully",
                        icon: 'success',
                        timer: 1000
                    })
                    let uri = '/api/register';
                    this.axios.post(uri, this.form).then((response) => {
                        this.$router.push({
                            name: 'admin'
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
