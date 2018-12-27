<template>
  <div class="bearle__blog">
    <siema
      ref="siema"
      :options="options">
      <div
        v-touch="{
          up: () => swipe('Up'),
          down: () => swipe('Down'),
          threshold: 100
        }"
        v-for="(blog, i) in $store.state.blog"
        :key="i"
        class="bearle__blog__item">
        <nuxt-link
          :to="{ path:'/blog/' + blog.id }"
          event=""
          @mousedown.native.prevent="preventLinkMouseDown($event)"
          @click.native.prevent="preventLinkClick(blog.id, $event)">
          <div class="bearle__blog__item__img">
            <img
              v-if="blog.img"
              :src="blog.img"
              :alt="blog.title">
          </div>
          <div class="bearle__blog__item__text">
            <h1>{{ blog.title }}</h1>
            <div v-html="blog.text" />
            <div class="bearle__blog__item__date">{{ blog.date }}</div>
          </div>
        </nuxt-link>
        <div
          class="bearle__blog__next"
          @click="nextNews(i+2)">Next news <i class="material-icons">keyboard_arrow_up</i></div>
      </div>
    </siema>
    <div
      class="bearle__blog__nav">
      <i
        class="material-icons bearle__blog__nav__prev"
        @click="prev">keyboard_arrow_left</i>
      <i
        class="material-icons bearle__blog__nav__next"
        @click="next">keyboard_arrow_right</i>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Siema from 'vue2-siema'

Vue.use(Siema)

export default {
  data() {
    return {
      firstMouseX: 0,
      options: {
        draggable: true,
        duration: 500
      }
    }
  },
  mounted: function() {
    // Animation
    let currentBlogSlide = this.$store.state.currentBlogSlide + 1,
      BreakException = {},
      start = '.bearle__blog__item:nth-child(' + currentBlogSlide + ')'
    if (currentBlogSlide != 1) {
      this.$vuetify.goTo(start, { duration: 0 })
    }
    try {
      this.$el
        .querySelectorAll('.bearle__blog__item:not(:first-child)')
        .forEach(function(element, index) {
          if (index == currentBlogSlide - 1) throw BreakException
          element.classList.add('active')
        })
    } catch (e) {
      if (e !== BreakException) throw e
    }
    setTimeout(() => {
      //  The carousel only on desctop
      this.$refs.siema.destroy(true)
      if (this.$vuetify.breakpoint.mdAndUp) {
        this.$refs.siema.init()
      }
      if (this.$vuetify.breakpoint.smAndUp) {
        // On mobile devices should be effect of showing a little bit of the next slide
        setTimeout(() => {
          document.querySelector('.bearle__blog').style.width = '100%'
        }, 1)
      }
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
    nextNews(number) {
      // next slide (mobile)
      //this.$vuetify.goTo('.bearle__blog__item:nth-child(' + number + ')')
      this.swipe('Up')
    },
    preventLinkMouseDown(event) {
      // Helper to the method preventLinkClick
      this.firstMouseX = event.clientX
    },
    preventLinkClick(id, event) {
      // Disable links when slides are moving
      let lastMouseX = event.clientX
      let diffMouseX = this.firstMouseX - lastMouseX
      if (diffMouseX === 0) {
        // Save the number curent slide for comeback animation
        this.$store.state.currentBlogSlide =
          this.$el.querySelectorAll(
            '.bearle__blog__item:first-child, .bearle__blog__item.active'
          ).length - 1
        // Go to the blog's detail page
        this.$router.push({ path: '/blog/' + id })
      }
    },
    swipe(direction) {
      // Swiping blog on devices
      let el
      if (direction == 'Up') {
        let nodes = this.$el.querySelector(
          '.bearle__blog__item:not(:first-child):not(.active)'
        )
        el = nodes
        if (el != null) {
          el.classList.add('active')
        } else {
          // last post of blog
          return false
        }
      } else {
        let nodes = this.$el.querySelectorAll('.bearle__blog__item.active'),
          allNodes = this.$el.querySelectorAll(
            '.bearle__blog__item:not(:first-child)'
          )
        if (nodes.length == 0) {
          el = 0
        } else if (nodes.length == 1) {
          el = 0
          nodes[nodes.length - 1].classList.remove('active')
        } else {
          el = nodes[nodes.length - 2]
          el.classList.remove('active')
        }
      }
      this.$vuetify.goTo(el)
    }
  }
}
</script>

<style lang="scss">
.bearle__blog__item {
  margin-bottom: 33px;
  a {
    text-decoration: none;
    color: #2a2c31;
  }
  p {
    line-height: 19px;
  }
  .bearle__blog__item__text {
    padding: 20px 49px 0 31px;
  }
  .bearle__blog__item__date {
    opacity: 0.5;
    font-family: Futura-Medium;
    font-size: 16px;
  }
  .bearle__blog__item__img {
    height: 375px;
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
      top: -22%;
      width: 135%;
      right: -7%;
    }
  }
  .bearle__blog__next {
    position: relative;
    margin-top: 30px;
    font-family: FuturaBookC;
    font-size: 18px;
    letter-spacing: 3.75px;
    text-align: center;
    cursor: pointer;
    .material-icons {
      position: absolute;
      top: -2px;
    }
  }
  &:last-child .bearle__blog__next {
    visibility: hidden;
  }
}
.bearle__blog__nav {
  display: none;
}
@media only screen and (max-height: 550px) {
  .bearle__blog__item .bearle__blog__item__img {
    height: 180px;
  }
  .bearle__blog__item .bearle__blog__next {
    margin-top: 15px;
  }
}
@media only screen and (min-height: 551px) and (max-height: 600px) {
  .bearle__blog__item .bearle__blog__item__img {
    height: 270px;
  }
}
@media only screen and (min-width: 400px) and (max-width: 600px) {
  .bearle__blog__item .bearle__blog__item__img {
    height: 470px;
  }
}
@media only screen and (min-width: 601px) and (max-width: 959px) {
  .bearle__blog__item .bearle__blog__item__img {
    height: 670px;
  }
}
@media only screen and (min-width: 960px) {
  .bearle__blog {
    width: 96%;
    margin-top: 140px;
    & > div:first-child {
      position: relative;
      z-index: 10;
    }
  }
  .bearle__blog__nav {
    display: block;
    float: right;
    margin-right: 5%;
    margin-top: -81px !important;
    position: relative;
    z-index: 20;
    user-select: none;
    .material-icons {
      font-size: 48px;
      cursor: pointer;
      color: #26282d;
    }
  }
  .bearle__blog__item {
    position: relative;
    height: 531px;
    margin-right: 110px;
    text-align: right;
    p {
      line-height: 21px;
    }
    .bearle__blog__item__text {
      padding: 0 0 0 75%;
    }
    .bearle__blog__item__date {
      position: absolute;
      right: 0;
      bottom: 68px;
    }
    .bearle__blog__item__img {
      height: auto;
      width: 65%;
      position: absolute;
      left: 0;
      bottom: 0;
      img {
        position: static;
        width: auto;
      }
    }
    .bearle__blog__next {
      display: none;
    }
  }
}
@media only screen and (min-width: 1200px) {
  .bearle__blog__item .bearle__blog__item__img {
    width: auto;
  }
}
@media only screen and (min-width: 1801px) {
  .bearle__blog {
    margin-top: 168px;
    .bearle__blog__item {
      height: 670px;
    }
  }
}
</style>
