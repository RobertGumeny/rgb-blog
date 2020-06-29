<template>
  <div class="navbar">
    <header>
      <div class="container">
        <div class="navbar">
          <nuxt-link to="/" class="logo">
            R
            <span class="g">G</span>
          </nuxt-link>
          <nav>
            <ul>
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#portfolio">Portfolio</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/blog">Blog</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#contact">Contact</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>


<script>
export default {
  name: 'navbar',
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style lang="scss" scoped>
.logo {
  font-size: 2em;
  font-weight: bold;
  padding: 0;
}

.g {
  margin-left: -11px;
  color: $secondary-color;
}

.container {
  margin: 0 auto;
  width: 90%;
}
</style>