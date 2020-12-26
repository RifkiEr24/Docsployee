<template>
    <div
    id="demo"
    :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]">
    <div class="demo">
        <AdminNavbar/>
      <div class="container">
        <vue-page-transition  name="fade-in-up">
        <router-view />
        </vue-page-transition>
      </div>
      <sidebar-menu class="bg-primary"
        :menu="menu"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
      />
      <div
        v-if="isOnMobile && !collapsed"
        class="sidebar-overlay "
        @click="collapsed = true"
      />
    </div>
  </div>
</template>
<script>
const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}
import { SidebarMenu } from 'vue-sidebar-menu';
import AdminNavbar from './AdminNavbar.vue';
import Cloud from './Cloud.vue'
export default {
    components:{
        AdminNavbar,
        Cloud
    },
  props:{
    theme: {
      type: String,
      default: ''
    },
    },
     data () {
    return {
      menu: [
        {
          header: true,
          title: 'All',
          hiddenOnCollapse: true
        },
        {
          href: '/'+ this.routeDifferentiator(),
          title: 'Dashboard',
          icon: 'fa fa-download'
        },
        {
          href: '/'+ this.routeDifferentiator()+'/employeelist',
          title: 'Employee List',
          icon: 'fas fa-users',
          hidden: this.showOnAdmin()
        },
        {
          header: true,
          title: 'Usage',
          hiddenOnCollapse: true
        },
        {
          href: '/'+ this.routeDifferentiator()+'/calendar',
          title: 'Calendar',
          icon: 'fa fa-calendar'
        },
        {
          href: '/'+ this.routeDifferentiator()+'/cloud',
          title: 'Cloud',
          icon: 'fa fa-cloud',
         
          
        },
        {
          href: '/'+ this.routeDifferentiator()+'/notification',
          title: 'Notification',
          icon: 'fas fa-bell'
        },
        {
          component: separator
        },
        {
          header: true,
          title: 'Other',
          hiddenOnCollapse: true
        },
        {
          title: 'Log Out',
          icon: 'fa fa-sign-out-alt',
        },
        ],
      collapsed: true,
      themes: [
        {
          name: 'Default theme',
          input: ''
        }
      ],
      selectedTheme: 'default-theme',
      isOnMobile: false,
    }
  },
  methods: {
    logout(){
            axios.post('/api/logout').then(()=>{
                this.$router.push({ name: "login"})
            })
        },
    CheckIfRoute: function (routeName){
      return this.$route.matched[0].path.substr(1) === routeName;
    },
    onToggleCollapse: function (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick: function (event, item, node) {
   
    },
    showOnAdmin: function(){
      if(this.$route.matched[0].path.substr(1) === 'admin'){
        return false;
      }else{
        return true;
      }
    },
    routeDifferentiator: function (routeName){
      console.log(this.$route.matched[0].path.substr(1) );
       if( this.$route.matched[0].path.substr(1) === 'admin'){
        return 'admin';
      }else{
        return 'user';
      }
    },

    onResize () {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true
        this.collapsed = true
      } else {
        this.isOnMobile = false
        this.collapsed = false
      }
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
}
</script>
<style>

.v-sidebar-menu .vsm--toggle-btn{
  background-color: #3490dc;
}
.v-sidebar-menu .vsm--link_level-1 .vsm--icon{
  background: none;
}
body{
    background-color: #f0f0f0 !important;
}
#demo {
  padding-left: 350px;
  transition: 0.3s ease;
}
#demo.collapsed {
  padding-left: 50px;
}
#demo.onmobile {
  padding-left: 50px;
}
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}


pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #fff;
  border-radius: 2px;
  padding: 15px;
  line-height: 1.5;
  overflow: auto;
}

</style>