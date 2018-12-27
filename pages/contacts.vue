<template>
  <div class="bearle__contacts">
    <router-link
      to="/"
      class="bearle__contacts__close">Contacts</router-link>
    <router-link
      to="/"
      class="bearle__contacts__close--mobile">Close</router-link>
    <address
      :class="{ active: mobileFeedBack }">
      <h2>Address</h2>
      <p>1-ya Brestskaya 62</p>
      <h2>Phone</h2>
      <p>+7 (916)108-79-57<br> Begel Valeriy</p>
      <h2>E-mail</h2>
      <p>Begel.V@bearle.ru</p>
      <v-btn
        color="secondary"
        class="bearle__contacts__feedback-link"
        @click="mobileFeedBack = true">contact us <i class="material-icons">keyboard_arrow_right</i></v-btn>
    </address>
    <v-container
      :class="{ active: mobileFeedBack }"
      grid-list-lg
      class="bearle__contacts__feedback">
      <form action="/contacts">
        <v-btn
          color="secondary"
          class="bearle__contacts__adress-link"
          @click="mobileFeedBack = false"><i class="material-icons">keyboard_arrow_left</i>see contacts</v-btn>
        <h2>Contact us</h2>
        <v-layout wrap>
          <v-flex
            xs12
            md6>
            <v-text-field
              label="Name"
              placeholder="Grigory Lesoryb" />
          </v-flex>
          <v-flex
            xs12
            md6>
            <v-text-field
              label="E-mail"
              placeholder="example@example.com" />
          </v-flex>
          <v-flex xs12>
            <v-textarea
              name="input-7-4"
              label="Your question"
              placeholder="write your question here"
              no-resize
              counter="300"/>
          </v-flex>
          <v-flex xs12>
            <v-btn
              color="secondary"
              @click="e6 = 1">send</v-btn>
          </v-flex>
        </v-layout>
      </form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileFeedBack: false
    }
  }
}
</script>

<style lang="scss">
.bearle__contacts {
  max-width: 100%;
  overflow: hidden;
  .bearle__contacts__close {
    position: absolute;
    top: 73px;
    right: 70px;
    padding-right: 39px;
    font-family: Futura-Medium;
    font-size: 36px;
    color: #fff;
    letter-spacing: 5px;
    cursor: pointer;
    text-decoration: none;
    &:before,
    &:after {
      content: '';
      background-color: #fff;
      display: block;
      height: 2px;
      right: 0;
      top: 27px;
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
  address {
    padding: 135px 25px 1px 25px;
    text-align: right;
    font-family: Futura-Medium;
    font-style: normal;
    transition: all 0.5s;
    position: absolute;
    right: 0;
    z-index: 10;
    &.active {
      right: 200%;
    }
    h2 {
      padding-top: 15px;
    }
    p {
      font-size: 24px;
    }
  }
  .bearle__contacts__close--mobile {
    position: absolute;
    top: 39px;
    right: 25px;
    z-index: 20;
    padding-right: 19px;
    font-family: Futura-Bold;
    font-size: 14px;
    color: #000;
    letter-spacing: 2.92px;
    text-decoration: none;
    &:before,
    &:after {
      content: '';
      background-color: #000;
      display: block;
      height: 2px;
      right: 0;
      top: 10px;
      position: absolute;
      width: 18px;
    }
    &:before {
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
    }
  }
}
.bearle__contacts__feedback {
  position: absolute;
  right: -100%;
  z-index: 10;
  margin: 0;
  height: 100%;
  letter-spacing: 0;
  transition: all 0.5s;
  padding: 135px 25px 15px 25px;
  &.active {
    right: 0;
  }
  textarea {
    border: 1px solid #595b61;
    height: 100px;
  }
  textarea,
  input {
    font-family: Futura-Medium;
    font-size: 18px;
    color: #000000;
    padding: 10px 20px;
    &::-webkit-input-placeholder,
    &:-moz-placeholder,
    &::-moz-placeholder,
    &:-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.1);
    }
  }
  button {
    float: right;
  }
  .v-input__control {
    margin-top: 20px;
  }
  .v-label.v-label--active.theme--light {
    position: relative;
    margin-top: -43px;
    font-family: Futura-Medium;
    font-size: 24px;
    color: #000000;
  }
}
.bearle__contacts__feedback-link {
  margin-top: 79px;
  margin-right: 0;
  .material-icons {
    vertical-align: sub;
  }
}
button.bearle__contacts__adress-link {
  float: none;
  margin-bottom: 10px;
  margin-top: -10px;
  margin-left: -3px;
  .material-icons {
    vertical-align: sub;
  }
}
@media only screen and (min-width: 601px) {
  .bearle__contacts {
    background: url('/images/map.jpg');
    background-size: cover;
    height: 100%;
    padding: 202px 70px 60px 70px;
    /*background-image: linear-gradient(
      -90deg,
      rgba(49, 51, 58, 0.3) 0%,
      rgba(42, 44, 49, 0.7) 100%
    ); */
    address {
      position: static;
      float: right;
      max-width: 454px;
      height: 100%;
      background: #fff;
      padding: 135px 40px 40px 40px;
    }
  }
  .bearle__contacts__feedback {
    position: static;
    background: #fff;
    width: 55%;
    max-width: 685px;
    padding: 30px 30px 15px 30px;
    textarea {
      height: 254px;
    }
  }
  .bearle__contacts__feedback-link,
  .bearle__contacts__adress-link,
  .bearle__contacts__close--mobile {
    display: none;
  }
}
@media only screen and (min-width: 1281px) {
  .bearle__contacts {
    address {
      padding: 101px 123px;
    }
  }
}
@media only screen and (min-width: 1901px) {
  .bearle__contacts__feedback {
    max-width: 70%;
  }
}
</style>
