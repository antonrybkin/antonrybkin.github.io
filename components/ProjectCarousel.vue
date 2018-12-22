<template>
  <div
    class="bearle__project">
    <siema
      ref="siema"
      :options="options">
      <template v-for="(project, i) in $store.state.project.slice(from, toTheEnd)">
        <nuxt-link
          :key="i"
          to="/project/id_"
          event=""
          class="bearle__project__item"
          @mousedown.native.prevent="preventLinkMouseDown($event)"
          @click.native.prevent="preventLinkClick('/project/id_', $event)">
          <div class="bearle__project__item__sub-title">{{ project.subTitle }}</div>
          <img
            v-if="project.img"
            :src="project.img"
            :alt="project.title"
            class="bearle__project__item__img">
          <div class="bearle__project__item__title">{{ project.title }}</div>
        </nuxt-link>
      </template>
    </siema>
    <div
      class="bearle__project__nav">
      <i
        class="material-icons bearle__project__nav__prev"
        @click="prev">keyboard_arrow_left</i>
      <i
        class="material-icons bearle__project__nav__next"
        @click="next">keyboard_arrow_right</i>
    </div>
    <div
      :class="{ active: activeProducts}"
      class="bearle__project__link"
      @click="ourProductsToggle">Our Products <i class="material-icons">keyboard_arrow_down</i></div>
    <div class="bearle__project__subtitle">Project</div>
  </div>
</template>

<script>
import Vue from 'vue'
import Siema from 'vue2-siema'

Vue.use(Siema)

export default {
  props: {
    from: {
      type: Number,
      default: 0
    },
    to: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      toTheEnd: this.to > 0 ? this.to + 1 : this.$store.state.project.length,
      firstMouseX: 0,
      activeProducts: false,
      options: {
        draggable: true,
        duration: 500
      }
    }
  },
  computed: {
    shcherbackov() {
      return this.$store.state.drawer
    }
  },
  watch: {
    shcherbackov(isMenuOpened) {
      if (this.$vuetify.breakpoint.mdAndUp) {
        if (isMenuOpened) {
          this.add()
        } else {
          this.$refs.siema.remove(
            this.$store.state.project.slice(this.from, this.toTheEnd).length
          )
        }
      }
    }
  },
  mounted: function() {
    setTimeout(() => {
      // For correct using multiple carousels
      this.$refs.siema.destroy(true)
      let slidesPerPage = 3
      if (this.$vuetify.breakpoint.xs) {
        slidesPerPage = 1.1
      } else if (this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.md) {
        slidesPerPage = 2
      }
      this.$refs.siema.options.perPage = slidesPerPage
      this.$refs.siema.init()
      setTimeout(() => {
        this.setWrapperStyles()
        if (this.$store.state.drawer) {
          this.add()
        }
      }, 1)
    }, 1)
  },
  methods: {
    prev() {
      // previous slide
      this.$refs.siema.prev()
    },
    next() {
      // next slide
      this.$refs.siema.next()
    },
    add() {
      const newElement = document.createElement('div')
      newElement.classList.add('slide')
      this.$refs.siema.append(newElement)
    },
    ourProductsToggle() {
      // on mobile devices products should be showen on the same page with project
      this.activeProducts
        ? this.$vuetify.goTo(0)
        : this.$vuetify.goTo('.bearle__our-products')
      this.activeProducts = !this.activeProducts
    },
    preventLinkMouseDown(event) {
      // Helper to the method preventLinkClick
      this.firstMouseX = event.clientX
    },
    preventLinkClick(route, event) {
      // Disable links when slides are moving
      let lastMouseX = event.clientX
      let diffMouseX = this.firstMouseX - lastMouseX
      if (diffMouseX === 0) this.$router.push(route)
    },
    setWrapperStyles() {
      let el = this.$el.querySelector('.bearle__project > div').style
      el.overflow = 'visible'
    }
  }
}
</script>

<style lang="scss">
.bearle__project > div:first-child {
  min-height: 450px;
  z-index: 10;
}
.bearle__project__item {
  margin-right: 30px;
  display: inline-block;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  .bearle__project__item__sub-title {
    opacity: 0.5;
    font-family: Futura-Medium;
    font-size: 14px;
    color: #000000;
    letter-spacing: 5px;
  }
  .bearle__project__item__title {
    font-family: FuturaBookC;
    color: #2a2c31;
    font-size: 20px;
    letter-spacing: 4.17px;
    line-height: 30px;
  }
  .bearle__project__item__img {
    width: 275px;
    margin: 15px 0;
  }
}
.bearle__project__nav,
.bearle__project__subtitle {
  display: none;
}
.bearle__project__link,
.bearle__project__subtitle {
  position: relative;
  font-family: FuturaBookC;
  font-size: 18px;
  letter-spacing: 3.75px;
  color: #2a2c31;
  text-align: center;
  .material-icons {
    position: absolute;
    top: -2px;
    transition: all 0.5s;
  }
  &.active .material-icons {
    transform: rotate(180deg);
  }
}
@media only screen and (max-width: 330px) {
  .bearle__project {
    & > div:first-child {
      min-height: 390px;
      z-index: 10;
    }
    .bearle__project__item .bearle__project__item__img {
      width: 240px;
    }
  }
}
@media only screen and (min-width: 400px) and (max-width: 600px) {
  .bearle__project {
    .bearle__project__item .bearle__project__item__img {
      width: 315px;
    }
  }
}
@media only screen and (min-width: 601px) {
  .bearle__project {
    width: 90%;
  }
}
@media only screen and (min-width: 961px) {
  .bearle__project {
    user-select: none;
    & > div:first-child {
      margin-top: 0;
      min-height: 570px;
      & > div > div {
        &:nth-child(2n) {
          margin-top: 68px;
        }
      }
    }
  }
  .bearle__project__item {
    margin-right: 50px;
    .bearle__project__item__title {
      font-size: 36px;
      letter-spacing: 7.5px;
      line-height: 50px;
    }
    .bearle__project__item__img {
      width: 300px;
    }
  }
  .bearle__project__nav {
    display: block;
    float: right;
    margin-right: 100px;
    margin-top: -10px !important;
    z-index: 20;
    .material-icons {
      font-size: 48px;
      cursor: pointer;
      color: #26282d;
    }
  }
  .showed_pro .bearle__project__nav {
    margin-right: 360px;
  }
  .bearle__project__link {
    display: none;
  }
  .bearle__project__subtitle {
    display: block;
    font-size: 24px;
    letter-spacing: 5px;
    z-index: 10;
    display: inline-block;
    .material-icons {
      display: none;
    }
  }
}
</style>
