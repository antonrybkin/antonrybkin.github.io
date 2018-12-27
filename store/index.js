import Vue from 'vue'
import Vuex from 'vuex'
import services from './services'
import ourProducts from './ourProducts'
import project from './project'
import blog from './blog'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      drawer: false,
      outMenu: false,
      navItems: [
        { name: 'Home page', link: '/', order: 10 },
        {
          name: 'Project',
          link: '/project',
          order: 20,
          icon: '/images/calculator-white.svg'
        },
        { name: 'Services', link: '/services', order: 30 },
        { name: 'Blog', link: '/blog', order: 40 },
        { name: 'Company', link: '/about', order: 50 },
        { name: 'Contacts', link: '/contacts', order: 60 }
      ],
      showProductsAndProject: true,
      currentBlogSlide: 0,
      services,
      ourProducts,
      project,
      blog
    },
    mutations: {
      menuToggle(state) {
        state.drawer = !state.drawer
      }
    }
  })

export default store
