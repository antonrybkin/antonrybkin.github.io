<template>
  <v-container :class="{ showed: $store.state.drawer }">
    <div class="bearle__about">About</div>
    <div class="text-md-right bearle__logo">
      <img
        src="/images/Logo-black.png"
        alt="Bearle IT&ART">
    </div>
    <h1 class="bearle__h1">01 <span>h1title</span></h1>
    <p class="bearle__gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <ul class="bearle__list">
      <li>
        <img
          src="https://via.placeholder.com/230"
          class="bearle__list__img"
          alt="Lorem ipsum">
        <div class="bearle__list__title">Lorem ipsum</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor ipsum nam numquam optio, porro quisquam? Consequatur deleniti nulla sequi! Corporis exercitationem illum maiores quae recusandae rem repudiandae sed, vero!</p>
      </li>
      <li>
        <img
          src="https://via.placeholder.com/230"
          class="bearle__list__img"
          alt="Lorem ipsum">
        <div class="bearle__list__title">Lorem ipsum</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </li>
      <li>
        <img
          src="https://via.placeholder.com/230"
          class="bearle__list__img"
          alt="Lorem ipsum">
        <div class="bearle__list__title">Lorem ipsum</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea molestias praesentium provident qui repudiandae sapiente sint soluta, ullam. Amet dolorem eum expedita illum laboriosam libero natus quam, quod tempora. Illo?</p>
      </li>
    </ul>
  </v-container>
</template>

<style lang="scss">
.bearle__about {
  opacity: 0.2;
  font-family: Futura-Medium;
  font-size: 72px;
  color: #5d6169;
  max-width: 900px;
  margin: 90px 9px 0 9px;
  @media only screen and (min-width: 601px) {
    font-size: 288px;
    letter-spacing: 1px;
  }
  @media only screen and (min-width: 1024px) {
    margin-right: auto;
    margin-left: auto;
    font-size: 327px;
    text-align: right;
  }
}
.bearle__logo {
  max-width: 900px;
  margin: auto;
  img {
    margin: -21px 0 0 37px;
    width: 80%;
    max-width: 302px;
    @media only screen and (min-width: 1024px) {
      margin-top: -144px;
      margin-right: -84px;
      width: auto;
      max-width: 406px;
    }
  }
}
.bearle__h1 {
  color: #2c2f36;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 17px;
  span {
    font-family: FuturaPT-Book;
    font-weight: lighter;
  }
  @media only screen and (min-width: 769px) {
    margin-top: 150px;
    font-size: 48px;
  }
}
.bearle__gray {
  max-width: 593px;
  margin: 0 auto 50px auto;
  font-family: FuturaPT-Book;
  font-size: 14px;
  color: #9c9c9c;
  text-align: center;
  letter-spacing: 0;
  @media only screen and (min-width: 769px) {
    font-size: 24px;
  }
}
.bearle__list {
  font-family: FuturaPT-Book;
  padding: 0;
  li {
    padding: 20px 9px;
    vertical-align: top;
    text-align: center;
    list-style: none;
    transition: all 0.2s;
    @media only screen and (min-width: 769px) {
      width: 32%;
      display: table-cell;
      height: 100%;
      padding: 50px 30px;
      p {
        visibility: hidden;
      }
      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        //border-radius: 20px;
        p {
          visibility: visible;
        }
      }
    }
    p {
      font-size: 14px;
      letter-spacing: 1.46px;
      @media only screen and (min-width: 769px) {
        text-align: left;
      }
    }
    .bearle__list__img {
      background: #d8d8d8;
      border: 1px solid #979797;
      border-radius: 50%;
    }
    .bearle__list__title {
      margin: 25px 0 35px 0;
      font-size: 24px;
      letter-spacing: 2.5px;
    }
  }
}
</style>
