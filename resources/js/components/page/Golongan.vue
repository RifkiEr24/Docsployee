<template>
<div>
    <button class="btn btn-primary d-block mx-auto mt-3" @click="addGolongan()">Tambah Golongan</button>
        <div class="table-responsive">
            <v-table :data="golongan"
                class="table table-light  mt-4 border-rounded">
                <thead slot="head"  class="bg-primary border-rounded text-white">
                    <v-th sortKey="no_golongan">No Golongan</v-th>
                    <v-th sortKey="nama_golongan">Nama Golongan</v-th>
                    <th>Action</th>
                </thead>
                <tbody slot="body" slot-scope="{displayData}" >
                    <tr v-for="row in displayData" :key="row.id_golongan">
                    <td>{{ row.no_golongan }}</td>
                    <td>{{ row.nama_golongan }}</td>
                    <td>
                         <span class="fa-stack  fa-size fa-lg">
                            <i class="fa fa-square text-secondary fa-stack-2x"></i>
                            <i class="fas fa-eye fa-stack-1x text-white"></i>
                        </span>
                          <span class="fa-stack  fa-size fa-lg" @click="editGolongan(row.id_golongan)">
                            <i class="fa fa-square text-primary fa-stack-2x"></i>
                            <i class="fas fa-user-edit fa-stack-1x text-white"></i>
                        </span>
                         <span class="fa-stack  fa-size fa-lg" @click="deleteGolongan(row.id_golongan)">
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
            golongan: [],
            addgolongan: {},
            editgolongan: {},
            getGolonganData:[],
            deleteGolonganData:null,
        }
    },
    created() {
     this.golonganIndex();
     },
    methods: {
        golonganIndex(){
              let uri = `/api/golongan`;
            this.axios.get(uri).then((response) => {
            this.golongan = response.data;
            console.log(this.golongan);
        });
        },
        getGolongan($id){
             axios.get(`/api/golongan/${$id}`).then((response)=>{
                this.getGolonganData=response.data;
             })
            return this.getGolonganData;
        },
        editGolongan($id){
        // GET SELECTED ID
         axios.get(`/api/golongan/${$id}`).then((response)=>{
               const {
                value: formValues
            } = this.$swal.fire({
                title: 'Tambah Golongan',
                html: 'No Golongan' +
                    '<input id="swal-input1" value="'+response.data.no_golongan+'" type="number" class="swal2-input w-100">' +
                    'Nama Golongan' +
                    '<input id="swal-input2" value="'+response.data.nama_golongan+'" class="swal2-input">',
                focusConfirm: false,
                confirmButtonText:'Edit',

                preConfirm: () => {
                    return [
                        document.getElementById('swal-input1').value,
                        document.getElementById('swal-input2').value
                    ]
                }
            }).then((formValues) => {
                if (formValues.isConfirmed == true) {
                    if (formValues.value[0] == "" || formValues.value[1] == "") {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Data Kurang',
                            text: 'Anda Harus Mengisi Seluruh Input',
                        })
                    } else {
                        this.editgolongan.no_golongan = formValues.value[0];
                        this.editgolongan.nama_golongan = formValues.value[1];
                        let uri = `/api/golongan/update/${$id}`;
                       this.axios.put(uri, this.editgolongan).then((response) => {
                            this.golonganIndex();
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
        addGolongan() {
            const {
                value: formValues
            } = this.$swal.fire({
                title: 'Tambah Golongan',
                html: 'No Golongan' +
                    '<input id="swal-input1"  class="swal2-input w-100">' +
                    'Nama Golongan' +
                    '<input id="swal-input2" class="swal2-input">',
                focusConfirm: false,
                confirmButtonText:'Tambah',
                preConfirm: () => {
                    return [
                        document.getElementById('swal-input1').value,
                        document.getElementById('swal-input2').value
                    ]
                }
            }).then((formValues) => {
                if (formValues.isConfirmed == true) {
                    if (formValues.value[0] == "" || formValues.value[1] == "") {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Data Kurang',
                            text: 'Anda Harus Mengisi Seluruh Input',
                        })
                    } else {
                        this.addgolongan.no_golongan = formValues.value[0];
                        this.addgolongan.nama_golongan = formValues.value[1];
                        let uri = '/api/golongan/store';
                        this.axios.post(uri, this.addgolongan).then((response) => {
                            this.golonganIndex();
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
        deleteGolongan(id){
            this.deleteGolongan=id;
            this.$swal.fire({
                title: 'Apakah Anda yakin?',
                text: "Jika Anda hapus, maka data tidak akan kembali lagi.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Hapus',
                cancelButtonText: 'Kembali'
                }).then((result) => {
                if (result.value) {
                    let uri = `/api/golongan/delete/${id}`;
                    this.axios.delete(uri).then(response => {
                        this.golonganIndex();
                       this.$swal.fire({
                        title: 'Success!',
                        text: 'Golongan Berhasil Dihapus',
                        icon: 'success',
                    });
                    });
                   
                }
            })
        }
        
    }
}
</script>