<template>
<div>
    <div class="row">
        <div class="col-md-3">
              <button class="btn btn-success mt-3">Export PDF</button>
        </div>
        <div class="col-md-3">
             <router-link :to="{ name: 'create' }">
             <button class="btn btn-primary mt-3 float-right">Add Account</button>
             </router-link>
        </div>
        <div class="col-md-6">
            <div class="input-group search ml-auto mt-3">
            <input type="text" v-model.lazy="keywords"  class=" rounded-pill form-control" placeholder="Employee Name" aria-label="Recipient's username"
                aria-describedby="button-addon2">
            <div class="input-group-append ml-2">
                <button class="btn btn-primary rounded-circle" type="submit" id="button-addon2"><i class="fas fa-search"></i></button>
            </div>
        </div>
        </div>        
    </div>
        <table class="table table-light mt-4 border-rounded" >
    <thead class="bg-primary border-rounded">
    <tr class="text-white">
      <th scope="col">NIP</th>
      <th scope="col">Name</th>
      <th scope="col">Role</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user) in accounts" :key="user.id" >
      <th scope="row">{{user.id}}</th>
      <td><img src="https://thispersondoesnotexist.com/image" class="avatar-profile rounded-circle mt-1 mr-3"
                        alt="">  {{user.name}}</td>
      <td> <span class="badge badge-primary">{{user.email}}</span></td>
      <td>
               <router-link :to="{name: 'edit', params: { id: user.id }}">
          <span class="fa-stack  fa-size fa-lg">
                <i class="fa fa-square text-primary fa-stack-2x"></i>
                <i class="fas fa-user-edit fa-stack-1x text-white"></i>
                </span>
               </router-link>
                 <span class="fa-stack  fa-size fa-lg" @click = "deletePost(user.id)">
                <i class="fa fa-square text-danger fa-stack-2x"></i>
                <i class="fas fa-user-minus fa-stack-1x text-white"></i>
                </span>
      </td>
    </tr>
  </tbody>
</table>

        <!-- <ul class="list-group">
            <li v-for="(account) in accounts" :key="account.id" class="list-group-item d-flex justify-content-between align-items-center shadow-sm">
                <div class="d-flex">
                    <img src="https://thispersondoesnotexist.com/image" class="avatar-profile rounded-circle mt-1"
                        alt="">
                    <div class="identity ml-2">
                        <p class="name">{{account.nama}}</p>
                        <p class="otority">Admin</p>
                    </div>
                </div>
                <div class="d-flex">
                    <span class="badge badge-primary badge-pill icon"><i class=" fas fa-user-edit"></i></span>
                    <span class="badge badge-danger badge-pill icon ml-2"><i class="fas fa-user-times"></i></span>
                </div>
            </li>
        </ul> -->
        
    </div>

</template>
<style scoped>
    th:first-child { -webkit-border-radius:35px 0 0 0; border-top:none}
th:last-child{ -webkit-border-radius:0 35px 0 0;border-top:none }
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
    data() {
        return {
          accounts: [],
          results:[],
          keywords:null,
        }
      },
         created() {
        let uri = '/api/account';
        this.axios.get(uri).then(response => {
            console.log(response);
            this.accounts = response.data;

        });
    },
      watch:{
          keywords(after,before){
              this.search();
          }
      },
      methods:{
          search(){
              axios.get('/api/account/search', { params: { keywords: this.keywords } })
                .then(response => this.accounts = response.data)
                .catch(error => {});
                console.log(this.keywords);
          },
        deletePost(id)
        {
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
                        text: 'Article deleted successfully',
                        icon: 'success',
                        timer: 1000
                    });
                    let uri = `api/account/delete/${id}`;
                    this.axios.delete(uri).then(response => {
                        console.log(response);
                        this.accounts.splice(this.accounts.indexOf(id), 1);
                    });
                    console.log("Deleted article with id ..." +id);
                    
                }
            })
        }
      }
   
}
</script>
