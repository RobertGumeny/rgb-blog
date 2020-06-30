<template>
  <div>
    <Hero id="hero" />
    <div class="container">
      <PortfolioSection id="portfolio" />
      <h1 class="blog-section">Latest Blog Posts:</h1>
      <BlogPreview v-for="post in posts" :postData="post" :key="post.name" />
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero"
import PortfolioSection from "../components/PortfolioSection"
import BlogPreview from "../components/BlogPreview"
import { getPreviewPosts } from '../api/posts';

export default {
  async asyncData() {
    const posts = await getPreviewPosts();
    return { posts: posts }
  },
  components: {
    Hero,
    PortfolioSection,
    BlogPreview,
  }
}
</script>

<style lang="scss">
.container {
  padding: 1em;
  margin: 0 1.5em;
}
h1.blog-section {
  position: relative;
  margin: 1.5em 0;
}
h1.blog-section:after {
  position: absolute;
  content: "";
  height: 2px;
  bottom: 0px;
  left: 1px;
  width: 6.4em;
  background-color: $secondary-color;
}
</style>
