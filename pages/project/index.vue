<template>
  <v-container
    :class="{ showed_pro: $store.state.drawer}"
    class="bearle__project--wrapper"
    fluid
    relative>
    <v-tabs
      v-model="active">
      <v-tab
        v-for="n in 3"
        :key="n">#Lorem</v-tab>
      <v-tab-item
        lazy
        transition="fade-transition"
        reverse-transition="fade-transition">
        <project-carousel/>
      </v-tab-item>
      <v-tab-item
        lazy
        transition="fade-transition"
        reverse-transition="fade-transition">
        <project-carousel :from="1"/>
      </v-tab-item>
      <v-tab-item
        lazy
        transition="fade-transition"
        reverse-transition="fade-transition">
        <project-carousel
          :from="2"
          :to="6"/>
      </v-tab-item>
    </v-tabs>
    <our-products v-if="$store.state.showProductsAndProject"/>
  </v-container>
</template>

<script>
import ProjectCarousel from '../../components/ProjectCarousel.vue'
import OurProducts from '../../components/OurProducts.vue'

export default {
  components: {
    ProjectCarousel,
    OurProducts
  },
  data() {
    return {
      active: null
    }
  },
  mounted: function() {
    if (this.$vuetify.breakpoint.mdAndDown) {
      this.$store.state.showProductsAndProject = true
    }
  }
}
</script>

<style lang="scss">
.application--wrap > .container.fluid.bearle__project--wrapper {
  padding-right: 0;
}
.v-tabs {
  margin-top: -73px;
}
.v-tabs__wrapper {
  overflow: visible;
  overflow-y: auto;
  contain: none;
}
.v-window__container {
  margin-left: 19px;
}
.v-tabs__container {
  margin-left: 95px;
  margin-bottom: 51px;
}
.v-tabs__item {
  margin-right: 15px;
  padding: 5px 15px;
  height: auto;
  border-radius: 10px;
  font-family: Futura-Medium;
  font-size: 14px;
  color: #000000;
  letter-spacing: 5px;
  text-transform: none;
}
.v-tabs__item--active {
  background: black;
  color: white;
}
.v-tabs__slider.accent {
  display: none;
}
@media only screen and (max-width: 959px) {
  .v-tabs__bar {
    ::-webkit-scrollbar {
      width: 0px; /* remove scrollbar space */
      background: transparent; /* optional: just make scrollbar invisible */
    }
  }
}
@media only screen and (min-width: 960px) {
  .container.fluid.relative {
    &.showed_pro {
      margin-left: 461px;
    }
  }
  .v-tabs {
    margin-top: 10px;
  }
  .v-tabs__container {
    margin-left: 0;
  }
  .v-window__container {
    margin-left: 9px;
  }
  .v-tabs__item {
    margin-right: 25px;
  }
}
</style>
