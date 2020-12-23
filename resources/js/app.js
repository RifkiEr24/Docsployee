require('./bootstrap');

window.Vue = require('vue');
 
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './components/App.vue';
import VueSweetalert2 from 'vue-sweetalert2'; 
import VuePageTransition from "vue-page-transition";
import VueSidebarMenu from 'vue-sidebar-menu'

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueRouter);
Vue.use(VueSidebarMenu)
Vue.use(VuePageTransition);
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);
 
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
        axios.get('api/athenticated').then(()=>{
            next()
        }).catch(()=>{
          return next({ name: 'login'})
        })
    },
      children:[
          {
            name: 'admin',
            path:'',
            component: () => import("./components/admin/Dashboard.vue")
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
            name:'create',
            path:'createaccount',
            component:ArticleCreate
          },
          {
            path:'calendar',
            component: () => import("./components/admin/Calendar.vue")
          },
          {
            path:'cloud',
            component: () => import("./components/admin/Cloud.vue")
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
    beforeEnter: (to, form, next) =>{
      axios.get('/api/athenticated').then((response)=>{
          next()
      }).catch(()=>{
        return next({ name: 'login'})
      })
  },
    children:[
        {
          name: 'user',
          path:'',
          component: () => import("./components/admin/Dashboard.vue")
        },
        {
          path:'/user/calendar',
          component: () => import("./components/admin/Calendar.vue")
        },
        {
          path:'/user/cloud',
          component: () => import("./components/admin/Cloud.vue")
        },
        {
          path: '/user/notification',
          component: () => import("./components/admin/Notification.vue")
        },
    ],
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
