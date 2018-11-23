<template>
  <div class="right-block">
    <div class="right-bloсk__title">Site</div>
    <p>Type something</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div class="right-bloсk__price">from 800 $</div>
  </div>
</template>

<script>
export default {
  name: 'GreyBlock'
}
</script>

<style lang="scss" scoped>
.right-block {
  min-height: 100%;
  padding: 30px 50px 80px 50px;
  background-image: linear-gradient(-180deg, #515359 0%, #46484e 100%);
  color: #fff;
  position: fixed;
  .right-bloсk__title {
    font-family: Futura-Bold;
    font-size: 144px;
    letter-spacing: 20px;
    margin-bottom: 50px;
    @media only screen and (max-width: 1200px) {
      font-size: 72px;
    }
  }
  p {
    letter-spacing: 3.33px;
    color: #fff;
  }
  .right-bloсk__price {
    position: absolute;
    left: 50px;
    bottom: 30px;
    font-size: 36px;
    letter-spacing: 3.75px;
  }
}
</style>
