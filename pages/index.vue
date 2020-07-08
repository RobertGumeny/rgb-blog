<template>
  <div>
    <Hero id="hero" />
    <div class="container">
      <PortfolioSection id="portfolio" />
      <h1 class="blog-header">Latest Blog Posts</h1>
      <section class="blog-section">
        <BlogPreview v-for="post in posts" :postData="post" :key="post.name" />
      </section>
      <ContactSection id="contact" />
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero"
import PortfolioSection from "../components/PortfolioSection"
import BlogPreview from "../components/BlogPreview"
import ContactSection from "../components/ContactSection"
import { getPreviewPosts } from '../api/posts'

export default {
  async asyncData() {
    const posts = await getPreviewPosts();
    return { posts: posts }
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  },
  components: {
    Hero,
    PortfolioSection,
    BlogPreview,
    ContactSection
  }
}
</script>

<style lang="scss">
h1 {
  font-size: 2.4em;
  margin: 1.5em 0;
  font-family: "Oswald", sans-serif;
}
.container {
  padding: 1em;
  margin: 0 1.8em;
}

@media only screen and (min-width: 576px) {
  .container {
    margin: 0 2.5em;
  }
}

@media only screen and (min-width: 768px) {
  .blog-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4em;
    margin-bottom: 1.5em;
  }

  h1 {
    text-align: center;
  }
}

@media only screen and (min-width: 992px) {
  .container {
    margin: 0 3em;
  }
}
</style>
