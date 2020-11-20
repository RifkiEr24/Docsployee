<template>
    <div

    id="demo"
    :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]">
    <div class="demo">
        <AdminNavbar/>
      <div class="container">
        <vue-page-transition name="fade-in-up">
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
export default {
    components:{
        AdminNavbar
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
          title: 'Getting Started',
          hiddenOnCollapse: true
        },
        {
          href: '/admin',
          title: 'Dashboard',
          icon: 'fa fa-download'
        },
        {
          href: '/admin/employeelist',
          title: 'Employee List',
          icon: 'fas fa-users'
        },
        {
          header: true,
          title: 'Usage',
          hiddenOnCollapse: true
        },
        {
          href: '/admin/calendar',
          title: 'Calendar',
          icon: 'fa fa-calendar'
        },
        {
          href: '/admin/cloud',
          title: 'Cloud',
          icon: 'fa fa-cloud'
        },
        {
          href: '/styling',
          title: 'Notification',
          icon: 'fas fa-bell'
        },
        {
          component: separator
        },
        {
          header: true,
          title: 'Example',
          hiddenOnCollapse: true
        },
        {
          href: '/disabled',
          title: 'Disabled page',
          icon: 'fa fa-lock',
          disabled: true
        },
        {
          title: 'Badge',
          icon: 'fa fa-cog',
          badge: {
            text: 'new',
            class: 'vsm--badge_default'
          }
        },
        {
          href: '/page',
          title: 'Dropdown Page',
          icon: 'fa fa-list-ul',
          child: [
            {
              href: '/page/sub-page-1',
              title: 'Sub Page 01',
              icon: 'fa fa-file-alt'
            },
            {
              href: '/page/sub-page-2',
              title: 'Sub Page 02',
              icon: 'fa fa-file-alt'
            }
          ]
        },
        {
          title: 'Multiple Level',
          icon: 'fa fa-list-alt',
          child: [
            {
              title: 'page'
            },
            {
              title: 'Level 2 ',
              child: [
                {
                  title: 'page'
                },
                {
                  title: 'Page'
                }
              ]
            },
            {
              title: 'Page'
            },
            {
              title: 'Another Level 2',
              child: [
                {
                  title: 'Level 3',
                  child: [
                    {
                      title: 'Page'
                    },
                    {
                      title: 'Page'
                    }
                  ]
                }
              ]
            }
          ]
        }
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
    CheckIfRoute: function (routeName){
        console.log(this.$route.name === routeName);
      return this.$route.name === routeName;
    },
    onToggleCollapse: function (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick: function (event, item, node) {
      console.log('onItemClick')
      // console.log(event)
      // console.log(item)
      // console.log(node)
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