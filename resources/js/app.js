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
import Home from './components/Home.vue'
import CreateAccount from './components/CreateAccount.vue';
import '@fortawesome/fontawesome-free/js/all.js';

const routes = [
  {
      name: 'home',
      path: '/',
      component: Home
  },
  {
      name: 'create',
      path: '/account/create',
      component: () => import("./components/CreateAccount.vue")
  },
  {
      name: 'admin',
      path: '/admin',
      component: () => import("./components/AdminPage.vue"),
      children:[
          {
            path:'',
            component: () => import("./components/Dashboard.vue")
          }
      ]
  },
  {
    name: 'show',
    path: '/article/show/:id',
    component: ArticleShow
}
];
 
const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');