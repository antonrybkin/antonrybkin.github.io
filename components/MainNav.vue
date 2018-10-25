<template>
  <div>
    <transition name="bearle-transition">
      <nav
        v-if="drawer"
        class="bearle__menu"
      >
        <div
          v-if="$vuetify.breakpoint.smAndUp"
          class="bearle__menu__title"><span>categories</span></div>
        <ul class="white--text text-xs-right">
          <li><nuxt-link to="/">Home page</nuxt-link></li>
          <li><nuxt-link to="/">Project</nuxt-link>
            <nuxt-link to="/"><img
              src="/images/calculator-white.svg"
              alt="Calculator"
              class="bearle__menu__calculator"></nuxt-link></li>
          <li><nuxt-link to="/">Services</nuxt-link></li>
          <li><nuxt-link to="/">Blog</nuxt-link></li>
          <li><nuxt-link to="/">Company</nuxt-link></li>
          <li><nuxt-link to="/">Contacts</nuxt-link></li>
        </ul>
      </nav>
    </transition>
    <div
      :class="{isactive: drawer}"
      class="bearle__burger">
      <button
        :ripple="false"
        type="button"
        @click="drawer = !drawer">&nbsp;</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: null,
      fixed: false,
      items: [
        { title: 'Home page', to: '/' },
        { title: 'Project', to: '/project', icon: 'calculator' },
        { title: 'Services', to: '/services' },
        { title: 'Blog', to: '/blog' },
        { title: 'Company', to: '/company' },
        { title: 'Contacts', to: '/contacts' }
      ],
      miniVariant: false,
      right: true
    }
  }
}
</script>
