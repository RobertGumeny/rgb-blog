<template>
  <div>
    <Hero id="hero" />
  </div>
</template>

<script>
import Hero from "../components/Hero";

export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    Hero
  }
};
</script>

<style lang="scss">
h1 {
  font-size: 2.4em;
  margin: 0.25em 0 0.5em;
  font-family: "Oswald", sans-serif;
}

h1:after {
  background: $secondary-color;
  bottom: -2px;
  content: "";
  display: block;
  height: 4px;
  position: relative;
  width: 8.7em;
}

.container {
  padding: 1em;
  margin: 0 1.8em;
}

@media only screen and (min-width: 576px) {
  .container {
    margin: 0 2.5em;
  }
}

@media only screen and (min-width: 768px) {
  .blog-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4em;
    margin-bottom: 1.5em;
  }

  h1:after {
    width: 10em;
  }
}

@media only screen and (min-width: 992px) {
  .container {
    margin: 0 3em;
  }

  h1 {
    margin-top: 1em;
  }
}
</style>
