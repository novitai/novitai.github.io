<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <img src="~/assets/images/novit_logo.png" alt="Logo" style="max-width: 39px; padding: 5px;"/>


        <nuxt-link :to="onWatchPage ? '/' : '/'">
          {{ onWatchPage ? 'Novit' : 'NOVIT.AI' }}
        </nuxt-link>
      </div>
      <input id="__menu" type="checkbox" />
      <nav-bar :on-watch-page="onWatchPage" />
      <div class="header__buttons">
        <theme-toggle />
        <hamburger v-if="!onWatchPage" />
      </div>
    </div>
  </header>
</template>

<script>
import NavBar from '~/components/layout/NavBar'
import Hamburger from '~/components/layout/Hamburger'
import ThemeToggle from '~/components/layout/ThemeToggle'

export default {
  components: {
    NavBar,
    Hamburger,
    ThemeToggle
  },
  computed: {
    onWatchPage() {
      return this.$route.path.includes('/watches/')
    }
  }
}
</script>

<style lang="scss">
.header {
  background-color: $color__body--overlay;
  box-shadow: $box-shadow;
  line-height: 2rem;
  padding: 0.75rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  @media (min-width: $breakpoint--md) {
    overflow: hidden;
  }

  @supports (backdrop-filter: blur(0.5rem)) {
    background-color: $color__body--blur;
    backdrop-filter: blur(0.5rem);
  }

  @media print {
    display: none;
  }
}

.header__content {
  @include container;

  display: flex;
}

.header__logo {
  @include font__logo;

  align-items: center;
  display: flex;
  flex-grow: 1;
  font-size: 120%;

  a:hover {
    color: $color__primary;
  }
}

.header__buttons {
  height: 100%;
  z-index: 3;
}

#__menu {
  display: none;
}
</style>
