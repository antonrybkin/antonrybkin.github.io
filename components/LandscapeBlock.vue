<template>
  <div class="bearle__landscape">
    <p>Please Rotate Your Device</p>
    <img
      src="/images/rotate.png"
      alt="Bearle IT&ART">
  </div>
</template>

<script>
export default {
  name: 'LandscapeBlock'
}
</script>

<style lang="scss">
.bearle__landscape {
  display: none;
}
@media screen and (max-width: 768px) and (orientation: landscape) {
  .bearle__landscape {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 1000;
    text-align: center;
    padding-top: 5%;
    p {
      font-size: 36px;
    }
  }
}
</style>
