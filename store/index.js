import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      drawer: false,
      navItems: [
        { name: 'Home page', link: '/', order: 10 },
        {
          name: 'Project',
          link: '/',
          order: 20,
          icon: '/images/calculator-white.svg'
        },
        { name: 'Services', link: '/services', order: 30 },
        { name: 'Blog', link: '/', order: 40 },
        { name: 'Company', link: '/about', order: 50 },
        { name: 'Contacts', link: '/contacts', order: 60 }
      ]
    },
    mutations: {
      menuToggle(state) {
        state.drawer = !state.drawer
      }
    }
  })

export default store
