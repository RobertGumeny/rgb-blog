<template>
  <nuxt-link :to=" { path: postData.slug }" class="blog-preview card">
    <img :src="postData.feature_image" :alt="postData.title" />
    <div class="blog-text">
      <p class="blog-tags" v-for="tag in tags" :key="tag.id">{{ tag.name }}</p>
      <p class="blog-title">{{ postData.title }}</p>
      <p class="blog-excerpt">{{ postData.custom_excerpt }}</p>
    </div>
  </nuxt-link>
</template>


<script>
import moment from 'moment';

export default {
  name: 'blog-preview',
  props: ["postData"],
  data() {
    return {
      tags: this.postData.tags
    }
  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style lang="scss" scoped>
a {
  color: $primary-color;
  text-decoration: none;
}

.card {
  background: $primary-bg;
  border-radius: 5px;
  border: 1px solid #f9f9f9;
  box-shadow: 1px 1px 3px rgba(49, 49, 49, 0.1);
}

img {
  width: 100%;
}

.blog-preview {
  margin-bottom: 4em;
}

.blog-text {
  padding: 1em;
}
p.blog-title {
  font-weight: bold;
  font-size: 1.4em;
  margin-bottom: 0;
}
p.blog-date {
  margin-bottom: 0.2em;
  font-size: 0.9em;
  font-style: italic;
}

@media only screen and (min-width: 768px) {
  .blog-preview {
    margin-bottom: 0em;
  }
}
</style>