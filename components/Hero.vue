<template>
  <div class="hero">
    <div class="hero-section">
      <div class="content">
        <p class="greeting">Hello, my name is</p>
        <p class="name">
          Robert
          <span>Gumeny</span>
        </p>
        <p class="intro">
          I am a web designer and developer with a passion for creating
          <strong>simple</strong>,
          <strong>elegant</strong>, and
          <strong>user-friendly</strong> websites and applications.
        </p>
        <div class="cta-row">
          <a href="#contact" class="cta-one">Contact Me</a>
          <a href="#portfolio" class="cta-two">View Portfolio</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'hero',
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style lang="scss" scoped>
.hero-section {
  font-family: "Open Sans", sans-serif;
  background: url("../assets/images/hero-img-2.jpg") top center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  padding-top: 5em;
}

p.name {
  margin-top: -5px;
  font-size: 2.6em;
}

p.name span {
  color: $secondary-color;
}
.content {
  margin: 5em auto;
  width: 70%;
}

.greeting {
  font-size: 1.4em;
}

.intro {
  margin: 1em 0;
}

.intro strong {
  color: $secondary-color;
}

.cta-row {
  margin: 1.4em auto;
}

.cta-one {
  background-color: $primary-color;
  border: none;
  color: #fff;
  padding: 5px 15px;
  border-radius: 12.5px;
  margin-right: 0.5em;
  cursor: pointer;
  text-decoration: none;
}
.cta-two {
  background-color: $primary-bg;
  border: 1px solid $secondary-color;
  color: $secondary-color;
  padding: 5px 15px;
  border-radius: 12.5px;
  cursor: pointer;
  text-decoration: none;
}

@media only screen and (min-width: 576px) {
  .content {
    margin: 5em auto;
    width: 60%;
  }
}

@media only screen and (min-width: 768px) {
  .content {
    margin: 6em 6em;
    width: 50%;
  }
}

@media only screen and (min-width: 992px) {
  .content {
    margin: 8em 8em;
    width: 50%;
  }
}
</style>