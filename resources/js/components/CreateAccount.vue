<template>
    <div class="container">
        <h2 class="text-center">Daftar Kepegawaian</h2>
        <div class="alert alert-danger" v-if="errors.length">
            <b>Terdapat kesalahan dalam input data:</b>
            <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </div>
        <form class="px-5" @submit.prevent="AccountCreate">
            <!-- <div class="form-group">
                            <label for="exampleInputEmail1">NIP</label>
                        <input type="number" class="form-control rounded-pill" placeholder="Masukkan NIP Anda disini"
                            id="NIP" aria-describedby="emailHelp">
                    </div> -->
            <div class="form-group">
                <label for="exampleInputEmail2">Nama</label>
                <input type="text" class="form-control rounded-pill" v-model="account.nama"
                    placeholder="Masukkan NPWP Anda disini" id="Email" aria-describedby="emailHelp">
            </div>
            <ValidationObserver>
                <div class="form-group">
                    <label for="exampleInputEmail3">Password</label>
                    <ValidationProvider rules="required|password:@confirm" v-slot="{ errors }">
                        <input type="password" class="form-control rounded-pill"
                            placeholder="Masukkan Password anda Disini" v-model="account.password">
                        <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="form-group">
                         <label for="exampleInputEmail1">Re-Password</label>
                             <ValidationProvider name="confirm" rules="required" v-slot="{ errors }">
                        <input type="password" class="form-control rounded-pill"
                            placeholder="Masukkan Ulang Password anda Disini" v-model="account.confirmation">
                             <span>{{ errors[0] }}</span>
                             </ValidationProvider>
                    </div>
            </ValidationObserver>
                <div class="row">
                    <div class="col-md-6">
                        <img src="./../../img/pasfoto.png" class="w-50 ml-auto mr-auto d-block" alt="">
                    </div>
                    <div class="col-md-6">
                          <div class="form-group">
                              <img id="output"/>
                              <label for="exampleFormControlFile1">Example file input</label>
                              <input type="file" accept="image/*"  class="form-control-file" id="exampleFormControlFile1">
                          </div>
                    </div>
                </div>
            <button class="btn btn-primary rounded-pill ml-auto mr-auto d-block" type="submit">Register Akun</button>
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

    import {
        ValidationProvider
    } from 'vee-validate';
    import {
        ValidationObserver
    } from 'vee-validate';
    import {
        extend
    } from 'vee-validate';
    extend('password', {
        params: ['target'],
        validate(value, {
            target
        }) {
            return value === target;
        },
        message: 'Password confirmation does not match'
    });
    export default {
        data: () => ({
            account: {},
            errors: [],
            password: '',
            confirmation: ''
        }),
        methods: {
            AccountCreate: function (e) {
                console.log(this.$data.account);
                if (this.$data.account.nama != null && this.$data.account.password != null) {
                    this.$swal.fire({
                        title: 'Success',
                        text: "Account created successfully",
                        icon: 'success',
                        timer: 1000
                    })
                    let uri = '/api/account/store';
                    this.axios.post(uri, this.account).then((response) => {
                        this.$router.push({
                            name: 'admin'
                        });
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
