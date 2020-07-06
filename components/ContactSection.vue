<template>
  <div class="contact-section">
    <h1>Get in Touch!</h1>
  </div>
</template>


<script>
export default {
  name: 'contact-section',
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style lang="scss" scoped>
.contact-section {
  font-family: "Open Sans", sans-serif;
}
h1 {
  position: relative;
  margin-bottom: 1.5em;
}
h1:after {
  position: absolute;
  content: "";
  height: 2px;
  bottom: 0px;
  left: 1px;
  width: 5.4em;
  background-color: $secondary-color;
}
</style>