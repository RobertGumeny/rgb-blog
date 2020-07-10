<template>
  <div class="container">
    <ContactSection id="contact" />
  </div>
</template>

<script>
import ContactSection from "../components/ContactSection"

export default {
  components: {
    ContactSection
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 80px 1.5em 0;
}

h1 {
  text-align: center;
}
</style>
