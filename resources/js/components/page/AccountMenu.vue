<template>
  <div>
      <div class="row mt-5">
          <div class="col-md-4">
            <router-link :to="{name: 'edit', params: { id: this.$route.params.id }}">
              <div class="bg-info text-center text-white menu-container p-4">
                  <i class="fas fa-user-edit account-menu-icon"></i>
                  <h5 class="mt-4 font-weight-bold">Data Pribadi</h5>
              </div>
              </router-link>
          </div>
            <div class="col-md-4 mt-4 mt-md-0">
                    <router-link :to="{name: 'keluarga', params: { id: this.$route.params.id }}">

              <div class="bg-info text-center text-white menu-container p-4">
                  <i class="fas fa-house-user account-menu-icon"></i>
                  <h5 class="mt-3 font-weight-bold">Data Keluarga</h5>
              </div>
                </router-link>
          </div>
          <div class="col-md-4 mt-4 mt-md-0">
              <router-link :to="{name: 'adminpasswordedit', params: { id:  this.$route.params.id }}">
              <div class="bg-info text-center text-white menu-container p-4">
                  <i class="fas fa-key account-menu-icon"></i>
                  <h5 class="mt-3 font-weight-bold">Password</h5>
              </div>
              </router-link>      
          </div>
            <div class="col-md-4 mt-4">
            <router-link :to="{name: 'admineditcloud', params: { id:  this.$route.params.id }}">
              <div class="bg-info text-center text-white menu-container p-4">
                  <i class="fas fa-folder account-menu-icon"></i>
                  <h5 class="mt-3 font-weight-bold">Dokumen</h5>
              </div>    
              </router-link>
          </div>
          
        
      </div>
  </div>
</template>

<script>
export default {
created(){
    console.log(this.$route.params.id)
}
}
</script>

<style>
.account-menu-icon{
    font-size: 48px;
}
.menu-container{
    border-radius: 25px;
}
</style>