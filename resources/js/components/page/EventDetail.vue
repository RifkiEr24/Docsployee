<template>
    <div>
        
        <h1>{{event.title}}</h1>
        <p>{{event.deskripsi}}</p>
    </div>
</template>
<script>
export default {
     data(){
        return {
            event:{},
        }
    },
    created(){
        console.log(this.$route.params.id)
         axios.get('/api/event/show',{params:{iduser:this.$route.params.id}}).then((res)=>{
            this.event = res.data;
            console.log(this.event)
        })
    }
}
</script>