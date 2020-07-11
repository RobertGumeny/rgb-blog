<template>
  <div>
    <Hero id="hero" />
    <div class="container">
      <h1 class="blog-header">Latest Blog Posts</h1>
      <section class="blog-section">
        <BlogPreview v-for="post in posts" :postData="post" :key="post.name" />
      </section>
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero"
import BlogPreview from "../components/BlogPreview"
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
    BlogPreview
  }
}
</script>

<style lang="scss">
h1 {
  font-size: 2.4em;
  margin: 0.25em 0 0.5em;
  font-family: "Oswald", sans-serif;
}

h1:after {
  background: $secondary-color;
  bottom: 5px;
  content: "";
  display: block;
  height: 4px;
  position: relative;
  width: 6.2em;
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
    margin-top: 0.65em;
  }

  h1:after {
    left: 50%;
    transform: translateX(-50%);
  }
}

@media only screen and (min-width: 992px) {
  .container {
    margin: 0 3em;
  }

  h1 {
    margin-top: 1em;
  }
}
</style>
