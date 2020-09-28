<template>
    <div>
      <Navbar v-if="CheckIfRoute('home') || CheckIfRoute('create')" />
        <vue-page-transition name="fade-in-up">
        <router-view />
        </vue-page-transition>
  </div>
</template>
<script>

import Navbar from './Navbar.vue';

export default {
    components:{
        Navbar,
    },
    methods:{
        CheckIfRoute: function (routeName){
      return this.$route.name === routeName;
    }
    }
}
</script>

<style>
body{
    background-color: #fff !important;
}

</style>