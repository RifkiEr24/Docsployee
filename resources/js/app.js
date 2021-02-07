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

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueRouter);
Vue.use(VueSidebarMenu)
Vue.use(VuePageTransition);
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);
Vue.use(SweetAlertIcons);

import ArticleIndex from './components/ArticleIndex.vue';
import ArticleCreate from './components/ArticleCreate.vue';
import ArticleShow from './components/ArticleShow.vue';
import ArticleEdit from './components/ArticleEdit.vue';
import Login from './components/Login.vue'
import Register from './components/Register.vue';
import AdminPage from './components/admin/AdminPage.vue'
import ExampleComponent from './components/ExampleComponent.vue'
import NotFound from './components/NotFound.vue'
import '@fortawesome/fontawesome-free/js/all.js';

// Vue.component(
//   'example-component',
//   require('./components/ExampleComponent.vue').default
// );
Vue.component('example-component', require('./components/ExampleComponent.vue').default
);
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
          console.log(res);
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
            component: () => import("./components/admin/DashboardAdmin.vue")
          },
          {
            name: 'employeelist',
            path:'employeelist',
            component: () => import("./components/admin/employeeList.vue")
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
            component: () => import("./components/admin/Calendar.vue")
          },
          {
            path:'eventdetail/:id',
            component: () => import("./components/admin/EventDetail.vue")
          },
          {
            name:'admincloud',
            path:'cloud',
            component: () => import("./components/admin/Cloud.vue")
          },
          {
            name: 'admincategorydetail',
            path:'/admin/cloud/detail/:id',
            component: () => import("./components/admin/CategoryDetail.vue")
          },
          {
            name: 'admineditcloud',
            path:'/admin/cloud/:id',
            component: () => import("./components/admin/Cloud.vue")
          },
          {
            name: 'admineditcategory',
            path:'/admin/cloud/detail/:categoryname/:id',
            component: () => import("./components/admin/CategoryDetail.vue")
          },
          {
            name:'adminaccountedit',
            path:'accountedit',
            component: () => import("./components/admin/AccountEdit.vue")
          },
          {
            path: 'notification',
            component: () => import("./components/admin/Notification.vue")
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
          component: () => import("./components/admin/DashboardUser.vue")
        },
        {
          name: 'usercalendar',
          path:'/user/event',
          component: () => import("./components/admin/Calendar.vue")
        },
        {
          name: 'usercloud',
          path:'/user/cloud',
          component: () => import("./components/admin/Cloud.vue")
        },
        {
          name: 'usercategorydetail',
          path:'/user/cloud/detail/:id',
          component: () => import("./components/admin/CategoryDetail.vue")
        },
        {
          path: '/user/notification',
          component: () => import("./components/admin/Notification.vue")
        },
        {
          name: 'useraccountedit',
          path:'/user/accountedit',
          component: () => import("./components/admin/AccountEdit.vue")
        },
    ],
    beforeEnter: (to, form, next) =>{
      axios.get('/api/athenticated').then((response)=>{
        axios.get('/api/user').then((res)=>{
          console.log(res);
          if(res.data.role == 'admin'){
           Vue.swal.fire({
              icon: 'error',
              title: 'Access Denied',
              text: 'Maaf, hanya user yang bisa mengakses halaman ini',
            }).then(()=>{
              next({ name: 'admin'})
            })
          }else{
            next()
          }
        })
      }).catch(()=>{
        return next({ name: 'login'})
      })
  }
},

  {
    name: 'show',
    path: '/article/show/:id',
    component: ArticleShow
},
{
  name: 'articleindex',
  path: '/article',
  component: ArticleIndex
},
{
  name: 'articlecretae',
  path: '/article/create',
  component: ArticleCreate
},
{
  name: 'articleedit',
  path: '/article/edit/:id',
  component: ArticleEdit
},
{
  name: 'example',
  path: '/example',
  component: ExampleComponent,
  beforeEnter: (to, form, next) =>{
    axios.get('/api/athenticated').then(()=>{
        next()
    }).catch(()=>{
      console.log('error')
    })
}
}
];
 
const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
