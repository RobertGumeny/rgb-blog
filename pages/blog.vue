<template>
  <div class="container">
    <h1>Robert's Blog</h1>
    <div class="display-area">
      <BlogPreview v-for="post in posts" :postData="post" :key="post.name" />
    </div>
  </div>
</template>

<script>
import BlogPreview from "../components/BlogPreview"
import { getPosts } from '../api/posts'

export default {
  async asyncData() {
    const posts = await getPosts();
    return { posts: posts }
  },
  components: {
    BlogPreview
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 80px 1.5em 0;
}

.display-area {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4em;
  margin-bottom: 1.5em;
}

h1 {
  text-align: center;
}
</style>
