<template>
  <v-container
    :class="{ showed: $store.state.drawer, opened: isOpen }"
    fluid
    relative>
    <no-ssr>
      <siema
        ref="siema"
        :options="options"
        :class="{ stretched: $store.state.drawer, active: isOpen }"
        class="bearle__services">
        <v-container
          v-for="(row, i) in $store.state.services"
          :key="i"
          fluid
          grid-list-xl>
          <v-layout wrap>
            <template
              v-for="(item, index) in row">
              <v-flex
                :key="index"
                xs12
                md6>
                <div class="bearle__service">
                  <div class="bearle__service__title">{{ item.title }}</div>
                  <p>{{ item.desc }}</p>
                  <div class="bearle__service__price">from ${{ item.priceFrom }}</div>
                </div>
              </v-flex>
            </template>
          </v-layout>
        </v-container>
      </siema>
      <div
        :class="{ active: isOpen }"
        class="bearle__services__more"
        @click="more"><span><i class="material-icons">keyboard_arrow_down</i> more services</span></div>
      <div
        :class="{ active: isOpen }"
        class="bearle__services__nav">
        <i
          class="material-icons bearle__services__nav__prev"
          @click="prev">keyboard_arrow_left</i>
        <i
          class="material-icons bearle__services__nav__next"
          @click="next">keyboard_arrow_right</i>
      </div>
    </no-ssr>
  </v-container>
</template>

<script>
import Vue from 'vue'
import Siema from 'vue2-siema'

Vue.use(Siema)

export default {
  data() {
    return {
      isOpen: false,
      options: {
        draggable: true,
        duration: 500
      }
    }
  },
  methods: {
    more() {
      if (this.isOpen) {
        this.$refs.siema.goTo(0)
      } else {
        this.$refs.siema.next()
      }
      this.isOpen = !this.isOpen
    },
    prev() {
      this.$refs.siema.prev()
    },
    next() {
      this.$refs.siema.next()
    }
  }
}
</script>

<style lang="scss" scoped>
.bearle__service {
  box-shadow: 1px 1px 10px rgba(77, 77, 77, 0.1);
  padding: 20px 20px 80px 20px;
  color: #2a2c31;
  letter-spacing: 3.75px;
  height: 100%;
  min-height: 340px;
  max-width: 340px;
  position: relative;
  transition: all 0.5s;
  .bearle__service__title {
    margin-bottom: 15px;
    font-family: Futura-Bold;
    font-size: 36px;
    letter-spacing: 7.5px;
  }
  p {
    font-family: Futura-Medium;
    font-size: 18px;
  }
  .bearle__service__price {
    font-family: FuturaBookC;
    font-size: 36px;
    position: absolute;
    bottom: 30px;
  }
}
.bearle__services__more {
  position: absolute;
  right: 35px;
  top: 115px;
  cursor: pointer;
  font-family: FuturaBookC;
  font-size: 20px;
  color: #2a2c31;
  span {
    display: block;
    position: relative;
    background: #fff;
    transform: rotate(-90deg);
    transform-origin: right top;
    .material-icons {
      position: absolute;
      font-size: 20px;
      top: 2px;
      left: -27px;
      transition: all 1s;
    }
  }
  &.active span .material-icons {
    transform: rotate(180deg);
  }
}
.bearle__services__nav {
  position: absolute;
  top: 800px;
  right: 30%;
  opacity: 0;
  transition: all 0.7s;
  .material-icons {
    font-size: 48px;
    cursor: pointer;
  }
  &.active {
    opacity: 1;
  }
}
@media only screen and (min-width: 961px) {
  .container.fluid.relative {
    max-width: 820px;
  }
  .bearle__services {
    max-width: 756px;
    &.stretched {
      width: 756px;
    }
    &.active {
      max-width: 100%;
    }
  }
  .bearle__service {
    padding: 40px 50px;
    width: 340px;
  }
  .bearle__service__title {
    margin-bottom: 30px;
    font-size: 48px;
    letter-spacing: 10px;
  }
  .bearle__services__more {
    letter-spacing: 3.75px;
    font-size: 36px;
    top: 46px;
    right: 40px;
    transition: all 0.5s;
    transition-timing-function: ease;
    span .material-icons {
      top: 10px;
      left: -33px;
    }
    &.active {
      right: 100%;
      width: 240px;
    }
  }
}
@media only screen and (min-width: 1280px) {
  .container.fluid.relative {
    &.showed {
      max-width: 1100px;
      padding-left: 310px;
    }
    &.opened {
      max-width: 100%;
    }
  }
}
@media only screen and (min-width: 601px) and (max-width: 960px) {
  .bearle__service {
    padding: 40px 50px;
    width: 340px;
  }
  .bearle__services__more {
    top: 46px;
    right: 33%;
  }
}
@media only screen and (max-width: 600px) {
  .bearle__services {
    max-width: 96%;
    &.active {
      .bearle__service {
        box-shadow: none;
        padding: 10px;
        height: auto;
        min-height: auto;
        p {
          display: none;
        }
        .bearle__service__price {
          position: static;
        }
      }
    }
  }
  .bearle__services__nav {
    top: auto;
    right: 40%;
  }
}
</style>
