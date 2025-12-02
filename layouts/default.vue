<template>
  <div class="main">
    <nav-bar/>
    <Nuxt/>
  </div>
</template>
<script>
import NavBar from "~/components/navBar";

export default {
  components: {NavBar}
}
</script>

<style lang="scss" scoped>
.main {
  @include media('>=992px') {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      background: white;
      right: 0;
      top: 0;
      height: 100%;
      width: 50%;
    }
  }
}
</style>
