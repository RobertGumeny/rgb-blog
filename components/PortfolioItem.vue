<template>
  <div class="portfolio-item">
    <p class="item-name">{{itemData.name}}</p>
    <p class="item-details">{{itemData.details}}</p>
    <p class="item-links">
      <a :href="itemData.url">View Project</a> |
      <a :href="itemData.source">Source Code</a>
    </p>
    <img class="item-image" :src="itemData.img" :alt="itemData.name" />
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
.portfolio-item {
  margin-bottom: 1em;
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
  height: auto;
}

@media only screen and (min-width: 576px) {
  .item-image {
    height: auto;
  }
}

@media only screen and (min-width: 768px) {
  .item-image {
    width: 100%;
    height: 16em;
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
</style>