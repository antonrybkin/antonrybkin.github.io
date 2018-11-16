<template>
  <header>
    <transition name="bearle-transition">
      <nav
        v-on-clickaway="clickAway"
        v-if="$store.state.drawer"
        class="bearle__menu"
      >
        <!-- Плашка "categories" в меню. Комментарии во Vue не выводятся в итоговый HTML-код
        <div
          v-if="$vuetify.breakpoint.smAndUp"
          class="bearle__menu__title"><span>categories</span></div>-->
        <ul class="white--text text-xs-right">
          <li
            v-for="item in $store.state.navItems"
            :key="item.order">
            <nuxt-link :to="item.link">
              <span @click="closeMenu">{{ item.name }}</span>
              <img
                v-if="item.icon"
                :src="item.icon"
                :alt="item.name"
                class="bearle__menu__icon">
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </transition>
    <div
      :class="{isactive: $store.state.drawer}"
      class="bearle__burger">
      <div
        @click="$store.commit('menuToggle')">&nbsp;</div></div>
  </header>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [clickaway],
  methods: {
    closeMenu: function(e) {
      if (this.$vuetify.breakpoint.mdAndDown) {
        this.$store.state.drawer = false
      }
    },
    clickAway: function(e) {
      this.$store.state.drawer = false
    }
  }
}
</script>
