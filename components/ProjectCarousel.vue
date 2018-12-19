<template>
  <div class="bearle__project">
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
      class="bearle__project__link"
      @click="ourProductsToggle">Our Products <i class="material-icons">keyboard_arrow_down</i></div>
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
      options: {
        draggable: true,
        duration: 500
      }
    }
  },
  mounted: function() {
    setTimeout(() => {
      // For correct using multiple carousels
      this.$refs.siema.destroy(true)
      let slidesPerPage = 3
      if (this.$vuetify.breakpoint.xs) {
        slidesPerPage = 1
      } else if (this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.md) {
        slidesPerPage = 2
      }
      this.$refs.siema.options.perPage = slidesPerPage
      this.$refs.siema.init()
      // On mobile devices should be effect of showing a little bit of the next slide
      let siemaWidth = this.$vuetify.breakpoint.smAndDown ? '100%' : '85%'
      setTimeout(() => {
        document
          .querySelectorAll('.bearle__project')
          .forEach(function(element) {
            element.style.width = siemaWidth
          })
        this.setWrapperStyles()
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
    ourProductsToggle() {
      // on mobile devices products should be showen on the same page with project
      if (this.$vuetify.breakpoint.mdAndDown) {
        this.$vuetify.goTo('.bearle__our-products')
      } else {
        this.$store.state.showProducts = true
      }
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
      if (this.$vuetify.breakpoint.mdAndUp) {
        let el = this.$el.querySelector('.bearle__project > div').style
        el.overflow = 'visible'
      }
    }
  }
}
</script>

<style lang="scss">
.bearle__project {
  width: 315px;
  & > div:first-child {
    min-height: 450px;
    z-index: 10;
  }
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
.bearle__project__nav {
  display: none;
}
.bearle__project__link {
  position: relative;
  font-family: FuturaBookC;
  font-size: 18px;
  letter-spacing: 3.75px;
  color: #2a2c31;
  cursor: pointer;
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
@media only screen and (min-width: 400px) and (max-width: 600px) {
  .bearle__project {
    width: 345px;
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
    margin-right: 50px;
    margin-top: -10px !important;
    z-index: 20;
    .material-icons {
      font-size: 48px;
      cursor: pointer;
      color: #26282d;
    }
  }
  .showed_pro .bearle__project__nav {
    margin-right: 310px;
  }
  .bearle__project__link {
    font-size: 24px;
    letter-spacing: 5px;
    z-index: 10;
    display: inline-block;
    &:hover {
      text-decoration: underline;
    }
    .material-icons {
      display: none;
    }
  }
}
</style>
