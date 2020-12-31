<template>
    <div>
        <div class="row mt-5">
            <div class="col-md-6">
                <h4 class="text-dark ">{{user.name}}</h4>
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

        <div class="row mt-5">
          <div v-for="(category) in category" :key="category.id_category">
          <router-link :to="{name: 'categorydetail', params: { id: category.id_category}}">
            <div class="col-md-4" >
                <div class="ffolder big cyan">
                    <span>{{category.category_name}}</span>
                </div>
            </div>
          </router-link>
          </div>
        </div>
        <h4 class="text-dark mt-5">All Files</h4>
        <table class="table mt-3">
            <thead class="bg-primary text-white">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Date Modified</th>
                    <th scope="col">File Size</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(document) in documents" :key="document.id_document">
                    <td> <i class="fas fa-file text-secondary"></i> &nbsp KTP</td>
                    <td><img :src="'/storage/images/'+user.name+'/'+document.file_name" class="w-25"></td>
                    <td>100MB</td>
                </tr>
            </tbody>
        </table>
        <!-- Modal -->
                                <form method="POST" enctype="multipart/form-data" @submit.prevent="Upload">

        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
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
                                for="photoForm">Example
                                file input</label>
                            <select class="form-control" @change="switchView($event.target.selectedIndex)">
                                <option disabled selected="selected"  >Pilih Kategori</option>
                                <option v-for="(category) in category" :key="category.id_category">{{category.category_name}}</option>
                            </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary" > <i
                                    class="fas fa-plus"></i> Add File</button>
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
        user: '',
        documents: [],
        url: null,
        category: [],
        categoryId:null
    }),
    methods: {
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
            if (this.$data.file != null) {
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                const formdata = new FormData();
                formdata.append('image', this.file);
                formdata.append('iduser', this.user.id_akun);
                formdata.append('name', this.user.name);
                formdata.append('idcategory', this.categoryId);
                let uri = '/api/uploadimg';
                this.axios.post(uri, formdata, config).then((response) => {
                });
                return true;
            }

            e.preventDefault();
        }
    },
    mounted() {
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
      // GET All category
        axios.get('/api/category').then((res) => {
            this.category= res.data
        })
    }

}
</script>