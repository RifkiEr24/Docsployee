<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 d-md-block d-none">
                <img :src="'/images/Logo_SMKN_1_Cimahi-2014.png'"  class="img-fluid mt-5 p-5">
            </div>
            <div class="col-md-6 ml-auto mr-auto d-block mt-auto mb-auto bg-white changecolorcontainer border-rounded p-5">
                <h2 class=" text-center my-3">Sistem Aplikasi Kepegawaian</h2>
                <h5 class="text-center my-3">Login</h5>
                <form class="px-3 my-3" method="POST" @submit.prevent="loginUser">
                    <div class="form-group">
                        <input type="email" class="form-control rounded-pill" placeholder="Masukkan Email Anda disini"
                            id="exampleInputEmail1" aria-describedby="emailHelp" v-model="form.email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control rounded-pill"
                            placeholder="Masukkan Password anda Disini" id="exampleInputPassword1" v-model="form.password">
                    </div>
                      <button type="submit" class="btn btn-primary ml-auto mr-auto d-block px-5 rounded-pill">Login</button>
                <div class="form-check text-center my-3">
                    <input class="form-check-input" type="checkbox" value="" v-model="form.remember" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        Ingat Saya
                    </label>
                    </div>
                </form>
              
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
@media only screen and (max-width: 600px) {
  .changecolorcontainer {
    background-color:#f0f0f0 !important;
  }
}
</style>
<script>
export default {
    data(){
        return{
             form:{
                email: '',
                password: '',
                remember: false
            },
            errors: []
        }
    },
    methods:{
        loginUser(){
            axios.get('/sanctum/csrf-cookie').then(response => {
          this.$swal.showLoading();
          if(this.form.email == '' || this.form.password == ''){
               this.$swal.close();
                this.$swal.fire({
                    icon: 'error',
                    title: 'Login Gagal',
                    text: 'Isi semua input email dan password!',
                 })
          }else{
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
                    title: 'Login Gagal',
                    text: 'Pastikan input yang anda masukkan sesuai',
                    })
                                })
          }
                  
          });
    
            
         }
    }
}
</script>