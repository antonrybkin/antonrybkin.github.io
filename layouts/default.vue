<template>
  <v-app>
    <main-nav />

    <nuxt />

    <landscape-block />

  </v-app>
</template>

<script>
import MainNav from '../components/MainNav.vue'
import LandscapeBlock from '../components/LandscapeBlock.vue'
export default {
  components: {
    MainNav: MainNav,
    LandscapeBlock: LandscapeBlock
  }
}
</script>

<style lang="scss" src="../assets/style/bearle.scss">
</style>
