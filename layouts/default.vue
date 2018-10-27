<template>
  <v-app>
    <main-nav />

    <nuxt />

  </v-app>
</template>

<script>
import MainNav from '../components/MainNav.vue'
export default {
  components: {
    MainNav: MainNav
  }
}
</script>

<style lang="scss" src="../assets/style/bearle.scss">
</style>
