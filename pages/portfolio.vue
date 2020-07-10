<template>
  <div class="container">
    <PortfolioSection id="Portfolio" />
  </div>
</template>

<script>
import PortfolioSection from "../components/PortfolioSection"

export default {
  components: {
    PortfolioSection
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
