<template>
  <nuxt-link :to=" { path: postData.slug }" class="blog-preview card">
    <img :src="postData.feature_image" :alt="postData.title" />
    <div class="blog-text">
      <section class="tag-row">
        <p class="blog-tags" v-for="tag in tags" :key="tag.id">{{ tag.name }}</p>
      </section>
      <p class="blog-title">{{ postData.title }}</p>
      <p class="blog-excerpt">{{ postData.custom_excerpt }}</p>
      <section class="date-readtime">
        <p class="blog-date">{{ postDate }}</p>
        <p class="blog-readtime">| {{ postData.reading_time }} minute read</p>
      </section>
    </div>
  </nuxt-link>
</template>


<script>
import moment from 'moment';

export default {
  name: 'blog-preview',
  props: ["postData", "postDate"],
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

.tag-row {
  margin-bottom: 1em;
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
.date-readtime {
  display: flex;
  justify-content: start;
  color: $secondary-color;
  font-size: 0.8em;
  margin-top: 1em;
}
p.blog-date {
  font-style: italic;
}
p.blog-readtime {
  margin-left: 0.6em;
}
p.blog-tags {
  font-size: 0.8em;
  font-weight: bold;
  display: inline;
  margin: 2.5px;
  background-color: $primary-bg;
  border: 2px solid $secondary-color;
  color: $secondary-color;
  padding: 2.5px 7.5px;
  border-radius: 15px;
}

@media only screen and (min-width: 768px) {
  .blog-preview {
    margin-bottom: 0em;
  }
}
</style>