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
          src="images/logo.svg"
          alt="Bearle IT&ART">
      </div>
    </v-flex>
    <div class="bearle__footer__calculator">
      <nuxt-link to="calc"><img
        src="images/calculator-grey.svg"
        alt="Project's Calculator"></nuxt-link>
    </div>
  </v-layout>
</template>

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
    color: #ffffff;
    .flex {
      max-height: 291px;
    }
  }
}
.main--contacts {
  font-family: FuturaBookC;
  position: absolute;
  top: 73px;
  right: 52px;
  opacity: 0.5;
  font-size: 36px;
  color: #ffffff;
  letter-spacing: 5px;
  text-decoration: none;
}
.main--logo {
  position: relative;
  &:before {
    content: '<welcome to>';
    position: absolute;
    margin: -50px 0 0 0;
    opacity: 0.2;
    font-family: Futura-Medium;
    font-size: 24px;
    letter-spacing: 2px;
    color: #fff;
    @media only screen and (min-width: 1025px) {
      font-size: 36px;
      margin: -80px 0 0 -259px;
    }
  }
  &:after {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: linear-gradient(
      -180deg,
      rgba(44, 53, 69, 0) 0%,
      rgba(33, 38, 45, 0.1) 82%,
      rgba(32, 34, 38, 0.4) 98%
    );
  }
  img {
    width: 228px;
    @media only screen and (min-width: 601px) {
      width: 406px;
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
