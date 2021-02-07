<template>
    <div >
        <form method="POST" enctype="multipart/form-data" @submit.prevent="update">
            <div ref="content" id="konten" class="p-5">
                <!-- <img :src="'/storage/images/'+user.name+'/'+user.file_name" class="w-25 ml-auto mr-auto d-block" alt=""> -->
                <div class="form-group" v-if="usersession.id_akun == user.id_akun">
                     <label for="role">Hak Akses</label>
                        <select id="role" disabled class="form-control" v-model="user.role">
                            <option selected>admin</option>
                            <option>user</option>
                        </select>
                </div>
                <div class="form-group" v-else>
                     <label for="role">Jenis Kelamin</label>
                        <select id="role"  class="form-control" v-model="user.role">
                            <option selected>admin</option>
                            <option>user</option>
                        </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">NPWP</label>
                    <input type="number" class="form-control rounded-pill" placeholder="Masukkan NPWP Anda disini"
                        id="NPWP" aria-describedby="emailHelp" v-model="user.npwp">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail2">Email</label>
                    <input type="email" class="form-control rounded-pill" v-model="user.email"
                        placeholder="Masukkan Email Anda disini" id="Email" aria-describedby="emailHelp">
                    <label for="exampleInputEmail2">Nama</label>
                    <input type="text" class="form-control rounded-pill" v-model="user.name"
                        placeholder="Masukkan Nama Anda disini" id="Name" aria-describedby="emailHelp">
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputEmail2">Tanggal Lahir</label>
                            <input type="date" class="form-control rounded-pill" v-model="user.tgl_lahir"
                                placeholder="Masukkan Tanggal Lahir Anda disini" id="date" aria-describedby="dateHelp">
                            <label for="exampleInputEmail2">Alamat</label>
                            <textarea class="form-control border-rounded" v-model="user.alamat" rows=" 4"
                                placeholder="Masukkan Alamat Anda disini" id="Adress"
                                aria-describedby="emailHelp"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="inputState">Jenis Kelamin</label>
                        <select id="inputState" class="form-control" v-model="user.jen_kel">
                            <option selected>Laki - laki</option>
                            <option>Perempuan</option>
                        </select>
                        <label for="exampleInputEmail2" class="mt-2">No Telepon</label>
                        <input type="tel" class="form-control rounded-pill" v-model="user.no_telp"
                            placeholder="Masukkan Nomor Telepon Anda disini" id="tel" aria-describedby="dateHelp">
                    </div>
                </div>
            </div>
            <button class="btn btn-primary rounded-pill ml-auto mr-auto d-block mb-3" type="submit">Simpan Data</button>
              <router-link :to="{name: 'admineditcloud', params: { id: user.id_akun }}">
             <button class="btn btn-info rounded-pill ml-auto mr-auto d-block mb-3 text-white"
                type="button">Lihat Penyimpanan</button>
              </router-link>
            <button class="btn btn-success rounded-pill ml-auto mr-auto d-block mb-3" @click="exportToPDF()"
                type="button">Export PDF</button>
        </form>
    </div>
</template>
<script>
    export default {
        props: ['session'],
        data(){
        return {
            user:[],
            usersession: this.$props.session,
            errors: [],
            title: null,
            content: null,
        }
    },
    created() {
   
      axios.get('/api/userall',{params:{iduser: this.$route.params.id}}).then((response) => {
            this.user = response.data[0];
               console.log(this.usersession.id_akun, this.user.id_akun)
        });
        axios.get('/api/document',{params:{iduser: this.$route.params.id}}).then((response) => {
        
               console.log(response.data)
        });
    },
    methods: {
        updateArticle(e){
             
            if (this.$data.account.name != null && this.$data.account.email != null) {
                 
                this.$swal.fire({
                    title: 'Success',
                    text: "Article created successfully",
                    icon: 'success',
                    timer: 1000
                });
                let uri = `/api/account/update/${this.$route.params.id}`;
                this.axios.put(uri, this.account).then((response) => {
                    this.$router.push({name: 'employeelist'});
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
        },
        update(){
            this.axios.put('/api/account/updateall', this.user).then(
                 this.$swal.fire({
                    title: 'Success',
                    text: "Account Berhasil diperbaharui",
                    icon: 'success',
                    timer: 1000
                }));
        }
    }
  }
</script>