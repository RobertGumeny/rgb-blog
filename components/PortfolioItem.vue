<template>
  <div class="portfolio-item card">
    <img class="item-image" :src="itemData.img" :alt="itemData.name" />
    <p class="item-name">{{itemData.name}}</p>
    <p class="item-details">{{itemData.details}}</p>
    <p class="item-links">
      <a :href="itemData.url">View Project</a> |
      <a :href="itemData.source">Source Code</a>
    </p>
    <p class="item-description">{{itemData.description}}</p>
  </div>
</template>


<script>
export default {
  name: 'portfolio-item',
  props: ["itemData"],
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style lang="scss" scoped>
.card {
  background: $primary-bg;
  padding: 0.8em;
  border: 1px solid #f9f9f9;
}

.portfolio-item {
  margin-bottom: 4em;
}
.portfolio-item p {
  margin-bottom: 0.5em;
}

p.item-name {
  font-weight: bold;
  font-size: 1.4em;
  margin-bottom: 0.2em;
}
p.item-details {
  margin-top: 0.2em;
  font-size: 1.1em;
}

.item-links a {
  color: $primary-color;
}

.item-image {
  width: 100%;
}

@media only screen and (min-width: 576px) {
  .item-image {
    height: auto;
  }
}

@media only screen and (min-width: 768px) {
  .portfolio-item {
    margin-bottom: 0em;
  }
  .item-image {
    width: 100%;
    height: 14em;
  }
}

@media only screen and (min-width: 992px) {
  .item-image {
    width: 100%;
  }
}
@media only screen and (min-width: 1200px) {
  .item-image {
    height: 18em;
  }
}
@media only screen and (min-width: 1400px) {
  .item-image {
    height: 20em;
  }
}
</style>