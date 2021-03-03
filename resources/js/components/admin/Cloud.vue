<template>
    <div>
            <a  href="javascript:history.go(-1)"  v-if="this.$route.name == 'admineditcloud'">
    <i class="fas fa-arrow-left back-icon mt-3" ></i>
    </a>
        <div class="row mt-5">
            <div class="col-md-6">
                <h4 class="text-dark ">Quick Access</h4>
            </div>
            <div class="col-md-6">
                <div class="float-right">
                    <!-- <input type="file" @change="processFile($event)" name="imgupload"> -->
                    <button data-toggle="modal" data-target="#exampleModalCenter"
                        class="btn btn-primary  rounded-pill text-white py-2"> <i class="fas fa-plus"></i> &nbsp Add
                        Files</button>

                </div>
            </div>
        </div>
        <div class="container">


            <div class="row mt-5" v-if="this.$route.name == 'admineditcloud'">
                <div v-for="(category) in category" :key="category.id_category">
                    <router-link
                        :to="{name: 'admineditcategory', params: { id: idcloud, categoryname: category.id_category}}">
                        <div class="col-md-4 mb-4">
                            <div class="ffolder big cyan">
                                <span>{{category.category_name}}</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div v-else-if="this.$route.name == 'usercloud' " class="row mt-5">
                <div v-for="(category) in category" :key="category.id_category">
                    <router-link :to="{name: 'usercategorydetail', params: { id: category.id_category}}">
                        <div class="col-md-4 mb-4">
                            <div class="ffolder big cyan">
                                <span>{{category.category_name}}</span>
                            </div>
                        </div>
                    </router-link>

                </div>
            </div>
             <div v-else-if="this.$route.name == 'admincloud' " class="row mt-5">
                <div v-for="(category) in category" :key="category.id_category">
                    <router-link :to="{name: 'admincategorydetail', params: { id: category.id_category}}">
                        <div class="col-md-4 mb-4">
                            <div class="ffolder big cyan">
                                <span>{{category.category_name}}</span>
                            </div>
                        </div>
                    </router-link>

                </div>
            </div>
            
        </div>
        <h4 class="text-dark mt-5">All Files</h4>
            <div class="table-responsive">

        <table class="table table-light mt-3">
            <thead class="bg-primary text-white">
                <tr>
                    <th scope="col">Tipe</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-if="documents.length != 0">
                
                <tr  v-for="(document) in documents" :key="document.id_document">
                    <td> {{document.category.category_name}}</td>
                    <td><img :src="'/userdata/'+document.user.id_akun+'/'+document.file_name"
                            class="avatar-profile rounded"> {{document.file_name}}</td>
                    <td>
                           <span class="fa-stack  fa-size fa-lg cursor-pointer" @click.prevent="download(document.user.id_akun,document.file_name)">
                            <i class="fa fa-square text-primary fa-stack-2x"></i>
                            <i class="fas fa-download fa-stack-1x text-white"></i>
                        </span>
        
                    <span class="fa-stack  fa-size fa-lg cursor-pointer" @click="deletefile(document.id_document)">
                        <i class="fa fa-square text-danger fa-stack-2x"></i>
                        <i class="fas fa-trash fa-stack-1x text-white"></i>
                    </span>
                    </td>
                </tr>
                 <tr>
                </tr>
            </tbody>
                <tbody v-else>
                <tr>
                    <td colspan="3" class="font-weight-bold text-center"> Anda Tidak Mempunyai Dokumen</td>   
                </tr>
                 <tr>
                </tr>
            </tbody>
        </table>
        </div>
        <!-- Modal -->
        <form method="POST" enctype="multipart/form-data" @submit.prevent="Upload">

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Tambah Gambar</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div id="preview">
                                <img class="w-75 ml-auto mr-auto d-block" v-if="url" :src="url" />
                            </div>
                            <input type="file" class="d-none" @change="processFile($event)" name="imgupload"
                                id="photoForm">
                            <label class="btn btn-primary rounded-pill ml-auto mr-auto d-block w-75"
                                for="photoForm">Input Gambar Disini</label>
                            <select class="form-control" @change="switchView($event.target.selectedIndex)">
                                <option disabled selected="selected">Pilih Kategori</option>
                                <option v-for="(category) in category" :key="category.id_category">
                                    {{category.category_name}}</option>
                            </select>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary"> <i class="fas fa-plus"></i> Add File</button>
                        </div>

                    </div>
                </div>
            </div>
        </form>

    </div>
