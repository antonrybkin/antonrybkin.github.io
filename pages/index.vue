<template>
  <v-layout
    column
    justify-center
    align-center
    class="main">
    <no-ssr>
      <nuxt-link
        v-if="$vuetify.breakpoint.smAndUp"
        to="/"
        class="main--contacts">Contacts</nuxt-link>
    </no-ssr>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center main--logo">
        <img
          src="images/Logo.png"
          alt="Bearle IT&ART">
      </div>
    </v-flex>
    <div class="bearle__footer__calculator">
      <nuxt-link to="/"><img
        src="images/calculator-grey.svg"
        alt="Project's Calculator"></nuxt-link>
    </div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      sss: this.$vuetify.breakpoint.smAndUp
    }
  },
  computed: {
    imageSrc: function() {
      let sss = this.$vuetify.breakpoint.xs ? 'false' : 'true'
      return `images/Logo-` + sss + `.png`
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-image: linear-gradient(
    -157deg,
    #32353d 0%,
    #212226 41%,
    #282a2f 97%
  );
  @media only screen and (min-width: 600px) {
    background-image: linear-gradient(
      -157deg,
      #32353d 0%,
      #212226 41%,
      #212327 44%,
      #282a2f 97%
    );
    position: fixed;
    width: 100%;
    height: 100%;
    .flex {
      max-height: 291px;
    }
  }
}
.main--contacts {
  position: absolute;
  top: 73px;
  right: 52px;
  opacity: 0.5;
  font-size: 36px;
  color: #ffffff;
  letter-spacing: 5px;
  text-align: left;
  text-decoration: none;
}
.main--logo {
  position: relative;
  &:before {
    content: '<welcome to>';
    position: absolute;
    margin: -50px 0 0 15px;
    opacity: 0.2;
    font-size: 24px;
    @media only screen and (min-width: 1025px) {
      font-size: 36px;
      margin: -80px 0 0 -270px;
    }
  }
  img {
    @media only screen and (max-width: 600px) {
      width: 260px;
    }
  }
}
.bearle__footer__calculator {
  position: absolute;
  bottom: 12px;
  right: 22px;
  img {
    width: 28px;
    height: 48px;
  }
}
</style>
∏
