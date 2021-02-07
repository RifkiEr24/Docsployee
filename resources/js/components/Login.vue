<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 d-md-block d-none">
                <img src="./../../img/Logo_SMKN_1_Cimahi-2014.jpg" class="img-fluid mt-5 p-5">
            </div>
            <div class="col-md-6 ml-auto mr-auto d-block mt-auto mb-auto">
                <h2 class="p-3 text-center mt-md-5">Sistem Aplikasi Kepegawaian</h2>
                <h5 class="text-center">Login</h5>
                <form class="px-3" >
                    <div class="form-group">
                        <input type="email" class="form-control rounded-pill" placeholder="Masukkan Email Anda disini"
                            id="exampleInputEmail1" aria-describedby="emailHelp" v-model="form.email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control rounded-pill"
                            placeholder="Masukkan Password anda Disini" id="exampleInputPassword1" v-model="form.password">
                    </div>
                </form>
                <button type="button" class="btn btn-primary ml-auto mr-auto d-block px-5 rounded-pill" @click.prevent="loginUser">Login</button>
                <router-link :to="{name: 'register'}"><small id="emailHelp"
                        class="form-text text-primary text-center">Belum mempunyai akun?
                        Daftar Sekarang</small></router-link>
            </div>
        </div>
    </div>
</template>
<style>
body{
    background-color: #ffffff !important;
}
</style>
<script>
export default {
    data(){
        return{
             form:{
                email: '',
                password: ''
            },
            errors: []
        }
    },
    methods:{
        loginUser(){
            axios.get('/sanctum/csrf-cookie').then(response => {
          this.$swal.showLoading();
                    axios.post('/api/login', this.form).then((response) =>{
                        this.$swal.close();
                                  this.$swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'Login Success',
                                    }).then(()=>{
                                        this.$router.push({ name: response.data.role}); 
                                    })
                                }).catch((error) =>{
                            this.$swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error,
                    })
                                })
          });
    
            
         }
    }
}
</script>