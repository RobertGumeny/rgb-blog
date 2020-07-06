<template>
  <div class="blog-preview">
    <p class="blog-title">{{ postData.title }}</p>
    <p class="blog-author">{{ postData.authors[0].name }}</p>
    <img :src="postData.feature_image" :alt="postData.title" />
    <p class="blog-excerpt">{{ postData.custom_excerpt }}</p>
  </div>
</template>


<script>
export default {
  name: 'blog-preview',
  props: ["postData"],
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style lang="scss" scoped>
img {
  width: 100%;
}
.blog-preview {
  margin-bottom: 4em;
}

p.blog-title {
  font-weight: bold;
  font-size: 1.4em;
  margin-bottom: 0.2em;
}
p.blog-author {
  margin-top: 0.2em;
  font-size: 1.1em;
  font-style: italic;
}

@media only screen and (min-width: 768px) {
  .blog-preview {
    margin-bottom: 0em;
  }
}
</style>