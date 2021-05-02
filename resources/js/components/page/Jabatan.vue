<template>
<div>
    <button class="btn btn-primary d-block mx-auto mt-3" @click="addJabatan()">Tambah Jabatan</button>
        <div class="table-responsive">
            <v-table :data="jabatan"
                class="table table-light  mt-4 border-rounded">
                <thead slot="head"  class="bg-primary border-rounded text-white">
                    <v-th sortKey="nama_jabatan">Nama Jabatan</v-th>
                    <v-th sortKey="golongan.nama_golongan">No Golongan</v-th>
                    <v-th sortKey="ruang">Ruang</v-th>
                    <v-th sortKey="gaji">Gaji</v-th>
                    <th>Action</th>
                </thead>
                <tbody slot="body" slot-scope="{displayData}" >
                    <tr v-for="row in displayData" :key="row.id_jabatan">
                    <td>{{ row.nama_jabatan }}</td>
                    <td>{{ row.golongan.no_golongan }}</td>
                    <td>{{ row.ruang }}</td>
                    <td>{{ row.gaji }}</td>
                    <td>
                         <span class="fa-stack  fa-size fa-lg">
                            <i class="fa fa-square text-secondary fa-stack-2x"></i>
                            <i class="fas fa-eye fa-stack-1x text-white"></i>
                        </span>
                          <span class="fa-stack  fa-size fa-lg" @click="editJabatan(row.id_jabatan)">
                            <i class="fa fa-square text-primary fa-stack-2x"></i>
                            <i class="fas fa-user-edit fa-stack-1x text-white"></i>
                        </span>
                         <span class="fa-stack  fa-size fa-lg" @click="deleteJabatan(row.id_jabatan)">
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
            jabatan:[],
            golonganOption:"",
            addJabatanData: {},
            editjabatan: {},
            getJabatanData:[],
            deleteGolonganData:null,
        }
    },
    created() {
     this.golonganIndex();
     this.jabatanIndex();
     },
    methods: {
         jabatanIndex(){
              let uri = `/api/jabatan`;
            this.axios.get(uri).then((response) => {
            this.jabatan = response.data;
        });
        },
        golonganIndex(){
              let uri = `/api/golongan`;
            this.axios.get(uri).then((response) => {
            this.golongan = response.data;
            for (var key in response.data) {
                this.golonganOption+=`<option value="${response.data[key].id_golongan}">${response.data[key].no_golongan}</option>`;
                };
        });
        },
        getJabatan($id){
             axios.get(`/api/jabatan/${$id}`).then((response)=>{
                this.getJabatanData=response.data;
             })
            return this.getJabatanData;
        },
        editJabatan(id){
        // GET SELECTED ID
         axios.get(`/api/jabatan/${id}`).then((response)=>{
               const {
                value: formValues
            } = this.$swal.fire({
                title: 'Edit Jabatan',
                                confirmButtonText:'Edit',
                html: `No Golongan
                    <select id="swal-input1" value="${response.data.id_golongan}" class="swal2-input w-100">
                    ${this.golonganOption}
                    </select>
                    Nama Jabatan
                    <input id="swal-input2"  value="${response.data.nama_jabatan}" class="swal2-input w-100">
                    Ruang
                    <input id="swal-input3"  value="${response.data.ruang}" class="swal2-input">
                    Gaji
                    <input id="swal-input4"  value="${response.data.gaji}" type="number" class="swal2-input w-100"> `,
                focusConfirm: false,
                preConfirm: () => {
                    return [
                       document.getElementById('swal-input1').value,
                        document.getElementById('swal-input2').value,
                        document.getElementById('swal-input3').value,
                        document.getElementById('swal-input4').value
                    ]
                }
            }).then((formValues) => {
                if (formValues.isConfirmed == true) {
                    if (formValues.value[0] == "" || formValues.value[1] == "" || formValues.value[2] == "" || formValues.value[3] == "") {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Data Kurang',
                            text: 'Anda Harus Mengisi Seluruh Input',
                        })
                    } else {
                       this.editjabatan.id_golongan = formValues.value[0];
                        this.editjabatan.nama_jabatan = formValues.value[1];
                         this.editjabatan.ruang = formValues.value[2];
                        this.editjabatan.gaji = formValues.value[3];
                        let uri = `/api/jabatan/update/${id}`;
                       this.axios.put(uri, this.editjabatan).then((response) => {
                            this.jabatanIndex();
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
        addJabatan() {
            const {
                value: formValues
            } = this.$swal.fire({
                title: 'Tambah Jabatan',
                                confirmButtonText:'Tambah',
                html: `No Golongan
                    <select id="swal-input1" class="swal2-input w-100">
                    ${this.golonganOption}
                    </select>
                    Nama Jabatan
                    <input id="swal-input2"  class="swal2-input w-100">
                    Ruang
                    <input id="swal-input3" class="swal2-input">
                    Gaji
                    <input id="swal-input4" type="number" class="swal2-input w-100"> `,
                focusConfirm: false,
                preConfirm: () => {
                    return [
                        document.getElementById('swal-input1').value,
                        document.getElementById('swal-input2').value,
                        document.getElementById('swal-input3').value,
                        document.getElementById('swal-input4').value
                    ]
                }
            }).then((formValues) => {
                if (formValues.isConfirmed == true) {
                    if (formValues.value[0] == "" || formValues.value[1] == "" || formValues.value[2] == "" || formValues.value[3] == "") {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Data Kurang',
                            text: 'Anda Harus Mengisi Seluruh Input',
                        })
                    } else {
                        this.addJabatanData.id_golongan = formValues.value[0];
                        this.addJabatanData.nama_jabatan = formValues.value[1];
                         this.addJabatanData.ruang = formValues.value[2];
                        this.addJabatanData.gaji = formValues.value[3];
                        let uri = '/api/jabatan/store';
                        this.axios.post(uri,this.addJabatanData).then((response) => {
                            this.jabatanIndex();
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
        deleteJabatan(id){
            this.$swal.fire({
                title: 'Apakah Anda yakin?',
                text: "Jika Anda hapus, maka data tidak akan kembali lagi.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Hapus',
                cancelButtonText: 'Kembali'
                }).then((result) => {
                if (result.value) {
                    let uri = `/api/jabatan/delete/${id}`;
                    this.axios.delete(uri).then(response => {
                        this.jabatanIndex();
                       this.$swal.fire({
                        title: 'Success!',
                        text: 'Jabatan Berhasil Dihapus',
                        icon: 'success',
                    });
                    });
                   
                }
            })
        }
        
    }
}
</script>