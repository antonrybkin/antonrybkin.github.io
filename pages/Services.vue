<template>
  <v-container>
    <no-ssr>
      <siema
        ref="siema"
        :options="options"
        class="bearle__services">
        <v-container
          fluid
          grid-list-xl>
          <v-layout wrap>
            <v-flex
              xs12
              md6>
              <div class="bearle__service">
                <div class="bearle__service__title">Site</div>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <div class="bearle__service__price">from 800 $</div>
              </div>
            </v-flex>
            <v-flex
              xs12
              md6>
              <div class="bearle__service">
                <div class="bearle__service__title">Mobile App</div>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <div class="bearle__service__price">from 1500 $</div>
              </div>
            </v-flex>
            <v-flex
              xs12
              md6>
              <div class="bearle__service">
                <div class="bearle__service__title">Block chain</div>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <div class="bearle__service__price">from 17000 $</div>
              </div>
            </v-flex>
            <v-flex
              xs12
              md6>
              <div class="bearle__service">
                <div class="bearle__service__title">Replace wool</div>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <div class="bearle__service__price">from 100 $</div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>

        <v-container
          fluid
          grid-list-xl>
          <v-layout wrap>
            <v-flex
              xs12
              sm6>
              <div class="bearle__service">
                <div class="bearle__service__title">Site</div>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <div class="bearle__service__price">from 800 $</div>
              </div>
            </v-flex>
            <v-flex
              xs12
              sm6>
              <div class="bearle__service">
                <div class="bearle__service__title">Mobile App</div>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <div class="bearle__service__price">from 800 $</div>
              </div>
            </v-flex>
            <v-flex
              xs12
              sm6>
              <div class="bearle__service">
                <div class="bearle__service__title">HL System</div>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <div class="bearle__service__price">from 17000 $</div>
              </div>
            </v-flex>
            <v-flex
              xs12
              sm6>
              <div class="bearle__service">
                <div class="bearle__service__title">Automation</div>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <div class="bearle__service__price">from 800 $</div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </siema>
      <div
        class="bearle__services__more"
        @click="next"><span><i class="material-icons">keyboard_arrow_down</i> more services</span></div>
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
      options: {
        draggable: true
      }
    }
  },
  methods: {
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
  padding: 20px;
  color: #2a2c31;
  letter-spacing: 3.75px;
  height: 100%;
  .bearle__service__title {
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
  }
}
.bearle__services__more {
  position: absolute;
  right: 30px;
  top: 115px;
  cursor: pointer;
  font-family: FuturaBookC;
  font-size: 20px;
  color: #2a2c31;
  span {
    display: block;
    position: relative;
    transform: rotate(-90deg);
    transform-origin: right top;
    .material-icons {
      position: absolute;
      font-size: 20px;
      top: 2px;
      left: -27px;
    }
  }
}
@media only screen and (min-width: 769px) {
  .bearle__service {
    padding: 40px 50px;
  }
  .bearle__service__title {
    font-size: 48px;
    letter-spacing: 10px;
  }
  .bearle__services__more {
    letter-spacing: 3.75px;
    font-size: 36px;
    right: 20px;
    top: 46px;
    span .material-icons {
      top: 10px;
      left: -33px;
    }
  }
}
</style>
