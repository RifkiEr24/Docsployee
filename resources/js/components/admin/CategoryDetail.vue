<template>
   <div class="row">
       <div class="col-md-4" v-for="(document) in documents" :key="document.id_document" >
         <img :src="'/storage/images/'+user.name+'/'+document.file_name" class="mw-100">
       </div>
   </div>
</template>
<script>
export default {
    data: () => ({
        file: null,
        user: '',
        documents: [],
    }),
    methods: {
       
           },
    mounted() {
        axios.get('/api/user').then((res) => {
            this.user = res.data
        }).then(() => {
            const formdata = new FormData();
            axios.get(`/api/category/detail/${this.$route.params.id}`,{params : {iduser: this.user.id_akun}}).then((res) => {
                this.documents = res.data;  
                console.log(this.documents);
            })
        })
    }

}
</script>