<template>
  <div class="container">
    <h1 class="blog-header">Robert's Blog</h1>
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

.blog-header:after {
  width: 7.6em;
}

@media only screen and (min-width: 768px) {
  .display-area {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4em;
    margin-bottom: 1.5em;
  }
}
@media only screen and (min-width: 1200px) {
  .display-area {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4em;
    margin-bottom: 1.5em;
  }
}
</style>
