<template>
  <div class="bearle__blog--is-open">
    <div
      class="bearle__blog__close"
      @click="back">Close</div>
    <div class="bearle__blog__detail">
      <div class="bearle__blog__detail__img">
        <img
          v-if="blog.img"
          :src="blog.img"
          :alt="blog.title">
      </div>
      <div class="bearle__blog__detail__text">
        <h1>{{ blog.title }}</h1>
        <div v-html="blog.text" />
        <div class="bearle__blog__detail__date">{{ blog.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgHeight: 0,
      imgWidth: 0
    }
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      let blog = context.store.state.blog.find(
        b => b.id == context.route.params.id
      )
      resolve({ blog })
    })
  },
  mounted: function() {
    setTimeout(() => {
      if (this.$vuetify.breakpoint.xs) {
        this.$store.state.outMenu = true
        let el = this.$el.querySelector('.bearle__blog__detail__img')
        el.classList.add('active')
        setTimeout(() => {
          let elImg = el.querySelector('img')
          elImg.style.height = '100%'
          document.addEventListener('scroll', this.onScroll)
        }, 400)
      }
    }, 1)
  },
  methods: {
    back() {
      // Close the product
      if (this.$vuetify.breakpoint.xs) {
        this.$store.state.outMenu = false
        let el = this.$el.querySelector('.bearle__blog__detail__img.active'),
          elImg = el.querySelector('img')
        this.imgHeight != 0
          ? (elImg.style.height = this.imgHeight)
          : (elImg.style.height = 'auto')
        el.classList.remove('active')
        document.removeEventListener('scroll', this.onScroll)
        this.imgHeight = 0
      }
      setTimeout(() => {
        window.history.back()
      }, 420)
    },
    onScroll(e) {
      if (this.imgHeight == 0) {
        let el = this.$el.querySelector('.bearle__blog__detail__img img')
        this.imgHeight = el.height
        el.style.width = 'auto'
        el.style.height = '100%'
      } else {
        let scrolled = this.imgHeight - window.pageYOffset / 2
        this.$el.querySelector('.bearle__blog__detail__img').style.height =
          scrolled + 'px'
      }
    }
  }
}
</script>

<style lang="scss">
.bearle__blog__detail {
  padding-bottom: 33px;
  a {
    text-decoration: none;
    color: #2a2c31;
  }
  p {
    line-height: 19px;
  }
  .bearle__blog__detail__text {
    padding: 20px 49px 0 31px;
  }
  .bearle__blog__detail__date {
    opacity: 0.5;
    font-family: Futura-Medium;
    font-size: 16px;
  }
  .bearle__blog__detail__img {
    height: 375px;
    overflow: hidden;
    position: relative;
    transition: all 0.4s;
    &.active {
      height: 504px;
      img {
        right: -9%;
        top: 0;
      }
    }
    img {
      position: absolute;
      top: -22%;
      width: 135%;
      min-width: 100%;
      right: -7%;
      transition: all 0.4s;
    }
  }
}
.bearle__blog__close {
  position: fixed;
  top: 39px;
  right: 25px;
  padding-right: 22px;
  font-family: Futura-Bold;
  font-size: 14px;
  color: #fff;
  letter-spacing: 2.92px;
  cursor: pointer;
  text-decoration: none;
  z-index: 50;
  &:before,
  &:after {
    content: '';
    background-color: #fff;
    display: block;
    height: 2px;
    right: 0;
    top: 9px;
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
@media only screen and (max-height: 550px) {
  .bearle__blog__detail .bearle__blog__detail__img {
    height: 180px;
    &.active {
      height: 436px;
    }
  }
}
@media only screen and (min-height: 551px) and (max-height: 600px) {
  .bearle__blog__detail .bearle__blog__detail__img {
    height: 270px;
    &.active {
      height: 436px;
    }
  }
}
@media only screen and (min-width: 400px) and (max-width: 600px) {
  .bearle__blog__detail .bearle__blog__detail__img {
    height: 470px;
    &.active {
      height: 631px;
    }
  }
}
@media only screen and (min-width: 601px) and (max-width: 959px) {
  .bearle__blog__detail .bearle__blog__detail__img {
    height: 670px;
  }
}
@media only screen and (min-width: 960px) {
  .bearle__blog--is-open {
    width: 96%;
    height: 100%;
  }
  .bearle__blog__detail {
    position: relative;
    height: 100%;
    min-height: 730px;
    margin-right: 10px;
    padding-bottom: 0;
    text-align: right;
    p {
      line-height: 21px;
    }
    .bearle__blog__detail__text {
      padding: 168px 0 0 75%;
    }
    .bearle__blog__detail__date {
      position: absolute;
      right: 0;
      bottom: 68px;
    }
    .bearle__blog__detail__img {
      float: left;
      height: 100%;
      width: 670px;
      left: 0;
      bottom: 0;
      img {
        top: 0;
        width: auto;
        height: 100%;
      }
    }
  }
  .bearle__blog__close {
    &:before,
    &:after {
      background-color: #595b61;
    }
  }
}
@media only screen and (min-width: 1200px) {
  .bearle__blog__detail {
    margin-right: 110px;
  }
}
</style>
