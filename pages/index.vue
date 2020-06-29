<template>
  <div>
    <Hero id="hero" />
    <div class="container">
      <PortfolioSection id="portfolio" />
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero"
import PortfolioSection from "../components/PortfolioSection"
export default {
  components: {
    Hero,
    PortfolioSection
  }
}
</script>

<style lang="scss">
.container {
  padding: 1em;
  margin: 0 1em;
}
</style>
