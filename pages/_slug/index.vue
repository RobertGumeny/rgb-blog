<template>
  <div class="single-post">
    <img :src=" post.feature_image" alt />
    <main class="post-container">
      <h1>{{ post.title }}</h1>
      <div class="content">
        <div v-html="post.html">{{ post.html }}</div>
      </div>
    </main>
  </div>
</template>


<script>
import { getSinglePost } from "~/api/posts";

export default {
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug);
    return { post: post }
  },
  name: 'single-post',
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style lang="scss" scoped>
.single-post {
  padding: 5.5em 0 0;
}

.post-container {
  padding: 0 1.5em;
}

img {
  width: 100%;
}
</style>