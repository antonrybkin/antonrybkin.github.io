<template>
  <div class="bearle__project">
    <no-ssr>
      <siema
        ref="siema"
        :options="options">
        <template v-for="(project, i) in $store.state.project.slice(from, toTheEnd)">
          <nuxt-link
            :key="i"
            to="/project/id_"
            class="bearle__project__item">
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
    </no-ssr>
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
      :class="{ active: $store.state.showProductsAndProject }"
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
      options: {
        draggable: true,
        perPage: 3,
        duration: 500
      }
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.$refs.siema.destroy(true)
      if (this.$vuetify.breakpoint.smAndDown) {
        this.$refs.siema.options.perPage = 1
      }
      this.$refs.siema.init()
    }, 1)
  },
  methods: {
    prev() {
      this.$refs.siema.prev()
    },
    next() {
      this.$refs.siema.next()
    },
    ourProductsToggle() {
      this.$vuetify.breakpoint.smAndDown
        ? (this.$store.state.showProductsAndProject = !this.$store.state
            .showProductsAndProject)
        : (this.$store.state.showProducts = true)
    }
  }
}
</script>

<style lang="scss">
.bearle__project {
  width: 100%;
}
.bearle__project > div {
  max-height: 450px;
  & > div > div {
    width: 305px !important;
  }
}
.bearle__project__item {
  margin-right: 30px;
  margin-bottom: 129px;
  display: inline-block;
  text-decoration: none;
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
@media only screen and (min-width: 960px) {
  .bearle__project > div {
    margin-top: 0;
    max-height: 675px;
    & > div > div {
      width: 350px !important;
      &:nth-child(2n) {
        margin-top: 136px;
      }
    }
  }
  .bearle__project__item {
    margin-right: 50px;
    margin-bottom: 129px;
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
    margin-right: 200px;
    margin-top: -10px !important;
    z-index: 20;
    .material-icons {
      font-size: 48px;
      cursor: pointer;
      color: #26282d;
    }
  }
  .bearle__project__link {
    font-size: 24px;
    letter-spacing: 5px;
    z-index: 10;
    display: inline-block;
    .material-icons {
      display: none;
    }
  }
  .showed_pro .bearle__project__nav {
    margin-right: 480px;
  }
}
</style>
