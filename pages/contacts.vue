<template>
  <div class="bearle__contacts">
    <div
      class="bearle__contacts__close"
      @click="back">Contacts</div>
    <address>
      <h2>Address</h2>
      <p>1-ya Brestskaya 62</p>
      <h2>Phone</h2>
      <p>+7 (916)108-79-57<br> Begel Valeriy</p>
      <h2>E-mail</h2>
      <p>Begel.V@bearle.ru</p>
    </address>
    <v-container
      grid-list-lg
      class="bearle__contacts__feedback">
      <form action="/contacts">
        <h2>Feedback</h2>
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
  methods: {
    back() {
      router.go(-1)
    }
  }
}
</script>

<style lang="scss">
.bearle__contacts {
  background: url('/images/map.jpg');
  background-size: cover;
  max-width: 100%;
  height: 100%;
  padding: 202px 70px 82px 70px;
  position: relative;
  /*background-image: linear-gradient(
    -90deg,
    rgba(49, 51, 58, 0.3) 0%,
    rgba(42, 44, 49, 0.7) 100%
  ); */
  .bearle__contacts__close {
    position: absolute;
    top: 73px;
    right: 70px;
    font-family: Futura-Medium;
    font-size: 36px;
    color: #fff;
    letter-spacing: 5px;
    text-align: left;
    cursor: pointer;
  }
  address {
    float: right;
    max-width: 454px;
    height: 100%;
    padding: 101px 123px;
    background: #fff;
    text-align: right;
    font-family: Futura-Medium;
    font-style: normal;
    p {
      font-size: 24px;
    }
  }
}
.bearle__contacts__feedback {
  padding: 30px;
  margin: 0;
  background: #fff;
  max-width: 685px;
  height: 100%;
  textarea {
    border: 1px solid #595b61;
    height: 304px;
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
    margin-top: -10px;
    font-family: Futura-Medium;
    font-size: 24px;
    color: #000000;
  }
}
</style>
