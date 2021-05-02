<template>
<div>
    <button class="btn btn-primary d-block mx-auto mt-3" @click="addjurusan()">Tambah jurusan</button>
        <div class="table-responsive">
            <v-table :data="jurusan"
                class="table table-light  mt-4 border-rounded">
                <thead slot="head"  class="bg-primary border-rounded text-white">
                    <v-th sortKey="nama_jurusan">Nama jurusan</v-th>
                    <th>Action</th>
                </thead>
                <tbody slot="body" slot-scope="{displayData}" >
                    <tr v-for="row in displayData" :key="row.id_jurusan">
                    <td>{{ row.nama_jurusan }}</td>
                    <td>
                         <span class="fa-stack  fa-size fa-lg">
                            <i class="fa fa-square text-secondary fa-stack-2x"></i>
                            <i class="fas fa-eye fa-stack-1x text-white"></i>
                        </span>
                          <span class="fa-stack  fa-size fa-lg" @click="editjurusan(row.id_jurusan)">
                            <i class="fa fa-square text-primary fa-stack-2x"></i>
                            <i class="fas fa-user-edit fa-stack-1x text-white"></i>
                        </span>
                         <span class="fa-stack  fa-size fa-lg" @click="deletejurusan(row.id_jurusan)">
                        <i class="fa fa-square text-danger fa-stack-2x"></i>
                        <i class="fas fa-trash fa-stack-1x text-white"></i>
                    </span>
                    </td>
                    </tr>
                </tbody>
            </v-table>
        </div>
 </div>
</template>
<script>
export default {
    data() {
        return {
            jurusan: [],
            addjurusanData: {},
            editjurusanData: {},
            getjurusanData:[],
            deletejurusanData:null,
        }
    },
    created() {
     this.jurusanIndex();
     },
    methods: {
        jurusanIndex(){
              let uri = `/api/jurusan`;
            this.axios.get(uri).then((response) => {
            this.jurusan = response.data;
            console.log(this.jurusan);
        });
        },
        getjurusan($id){
             axios.get(`/api/jurusan/${$id}`).then((response)=>{
                this.getjurusanData=response.data;
             })
            return this.getjurusanData;
        },
        editjurusan($id){
        // GET SELECTED ID
         axios.get(`/api/jurusan/${$id}`).then((response)=>{
               const {
                value: formValues
            } = this.$swal.fire({
                title: 'Tambah jurusan',
                                confirmButtonText:'Edit',
                html: 
                    'Nama jurusan' +
                    '<input id="swal-input2" value="'+response.data.nama_jurusan+'" class="swal2-input">',
                focusConfirm: false,
                preConfirm: () => {
                    return [
                        document.getElementById('swal-input2').value
                    ]
                }
            }).then((formValues) => {
                if (formValues.isConfirmed == true) {
                    if (formValues.value[0] == "") {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Data Kurang',
                            text: 'Anda Harus Mengisi Seluruh Input',
                        })
                    } else {
                        this.editjurusanData.nama_jurusan = formValues.value[0];
                        let uri = `/api/jurusan/update/${$id}`;
                       this.axios.put(uri, this.editjurusanData).then((response) => {
                            this.jurusanIndex();
                            this.$swal.fire({
                                icon: 'success',
                                title: 'Berhasil',
                                text: response.data.message,
                            })
                        });
                    }
                }
            });
             })
        },
        addjurusan() {
            const {
                value: formValues
            } = this.$swal.fire({
                title: 'Tambah jurusan',
                                confirmButtonText:'Tambah',

                html: 
                    'Nama jurusan' +
                    '<input id="swal-input2" class="swal2-input">',
                focusConfirm: false,
                preConfirm: () => {
                    return [
                        document.getElementById('swal-input2').value
                    ]
                }
            }).then((formValues) => {
                if (formValues.isConfirmed == true) {
                    if (formValues.value[0] == "") {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Data Kurang',
                            text: 'Anda Harus Mengisi Seluruh Input',
                        })
                    } else {
                        this.addjurusanData.nama_jurusan = formValues.value[0];
                        let uri = '/api/jurusan/store';
                        this.axios.post(uri, this.addjurusanData).then((response) => {
                            this.jurusanIndex();
                            this.$swal.fire({
                                icon: 'success',
                                title: 'Berhasil',
                                text: response.data.message,
                            })
                        });
                    }
                }
            });
        },
        deletejurusan(id){
            this.deletejurusan=id;
            this.$swal.fire({
                title: 'Apakah Anda yakin?',
                text: "Jika Anda hapus, maka data tidak akan kembali lagi.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Hapus',
                cancelButtonText: 'Kembali'
                }).then((result) => {
                if (result.value) {
                    let uri = `/api/jurusan/delete/${id}`;
                    this.axios.delete(uri).then(response => {
                        this.jurusanIndex();
                       this.$swal.fire({
                        title: 'Success!',
                        text: 'jurusan Berhasil Dihapus',
                        icon: 'success',
                    });
                    });
                   
                }
            })
        }
        
    }
}
</script>