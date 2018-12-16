<template>
  <v-scroll-y-transition>
    <div class="bearle__our-products">
      <siema
        ref="ourProducts"
        :options="options">
        <template v-for="(pruduct, i) in $store.state.ourProducts">
          <div
            :key="i"
            class="bearle__our-products__item">
            <img
              v-if="pruduct.img"
              :src="pruduct.img"
              :alt="pruduct.title"
              class="bearle__our-products__item__img">
            <div class="bearle__our-products__item__title">{{ pruduct.title }}</div>
          </div>
        </template>
      </siema>
      <div
        class="bearle__our-products__nav">
        <i
          class="material-icons bearle__our-products__nav__prev"
          @click="prev">keyboard_arrow_left</i>
        <i
          class="material-icons bearle__our-products__nav__next"
          @click="next">keyboard_arrow_right</i>
      </div>
      <div
        class="bearle__our-products__link"
        @click="$store.state.showProducts = false">Project</div>
    </div>
  </v-scroll-y-transition>
</template>

<script>
import Vue from 'vue'
import Siema from 'vue2-siema'

Vue.use(Siema)

export default {
  data() {
    return {
      options: {
        draggable: true,
        duration: 500
      }
    }
  },
  mounted: function() {
    // To use the carousel on the same page with project carousel
    setTimeout(() => {
      this.$refs.ourProducts.destroy(true)
      let slidesPerPage = 2.5
      if (this.$vuetify.breakpoint.mdAndDown) {
        slidesPerPage = 1
      }
      this.$refs.ourProducts.options.perPage = slidesPerPage
      this.$refs.ourProducts.init()
      setTimeout(() => {
        if (this.$vuetify.breakpoint.smAndDown) {
          // On mobile devices should be effect of showing a little bit of the next slide
          document.querySelector('.bearle__our-products').style.width = '100%'
        }
        if (this.$vuetify.breakpoint.mdAndUp) {
          document.querySelector('.bearle__our-products > div').style.overflow =
            'visible'
        }
      }, 1)
    }, 1)
  },
  methods: {
    prev() {
      // previous slide
      this.$refs.ourProducts.prev()
    },
    next() {
      // next slide
      this.$refs.ourProducts.next()
    }
  }
}
</script>

<style lang="scss">
.bearle__our-products {
  margin-top: 30px;
  margin-left: 15px;
  width: 315px;
}
.bearle__our-products > div:first-child {
  min-height: 390px;
  & > div > div {
    min-width: 305px !important;
  }
}
.bearle__our-products__item {
  margin-right: 30px;
  display: inline-block;
  text-decoration: none;
  .bearle__our-products__item__sub-title {
    opacity: 0.5;
    font-family: Futura-Medium;
    font-size: 14px;
    color: #000000;
    letter-spacing: 5px;
  }
  .bearle__our-products__item__title {
    font-family: FuturaBookC;
    color: #2a2c31;
    font-size: 20px;
    letter-spacing: 4.17px;
    line-height: 30px;
  }
  .bearle__our-products__item__img {
    width: 275px;
    margin-bottom: 15px;
  }
}
.bearle__our-products__nav,
.bearle__our-products__link {
  display: none;
}
@media only screen and (min-width: 1264px) {
  .bearle__our-products {
    margin-top: 100px;
    width: 85%;
    user-select: none;
    > div:first-child {
      min-height: 570px;
      margin-top: 0;
      & > div > div {
        margin-top: 40px;
        &:nth-child(2n) {
          margin-top: 0;
        }
      }
    }
  }
  .bearle__our-products__item {
    margin-right: 50px;
    .bearle__our-products__item__title {
      font-size: 36px;
      letter-spacing: 7.5px;
      line-height: 50px;
    }
    .bearle__our-products__item__img {
      width: 382px;
      margin-bottom: 25px;
    }
  }
  .bearle__our-products__nav {
    display: block;
    float: right;
    margin-right: 50px;
    margin-top: -10px !important;
    .material-icons {
      font-size: 48px;
      cursor: pointer;
      color: #26282d;
    }
  }
  .showed_pro .bearle__our-products__nav {
    margin-right: 310px;
  }
  .bearle__our-products__link {
    display: inline-block;
    font-family: FuturaBookC;
    font-size: 24px;
    color: #2a2c31;
    letter-spacing: 5px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
