<template>
  <div class="container contain">
    <div class="image-space">
      <cloud1 class="cloud-for-small"/>
      <img class="quiet-image" src="~/assets/images/quiet.svg" alt="quiet - rrvc">
    </div>
    <div class="text-space">
      <h1 class="font-poppins">Este sitio está en construcción.</h1>
      <h2 class="font-open-sans">
        rrvc.dev por
        <br>
        Rolando Velazquez.
      </h2>
      <a @click="sendEmailEvent" href="mailto:info@rrvc.dev" class="btn-mail font-open-sans">Mándame un
        correo.</a>
      <cloud2 class="cloud-for-big"/>
    </div>
  </div>
</template>

<script>

import Cloud1 from "~/components/icons/cloud1";
import Cloud2 from "~/components/icons/cloud2";

export default {
  components: {Cloud2, Cloud1},
  head() {
    return {
      title: 'RRVC | Inicio - Este sitio está en construcción.',
    }
  },
  methods: {
    sendEmailEvent() {
      this.$gtm.push({
        event: 'send_email'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  &.contain {
    @include media('>=992px') {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: calc(100vh - 68px);
      overflow: hidden;
    }
    @include media('>=desktop') {
      max-height: 800px;
    }
  }

  @include media('<576px') {
    padding-left: 0;
    padding-right: 0;
  }

  .image-space {
    position: relative;
    @include media('>=992px') {
      grid-column: 2/3;
      grid-row: 1;
    }

    .cloud-for-small {
      transform: translateY(-5px);
      @include media('>=768px') {
        transform: translateY(-8px);
      }
      @include media('>=992px') {
        display: none;
      }
    }

    .quiet-image {
      position: absolute;
      top: 22%;
      left: 0;
      right: 0;
      width: 55%;
      margin: 0 auto;
      @include media('>=992px') {
        top: 0;
        bottom: 0;
        margin: auto auto;
        width: 400px;
      }
    }
  }

  .text-space {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include media('>=992px') {
      grid-column: 1/2;
      grid-row: 1;
      justify-content: center;
      align-items: flex-start;
      position: relative;
    }

    h1 {
      text-align: center;
      font-size: 30px;
      font-weight: 900;
      line-height: 32px;
      margin-top: 30px;
      margin-bottom: 26px;
      @include media('>=992px') {
        font-size: 42px;
        line-height: 50px;
        text-align: left;
      }
      @include media('>=desktop') {
        font-size: 45px;
      }
    }

    h2 {
      text-align: center;
      font-size: 17px;
      font-weight: 800;
      line-height: 22px;
      margin-top: 0;
      margin-bottom: 0;
      @include media('>=992px') {
        font-size: 20px;
        line-height: 30px;
        text-align: left;
      }
      @include media('>=desktop') {
        font-size: 22px;
      }
    }

    .btn-mail {
      padding: 13px 32px;
      background: black;
      text-decoration: none;
      color: white;
      font-size: 17px;
      margin: 24px 0;
      font-weight: 800;
    }

    .cloud-for-big {
      display: none;
      @include media('>=992px') {
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translateY(10px);
        max-width: 345px;
      }
    }
  }

}
</style>
