<template>
  <nav class="nav">
    <div class="container">
      <div class="menu">
        <NuxtLink to="/">
          <Logo class="logo"/>
        </NuxtLink>
        <ul class="menu-list font-open-sans">
          <li class="menu-items">
            <NuxtLink to="/" class="link">
              Inicio
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "~/components/icons/logo";

export default {
  name: "navBar",
  components: {Logo}

}
</script>

<style lang="scss" scoped>
nav {
  background: white;
  z-index: 2;
  position: sticky;
  top: 0;
  @include media('>=992px') {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background: #E3E5E9;
      height: 1px;
      width: 100%;
    }
  }

  .container {
    .menu {
      display: flex;
      align-items: center;
      height: 64px;
      justify-content: space-between;
      @include media('>=992px') {
        height: 68px;
      }

      .logo {
        height: 30px;
      }

      .menu-list {
        display: none;
        @include media('>=tablet') {
          list-style: none;
          margin: 0;
          height: 100%;
          padding: 0;
          display: block;

        }

        .menu-items {
          font-weight: 800;
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;

          &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            width: 100%;
            background: black;
          }

          .link {
            height: 100%;
            display: flex;
            align-items: center;
            text-decoration: none;
            color: black;
            padding: 0 10px;
          }
        }
      }
    }

  }
}
</style>
