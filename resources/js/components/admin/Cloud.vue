<template>
<div>
    <div class="row mt-5">
        <div class="col-md-6">
<h4 class="text-dark ">{{user.name}}</h4>
        </div>
         <div class="col-md-6">
           <form method="POST" enctype="multipart/form-data" class="float-right" @submit.prevent="Upload">
           <input type="file" @change="processFile($event)" name="imgupload">
            <button type="submit" class="btn btn-primary  rounded-pill text-white py-2"> <i class="fas fa-plus"></i> &nbsp Add Files</button>

           </form>
        </div>
    </div>
    
<div class="row mt-5">
    <div class="col-md-4">
        <div class="ffolder big cyan">
            <span>KTP</span>
        </div>
    </div>
    <div class="col-md-4">
        <div class="ffolder big pink">
            <span>KK</span>
        </div>
    </div>
    <div class="col-md-4">
        <div class="ffolder big cyan">
            <span>Akte</span>
        </div>
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
</div>
</template>
<script>
export default {
  data: () => ({
        file: null,      
        user:'',
        documents:[]
        }),
        methods: {
          processFile(event) {
             this.file = event.target.files[0]
            },
            Upload: function (e) {
                if (this.$data.file != null) {
                     const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
                  const formdata = new FormData();
                  console.log(this.$data.file);
                    formdata.append('image', this.file );
                    formdata.append('iduser', this.user.id_akun);
                    let uri = '/api/uploadimg';
                    this.axios.post(uri, formdata, config).then((response) => {
                      console.log(response);
                    });
                    return true;
                }

                e.preventDefault();
            }
        },
        mounted(){
             axios.get('/api/user').then((res)=>{
            this.user = res.data
        }).then(()=>{
           axios.get('/api/document',{params:{iduser:this.user.id_akun}}).then((res)=>{
            this.documents= res.data
            console.log(this.documents);
            })
        })
         
        }

}
</script>