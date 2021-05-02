<template>
    <div class="p-3 p-md-0">
        <div class="row mt-4">
            <div class="col-md-4">

            </div>
             <div class="bg-white col-md-4 p-4 border-rounded">
                <h4 class="text-center font-weight-bold border-rounded">Data Keluarga</h4>
                <form action="POST" @submit.prevent="update()">
                        <label for="inputState">Apakah Sudah Menikah</label>
                        <select id="inputState" @change="toggle()" class="form-control" v-model="keluarga.is_menikah" >
                            <option value="1">Ya</option>
                            <option value="0">Belum</option>
                        </select>
                        <label for="namapasangan">Nama Pasangan</label>
                        <input type="name"  :disabled="toggledisable == 0" id="namapasangan" v-model="keluarga.nama_pasangan" class="form-control" >
                        <label for="jumlahanak">Jumlah Anak</label>
                        <input type="number" :disabled="toggledisable == 0" v-model="keluarga.jumlah_anak"  id="jumlahanak" class="form-control" >
                 <button type="submit" class="btn btn-primary mt-3 rounded-pill ml-auto mr-auto d-block">Simpan</button>
                </form>
            </div>
             <div class="col-md-4">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keluarga: {},
            toggledisable:null,
        }
    },
        created() {
this.getKeluarga();
},
    methods: {
        toggle(){
             if(this.keluarga.is_menikah == 1){
                    this.toggledisable=1;
                }else{
                    this.toggledisable=0;
                     this.keluarga.nama_pasangan=null;
                    this.keluarga.jumlah_anak=null;
                }
        },
        update(){
            let uri = `/api/keluarga/update/${this.$route.params.id }`;
                       this.axios.put(uri, this.keluarga).then((response) => {
                            this.$swal.fire({
                                icon: 'success',
                                title: 'Berhasil',
                                text: response.data.message,
                            })
                        });
        },
        getKeluarga(){
            let uri = `/api/keluarga/${this.$route.params.id }`;
              this.axios.get(uri).then((response) => {
                this.keluarga=response.data;
                this.toggledisable=response.data.is_menikah;
         });
        }
    }
}
</script>

<style>

</style>