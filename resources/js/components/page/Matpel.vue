<template>
<div>
    <button class="btn btn-primary d-block mx-auto mt-3" @click="addmatpel()">Tambah matpel</button>
        <div class="table-responsive">
            <v-table :data="matpel"
                class="table table-light  mt-4 border-rounded">
                <thead slot="head"  class="bg-primary border-rounded text-white">
                    <v-th sortKey="nama_matpel">Nama matpel</v-th>
                    <v-th sortKey="jurusan.nama_jurusan">Nama Jurusan</v-th>
                    <th>Action</th>
                </thead>
                <tbody slot="body" slot-scope="{displayData}" >
                    <tr v-for="row in displayData" :key="row.id_matpel">
                    <td>{{ row.nama_matpel }}</td>
                    <td><span v-if="row.jurusan">
                        {{row.jurusan.nama_jurusan}}
                        </span>
                        <span v-else>
                            -
                        </span>
                    </td>
                    <td>
                         <span class="fa-stack  fa-size fa-lg">
                            <i class="fa fa-square text-secondary fa-stack-2x"></i>
                            <i class="fas fa-eye fa-stack-1x text-white"></i>
                        </span>
                          <span class="fa-stack  fa-size fa-lg" @click="editmatpel(row.id_matpel)">
                            <i class="fa fa-square text-primary fa-stack-2x"></i>
                            <i class="fas fa-user-edit fa-stack-1x text-white"></i>
                        </span>
                         <span class="fa-stack  fa-size fa-lg" @click="deletematpel(row.id_matpel)">
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
            matpel:[],
            jurusanOption:"",
            addmatpelData: {},
            editmatpelData: {},
            getmatpelData:[],
            deletejurusanData:null,
        }
    },
    created() {
     this.jurusanIndex();
     this.matpelIndex();
     },
    methods: {
         matpelIndex(){
              let uri = `/api/matpel`;
            this.axios.get(uri).then((response) => {
            this.matpel = response.data;
        });
        },
        jurusanIndex(){
              let uri = `/api/jurusan`;
            this.axios.get(uri).then((response) => {
            this.jurusan = response.data;
            for (var key in response.data) {
                this.jurusanOption+=`<option value="${response.data[key].id_jurusan}">${response.data[key].nama_jurusan}</option>`;
                };
        });
        },
        getmatpel($id){
             axios.get(`/api/matpel/${$id}`).then((response)=>{
                this.getmatpelData=response.data;
             })
            return this.getmatpelData;
        },
        editmatpel(id){
        // GET SELECTED ID
         axios.get(`/api/matpel/${id}`).then((response)=>{
               const {
                value: formValues
            } = this.$swal.fire({
                title: 'Edit matpel',
                confirmButtonText:'Edit',
                 html: `
                    Nama Mata Pelajaran
                    <input id="swal-input1" value="${response.data.nama_matpel}"  class="swal2-input w-100">
                    Apakah Pelajaran Jurusan?
                     <select id="swal-input2"  class="swal2-input w-100">
                   <option value="1">Ya</option>
                    <option value="0">Tidak</option>
                    </select>
                    Jurusan
                    <select id="swal-input3" ref="jurusanselect" class="swal2-input w-100">
                    <option value="100">-</option>
                    ${this.jurusanOption}
                    </select>`,
                focusConfirm: false,
                preConfirm: () => {
                    return [
                       document.getElementById('swal-input1').value,
                        document.getElementById('swal-input2').value,
                        document.getElementById('swal-input3').value,
                    ]
                }
            }).then((formValues) => {
                if (formValues.isConfirmed == true) {
                    if (formValues.value[0] == "" || formValues.value[1] == "" || formValues.value[2] == "" ) {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Data Kurang',
                            text: 'Anda Harus Mengisi Seluruh Input',
                        })
                    }
                    else if(formValues.value[1] == 1 && formValues.value[2] == 100 ){
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Data Tidak Tepat',
                            text: 'Anda Harus Mengisi Jurusan jika Mata Pelajaran adalah jurusan',
                        })
                    }
                     else {
                      this.editmatpelData.nama_matpel = formValues.value[0];
                        this.editmatpelData.is_jurusan = formValues.value[1];
                        if (formValues.value[1] == 0) {
                        this.editmatpelData.id_jurusan = null
                        }
                        else{
                         this.editmatpelData.id_jurusan = formValues.value[2];
                        }
                        let uri = `/api/matpel/update/${id}`;
                       this.axios.put(uri, this.editmatpelData).then((response) => {
                            this.matpelIndex();
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
        addmatpel() {
            const {
                value: formValues
            } = this.$swal.fire({
                title: 'Tambah matpel',
                confirmButtonText:'Tambah',
                html: `
                    Nama Mata Pelajaran
                    <input id="swal-input1"  class="swal2-input w-100">
                    Apakah Pelajaran Jurusan?
                     <select id="swal-input2"  class="swal2-input w-100">
                   <option value="1">Ya</option>
                    <option value="0">Tidak</option>
                    </select>
                    Jurusan
                    <select id="swal-input3" ref="jurusanselect" class="swal2-input w-100">
                    <option value="100">-</option>
                    ${this.jurusanOption}
                    </select>`,
                focusConfirm: false,
                preConfirm: () => {
                    return [
                        document.getElementById('swal-input1').value,
                        document.getElementById('swal-input2').value,
                        document.getElementById('swal-input3').value,
                    ]
                }
            }).then((formValues) => {
                if (formValues.isConfirmed == true) {
                    if (formValues.value[0] == "" || formValues.value[1] == "" || formValues.value[2] == "" ) {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Data Kurang',
                            text: 'Anda Harus Mengisi Seluruh Input',
                        })
                    }
                    else if(formValues.value[1] == 1 && formValues.value[2] == 100 ){
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Data Tidak Tepat',
                            text: 'Anda Harus Mengisi Jurusan jika Mata Pelajaran adalah jurusan',
                        })
                    } else {
                        this.addmatpelData.nama_matpel = formValues.value[0];
                        this.addmatpelData.is_jurusan = formValues.value[1];
                        if (formValues.value[1] == 0) {
                        this.addmatpelData.id_jurusan = null
                        }
                        else{
                         this.addmatpelData.id_jurusan = formValues.value[2];
                        }
                        let uri = '/api/matpel/store';
                        this.axios.post(uri,this.addmatpelData).then((response) => {
                            this.matpelIndex();
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
        deletematpel(id){
            this.$swal.fire({
                title: 'Apakah Anda yakin?',
                text: "Jika Anda hapus, maka data tidak akan kembali lagi.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Hapus',
                cancelButtonText: 'Kembali'
                }).then((result) => {
                if (result.value) {
                    let uri = `/api/matpel/delete/${id}`;
                    this.axios.delete(uri).then(response => {
                        this.matpelIndex();
                       this.$swal.fire({
                        title: 'Success!',
                        text: 'Mata Pelajaran Berhasil Dihapus',
                        icon: 'success',
                    });
                    });
                   
                }
            })
        }
        
    }
}
</script>