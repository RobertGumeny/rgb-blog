<template>
  <div>
    <Navbar id="navbar" />
    <nuxt />
    <SiteFooter id="site-footer" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
export default {
  components: {
    Navbar,
    SiteFooter
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Open+Sans:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap");

html {
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#navbar {
  position: fixed;
  width: 100%;
  z-index: 1;
}

header {
  background: $secondary-bg;
  padding: 0;
  text-align: center;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: $primary-color;
    text-decoration: none;
  }

  nav {
    display: flex;
    ul {
      list-style-type: none;
      padding: 0;
      display: flex;

      li a {
        font-weight: normal;
        padding: 0.5em;
      }
    }
  }
}

@media only screen and (min-width: 360px) {
  body {
    font-size: 14px;
  }
}

@media only screen and (min-width: 576px) {
  body {
    font-size: 16px;
  }
}

@media only screen and (min-width: 992px) {
  body {
    font-size: 20px;
  }
}
</style>
