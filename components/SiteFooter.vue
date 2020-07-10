<template>
  <footer>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>|</li>
        <li>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
        <li>|</li>
        <li>
          <nuxt-link to="/#contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
    <p>
      <small>&copy; 2020 Robert Gumeny. All Rights Reserved.</small>
    </p>
  </footer>
</template>


<script>
export default {
  name: 'footer',
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 114px;
  text-align: center;
  background: $secondary-bg;
  nav {
    display: flex;
    justify-content: center;
    a {
      color: $primary-color;
      text-decoration: none;
      cursor: pointer;
    }
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
</style>