</template>
<script>
export default {
    data: () => ({
        file: null,
        user: [],
        url: null,
        category: [],
        categoryId:null,
        documents:[],
        idcloud:null
    }),
    methods: {
         download(user,filename) {
              axios({
                    url: `https://kepegawaiansmk1cmh.herokuapp.com/userdata/${user}/${filename}`,
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');

                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', filename);
                     document.body.appendChild(fileLink);

                     fileLink.click();
                });
          },
          getdocument(){
               if(this.$route.name == 'admineditcloud'){
                axios.get('/api/document', {
                params: {
                    iduser: this.$route.params.id
                }
            }).then((res) => {
               this.documents=res.data;
            })
                }else{
               axios.get('/api/document', {
                params: {
                    iduser: this.user.id_akun
                }
            }).then((res) => {
                this.documents = res.data
               
            })
                }
          },
          deletefile(id){
                 this.$swal.fire({
                title: 'Apakah kamu yakin?',
                text: "Jika kamu hapus, maka data tidak akan kembali lagi.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Hapus',
                cancelButtonText: 'Kembali'
                }).then((result) => {
                if (result.value) {
                    this.$swal.fire({
                        title: 'Success!',
                        text: 'Gambar Berhasil Dihapus',
                        icon: 'success',
                    });
                    let uri = `/api/document/delete/${id}`;
                    this.axios.delete(uri).then(response => {
                       this.getdocument();
                    });                    
                }
            })
          },
      
       switchView: function(selectedIndex) {
      this.categoryId=selectedIndex;
    },
        processFile(event) {
            this.file = event.target.files[0]
            this.url = URL.createObjectURL(this.file);
        },
        addModal: async function (e) {
            await this.$swal.fire({
                title: 'Select image',
                html: ``,

            })
        },
        Upload: function (e) {
            if (this.$data.file != null && this.categoryId!= null) {
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                const formdata = new FormData();
                formdata.append('image', this.file);
                if(this.$route.name == 'admineditcloud'){
                formdata.append('iduser', this.$route.params.id);
                }else{
                formdata.append('iduser', this.user.id_akun);
                }
                formdata.append('idcategory', this.categoryId);
                let uri = '/api/uploadimg';
                 this.$swal.showLoading();
                this.axios.post(uri, formdata, config).then((response) => {
                    this.getdocument();
                this.$swal.close();
                this.$swal.fire({
                     icon: 'success',
                    title: 'Success',
                         text: 'Gambar Berhasil Di Tambahkan',
                })
                }).catch((error) =>{
                            this.$swal.fire({
                    icon: 'error',
                    title: 'Upload Gagal',
                    text: 'Penginputan Berkas Gagal, Pastikan Ukuran File Berada dibawah 2MB',
                    })
                                })
            }else{
                this.$swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Anda Harus memasukkan input gambar & Kategori!',
            
                confirmButtonText: `Kembali`,
            })
            }
        
            e.preventDefault();
        }
    },
    mounted() {
        this.idcloud=this.$route.params.id;
        if(this.$route.name == 'admineditcloud'){
            axios.get('/api/document', {
                params: {
                    iduser: this.$route.params.id
                }
            }).then((res) => {
               this.documents=res.data;
            })
        }else{
        axios.get('/api/user').then((res) => {
            this.user = res.data
        }).then(() => {
            axios.get('/api/document', {
                params: {
                    iduser: this.user.id_akun
                }
            }).then((res) => {
                this.documents = res.data
            })
        })
        }
      // GET All category
        axios.get('/api/category').then((res) => {
            this.category= res.data
        })
    }

}
</script>
<style scoped>
  .avatar-profile {
        width: 44px;
        height: 44px;
        object-fit: cover;
    }
    .back-icon{
        font-size: 3rem;
    color: #3490dc;
    }
</style>