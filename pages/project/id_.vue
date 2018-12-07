<template>
  <div class="bearle__project--is-open">
    <div
      class="bearle__project__close"
      @click="back">Close</div>
    <aside>
      <div class="bearle__project__previews">
        <ul>
          <li
            v-for="(item,i) in items"
            :key="i">
            <div
              @click="$vuetify.goTo('#el'+i, { offset: -150 })">
              <img
                :src="item.src"
                alt="">
            </div>
          </li>
        </ul>
      </div>
      <div class="bearle__project__title">Block Adoption Fund</div>
      <h1>H1 title</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h2>h2 title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h3>h3 title</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </aside>
    <v-container class="bearle__project__gallery">
      <no-ssr>
        <siema
          ref="siema"
          :options="options">
          <img
            v-for="(item,i) in items"
            :key="i"
            :id="'el'+i"
            :src="item.src"
            alt="">
        </siema>
      </no-ssr>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue'
import Siema from 'vue2-siema'

Vue.use(Siema)

export default {
  data() {
    return {
      mobileFeedBack: false,
      items: [
        { src: '/images/upload/project/1_big.jpg' },
        { src: '/images/upload/project/2_big.jpg' },
        { src: '/images/upload/project/3_big.jpg' },
        { src: '/images/upload/project/4_big.jpg' }
      ],
      options: {
        draggable: true,
        duration: 500
      }
    }
  },
  mounted: function() {
    // Horizontal slider only on mobile devices
    setTimeout(() => {
      this.$refs.siema.destroy(true)
      if (this.$vuetify.breakpoint.smAndDown) {
        this.$refs.siema.init()
      }
    }, 1)
  },
  methods: {
    back() {
      // Close the product
      window.history.back()
    }
  }
}
</script>

<style lang="scss">
.bearle__project--is-open {
  height: 100%;
  background: #1f1f1f;
  .bearle__project__close {
    font-family: Futura-Bold;
    font-size: 14px;
    letter-spacing: 2.92px;
    position: absolute;
    top: 39px;
    right: 25px;
    padding-right: 21px;
    color: #fff;
    cursor: pointer;
    z-index: 70;
    &:before,
    &:after {
      content: '';
      background-color: #fff;
      display: block;
      height: 2px;
      right: 0;
      top: 10px;
      position: absolute;
      width: 19px;
    }
    &:before {
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
    }
  }
  aside {
    position: relative;
    top: 0;
    left: 0;
    z-index: 10;
    overflow-y: auto;
    overflow-x: hidden;
    height: 60%;
    padding: 95px 40px 0 40px;
    background: #595b61;
    font-family: FuturaBookC;
    color: #fff;
    z-index: 10;
    &:after,
    &:before {
      content: '';
      position: fixed;
      margin-left: -40px;
      width: 100%;
      z-index: 20;
    }
    &:before {
      top: 0;
      height: 20px;
      background-image: linear-gradient(
        -180deg,
        rgba(98, 100, 106, 1) 0%,
        rgba(146, 148, 154, 0) 100%
      );
    }
    &:after {
      bottom: 40%;
      height: 50px;
      background-image: linear-gradient(
        -180deg,
        rgba(146, 148, 154, 0) 0%,
        rgba(98, 100, 106, 1) 100%
      );
    }
    .bearle__project__title {
      font-family: FuturaBookC;
      font-size: 24px;
      letter-spacing: 4.88px;
      line-height: 34px;
      margin-bottom: 20px;
    }
    h1 {
      font-family: FuturaBookC;
      font-size: 24px;
      letter-spacing: 0;
      margin-bottom: 20px;
    }
    p {
      font-size: 12px;
      margin-bottom: 20px;
    }
  }
  .bearle__project__gallery {
    position: fixed;
    bottom: 0;
    z-index: 20;
    height: 40%;
    min-height: 200px;
    padding: 29px 20px;
    background: #1f1f1f;
    & > div {
      height: 100%;
      & > div {
        height: 100%;
        & > div {
          height: 100%;
          text-align: center;
        }
      }
    }
    img {
      height: 100%;
      margin: 0 10px 0 0;
    }
  }
  .bearle__project__previews {
    display: none;
  }
}
@media only screen and (min-width: 768px) {
  .bearle__project--is-open {
    .bearle__project__close {
      top: 75px;
      right: 80px;
    }
    aside {
      padding: 145px 80px 0 80px;
      &:after,
      &:before {
        display: none;
      }
    }
  }
}
@media only screen and (min-width: 960px) {
  .bearle__project--is-open {
    .bearle__project__close {
      position: fixed;
      padding: 15px 67px 12px 20px;
      background: #1f1f1f;
      top: 45px;
      right: 40px;
      border-radius: 25px;
      font-family: FuturaBookC;
      font-size: 24px;
      letter-spacing: 5px;
      &:before,
      &:after {
        right: 20px;
        top: 25px;
        height: 4px;
        width: 36px;
      }
    }
    aside {
      position: fixed;
      height: 100%;
      padding: 50px 200px 50px 70px;
      max-width: 606px;
      background-image: linear-gradient(-180deg, #515359 0%, #46484e 100%);
      z-index: 50;
      .bearle__project__title {
        font-family: FuturaBookC;
        font-size: 48px;
        letter-spacing: 9.75px;
        line-height: 72px;
        margin-bottom: 70px;
      }
      h1 {
        font-size: 48px;
      }
      p {
        font-size: 16px;
        margin-bottom: 51px;
      }
    }
    .bearle__project__gallery {
      position: static;
      margin-left: 606px;
      height: auto;
      min-height: 100%;
      padding: 167px 116px 0 116px;
      img {
        display: block;
        margin-bottom: 51px;
      }
    }
    .bearle__project__previews {
      display: block;
      position: relative;
      width: 100%;
      ul {
        position: fixed;
        left: 481px;
        padding: 0;
        top: 208px;
        li {
          margin-bottom: 15px;
          width: 85px;
          height: 85px;
          border: 10px solid #575757;
          background: #313131;
          list-style: none;
          div {
            display: table-cell;
            height: 65px;
            width: 65px;
            vertical-align: middle;
            text-align: center;
            cursor: pointer;
            img {
              width: 100%;
              max-width: 51px;
              max-height: 49px;
              margin-top: 8px;
            }
          }
        }
      }
    }
  }
}
</style>
