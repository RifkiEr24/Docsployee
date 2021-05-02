require('./bootstrap');

window.Vue = require('vue');
 
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './components/App.vue';
import VueSweetalert2 from 'vue-sweetalert2'; 
import VuePageTransition from "vue-page-transition";
import VueSidebarMenu from 'vue-sidebar-menu'
import SweetAlertIcons from 'vue-sweetalert-icons';
import SmartTable from 'vuejs-smart-table'

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueRouter);
Vue.use(VueSidebarMenu)
Vue.use(VuePageTransition);
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);
Vue.use(SweetAlertIcons);
Vue.use(SmartTable)

import ArticleEdit from './components/employeeedit.vue';
import Login from './components/Login.vue'
import Register from './components/Register.vue';
import AdminPage from './components/page/AdminPage.vue'
import NotFound from './components/NotFound.vue'
import '@fortawesome/fontawesome-free/js/all.js';

// Vue.component(
//   'example-component',
//   require('./components/ExampleComponent.vue').default
// );

  // {
  //   name: 'login',
  //   path: '/login',
  //   component:  () => import("./components/ExampleComponent.vue")
  // },
const routes = [
  {
    path: '*',
    component: NotFound
},
  {
      path: '/' ,
      component: Login,
      name: 'login',
      beforeEnter: (to, from, next) =>{
        axios.get('/api/athenticated').then((res)=>{
          axios.get('api/user').then((res)=>{
           next({name: res.data.role})
          })
        }).catch(()=>{
           next()
        })
    },
  },
  
  {
      name: 'register',
      path: '/register',
      component: Register
  },
  {
      path: '/admin',
      component: AdminPage,
      beforeEnter: (to, from, next) =>{
        axios.get('/api/athenticated').then((res)=>{
          axios.get('api/user').then((res)=>{
            if(res.data.role == 'user'){
             Vue.swal.fire({
                icon: 'error',
                title: 'Access Denied',
                text: 'Maaf, hanya admin yang bisa mengakses halaman ini',
              }).then(()=>{
                next({ name: 'user'})
              })
            }else{
              const today = new Date();
              const start= new Date(res.data.last_login);
              let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
              let startdate = start.getFullYear()+'-'+(start.getMonth()+1)+'-'+start.getDate();
              if(startdate != date){
                axios.get('/api/updatelogin',{params:{iduser: res.data.id_akun}}).then((res)=>{
                });
              }
              next()
            }
          })
        }).catch(()=>{
          return next({ name: 'login'})
        })
    },
      children:[
          {
            name: 'admin',
            path:'',
            component: () => import("./components/page/DashboardAdmin.vue")
          },
          {
            name: 'employeelist',
            path:'employeelist',
            component: () => import("./components/page/employeeList.vue")
          },
          {
            name: 'accountmenu',
            path:'accountmenu/:id',
            component: () => import("./components/page/AccountMenu.vue")
          },
          {
            name: 'edit',
            path: 'edit/:id',
            component: ArticleEdit
          },
          {
            name:'createaccount',
            path:'createaccount',
            component: () => import("./components/Register.vue")
          },
          {
            name:'admincalendar',
            path:'event',
            component: () => import("./components/page/Calendar.vue")
          },
          {
            path:'eventdetail/:id',
            component: () => import("./components/page/EventDetail.vue")
          },
          {
            name:'golongan',
            path:'golongan',
            component: () => import("./components/page/Golongan.vue")
          },
           {
            name:'jabatan',
            path:'jabatan',
            component: () => import("./components/page/Jabatan.vue")
          },
          {
            name:'jurusan',
            path:'jurusan',
            component: () => import("./components/page/Jurusan.vue")
          },
           {
            name:'matpel',
            path:'matpel',
            component: () => import("./components/page/Matpel.vue")
          },
          {
            name:'keluarga',
            path:'keluarga/:id',
            component: () => import("./components/page/Keluarga.vue")
          },
          {
            name:'admincloud',
            path:'cloud',
            component: () => import("./components/page/Cloud.vue")
          },
          {
            name: 'admincategorydetail',
            path:'/admin/cloud/detail/:id',
            component: () => import("./components/page/CategoryDetail.vue")
          },
          {
            name: 'admineditcloud',
            path:'/admin/cloud/:id',
            component: () => import("./components/page/Cloud.vue")
          },
          {
            name: 'admineditcategory',
            path:'/admin/cloud/detail/:categoryname/:id',
            component: () => import("./components/page/CategoryDetail.vue")
          },
          {
            name:'adminaccountedit',
            path:'accountedit',
            component: () => import("./components/page/AccountEdit.vue")
          },
          {
            name:'adminpassword',
            path:'passwordedit',
            component: () => import("./components/page/PasswordEdit.vue")
          },
          {
            name:'adminpasswordedit',
            path:'passwordedit/:id',
            component: () => import("./components/page/PasswordEdit.vue")
          },
          {
            path: 'notification',
            component: () => import("./components/page/Notification.vue")
          }
      ],
    
  },
  {
    path: '/user',
    component: AdminPage,
    children:[
        {
          name: 'user',
          path:'',
          component: () => import("./components/page/DashboardUser.vue")
        },
        {
          name: 'usercalendar',
          path:'/user/event',
          component: () => import("./components/page/Calendar.vue")
        },
        {
          name: 'usercloud',
          path:'/user/cloud',
          component: () => import("./components/page/Cloud.vue")
        },
        {
          name: 'usercategorydetail',
          path:'/user/cloud/detail/:id',
          component: () => import("./components/page/CategoryDetail.vue")
        },
        {
          path: '/user/notification',
          component: () => import("./components/page/Notification.vue")
        },
        {
          name: 'useraccountedit',
          path:'/user/accountedit',
          component: () => import("./components/page/AccountEdit.vue")
        },
        {
          name:'userpassword',
          path:'passwordedit',
          component: () => import("./components/page/PasswordEdit.vue")
        },
    ],
    beforeEnter: (to, form, next) =>{
      axios.get('/api/athenticated').then((response)=>{
        axios.get('/api/user').then((res)=>{
          if(res.data.role == 'admin'){
           Vue.swal.fire({
              icon: 'error',
              title: 'Access Denied',
              text: 'Maaf, hanya user yang bisa mengakses halaman ini',
            }).then(()=>{
              next({ name: 'admin'})
            })
          }else{
            const today = new Date();
            const start= new Date(res.data.last_login);
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            let startdate = start.getFullYear()+'-'+(start.getMonth()+1)+'-'+start.getDate();
            if(startdate != date){
              axios.get('/api/updatelogin',{params:{iduser: res.data.id_akun}}).then((res)=>{
              });
            }
            next()
          }
        })
      }).catch(()=>{
        return next({ name: 'login'})
      })
  }
},

];
 
const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
