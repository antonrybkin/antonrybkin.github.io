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
  asyncData(context) {
    return new Promise((resolve, reject) => {
      let blog = context.store.state.blog.find(
        b => b.id == context.route.params.id
      )
      resolve({ blog })
    })
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
    height: 504px;
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
      height: 100%;
      right: -9%;
    }
  }
}
.bearle__blog__close {
  position: absolute;
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
