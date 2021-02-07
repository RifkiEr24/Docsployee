<template>
<div ref="content">
    <div class="container">
    <div class="row">
        <div class="col-6 col-md-3">
            <a href="/api/account/exportexcel/" type="button">
            <button class="btn btn-success mt-3" @click="exportToPDF()">Export Excel</button>
            </a>
        </div>
        <div class=" col-6 col-md-3">
            <router-link :to="{ name: 'createaccount' }">
                <button class="btn btn-primary mt-3 float-right">Add Account</button>
            </router-link>
        </div>
        <div class="col-12 col-md-6">
            <div class="input-group search ml-auto mt-3">
                <input type="text" v-model.lazy="keywords" class=" rounded-pill form-control"
                    placeholder="Employee Name" aria-label="Recipient's username" aria-describedby="button-addon2">
                <div class="input-group-append ml-2">
                    <button class="btn btn-primary rounded-circle" type="submit" id="button-addon2"><i
                            class="fas fa-search"></i></button>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="table-responsive">

    <table class="table table-light table-hover mt-4 border-rounded">
        <thead class="bg-primary border-rounded">
            <tr class="text-white">
                <th scope="col">NPWP</th>
                <th scope="col">Name</th>
                <th scope="col">Last Login</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody> 
            <tr v-for="(user) in accounts" :key="user.id_akun">
                <th scope="row"> {{user.npwp}}</th>
    
                <td> {{user.name}}</td>
                <td> <span class="badge badge-primary">{{user.last_login}}</span></td>
                <td>
                    <router-link :to="{name: 'edit', params: { id: user.id_akun }}">
                        <span class="fa-stack  fa-size fa-lg">
                            <i class="fa fa-square text-primary fa-stack-2x"></i>
                            <i class="fas fa-user-edit fa-stack-1x text-white"></i>
                        </span>
                    </router-link>
                    <span class="fa-stack  fa-size fa-lg" @click="deletePost(user.id_akun)">
                        <i class="fa fa-square text-danger fa-stack-2x"></i>
                        <i class="fas fa-user-minus fa-stack-1x text-white"></i>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>

    </div>
</div>

</template>
<style scoped>
    th:first-child { -webkit-border-radius:20px 0 0 0; border-top:none}
th:last-child{ -webkit-border-radius:0 20px 0 0;border-top:none }
th{
    border-top: none;
}
    p {
        margin: 0;
    }
    .search{
      max-width: 400px;
    }
    .list-group-item {
        margin-top: 20px;
        border-radius: 35px;
        transition: 0.5s;
    }

    .list-group-item:hover {
        background-color: #e0e0e0;
    }

    .avatar-profile {
        width: 44px;
        height: 44px;
    }

    .identity {
        display: block;
    }

    .name {
        font-size: 18px;
        font-weight: bold;
    }

    .icon {
        font-size: 17px;
    }
</style>
<script>


export default {
      props: ["accountuser","session"],
    data() {
        return {
        usersession: this.$props.session,
          accounts: this.$props.accountuser,
          results:[],
          keywords:null,
        }
      },
         created() {
             console.log(this.usersession);
        let uriaccount = '/api/account';
        this.axios.get(uriaccount).then(response => {
            this.accounts = response.data;

        });
         
    },
      watch:{
          keywords(after,before){
              this.search();
          }
      },
      methods:{
          exportToPDF () {
                         console.log('a')
			},
          search(){
              axios.get('/api/account/search', { params: { keywords: this.keywords } })
                .then(response => this.accounts = response.data)
                .catch(error => {});
                console.log(this.keywords);
          },
        deletePost(id)
        {
            if(this.usersession.id_akun === id){
                   this.$swal.fire({
                title: 'Error',
                text: "Anda tidak dapat menghapus data diri sendiri",
                icon: 'warning'
                  })
            }else{
                 this.$swal.fire({
                title: 'Apakah kamu yakin?',
                text: "Jika kamu hapus, maka data tidak akan kembali lagi.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Hapus Deh',
                cancelButtonText: 'Nggak Jadi'
                }).then((result) => {
                if (result.value) {
                    this.$swal.fire({
                        title: 'Success!',
                        text: 'Akun Berhasil Dihapus',
                        icon: 'success',
                        timer: 1000
                    });
                    let uri = `/api/account/delete/${id}`;
                    this.axios.delete(uri).then(response => {
                        console.log(response);
                        this.accounts.splice(this.accounts.indexOf(id), 1);
                    });
                    console.log("Deleted article with id ..." +id);
                    
                }
            })
            }
           
        }
      },

   
}
</script>
