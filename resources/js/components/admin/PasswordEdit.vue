<template>
    <div class="p-3 p-md-0">
        <div class="row mt-4">
            <div class="col-md-4">

            </div>
             <div class="bg-white col-md-4 p-4 border-rounded">
                <h4 class="text-center font-weight-bold border-rounded">Edit Password</h4>
                <form action="POST" @submit.prevent="changePassword()">
                    <div v-if="this.$route.name !='adminpasswordedit'">
                          <label for="inputPasswordold">Masukkan Password Lama Anda</label>
                        <input type="password" v-model="passwordchange.old" id="inputPasswordold" class="form-control" aria-describedby="passwordHelpBlock">
                    </div>
                        <label for="inputPasswordnew">Masukkan Password Baru Anda</label>
                        <input type="password" v-model="passwordchange.newpassword" id="inputPasswordnew" class="form-control" aria-describedby="passwordHelpBlock">
                        <label for="inputPasswordnewconf">Ulangi Password Baru Anda</label>
                        <input type="password" v-model="passwordchange.confirmnewpassword" id="inputPasswordnewconf" class="form-control" aria-describedby="passwordHelpBlock">
                 <button type="submit" class="btn btn-primary mt-3 rounded-pill ml-auto mr-auto d-block">Ubah Password</button>
                </form>
            </div>
             <div class="col-md-4">
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            passwordchange:{}
        }
    },
    mounted(){
        if (this.$route.name =='adminpasswordedit') {
        this.passwordchange.id=this.$route.params.id;
        console.log(this.passwordchange);    
        }
    },
    methods:{
        changePassword(){
            console.log(this.passwordchange);
             this.$swal.showLoading();
               if (this.$route.name =='adminpasswordedit') {
                    axios.post('/api/account/changepasswordadmin',this.passwordchange).then(()=>{
                this.$swal.close();
                    this.$swal.fire({
                        title: 'Success',
                        text: "Password Berhasil Diubah",
                        icon: 'success',
                        timer: 1500
                    })
            }).catch((error)=>{
                if(error.response.data.errors.old){
                    this.$swal.fire({
                        title: 'Gagal',
                        text: "Password Lama Anda salah",
                        icon: 'error',
                    })
                }else{
                     this.$swal.fire({
                        title: 'Gagal',
                        text: "Pastikan kedua input password sudah sama dan terisi",
                        icon: 'error',
                    })
                }
                  
            })
               }else{
                   axios.post('/api/account/changepassword',this.passwordchange).then(()=>{
                this.$swal.close();
                    this.$swal.fire({
                        title: 'Success',
                        text: "Password Berhasil Diubah",
                        icon: 'success',
                        timer: 1500
                    })
            }).catch((error)=>{
                if(error.response.data.errors.old){
                    this.$swal.fire({
                        title: 'Gagal',
                        text: "Password Lama Anda salah",
                        icon: 'error',
                    })
                }else{
                     this.$swal.fire({
                        title: 'Gagal',
                        text: "Pastikan kedua input password sudah sama dan terisi",
                        icon: 'error',
                    })
                }
                  
            })
               }
            
        }
    }
}
</script>