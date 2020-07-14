<template>
  <div class="blog">
    <section class="blog-hero">
      <h1 class="blog-header">Robert's Blog</h1>
    </section>
    <div class="display-area">
      <BlogPreview
        v-for="post in posts"
        :postData="post"
        :postDate="post.dateFormatted"
        :key="post.name"
      />
    </div>
  </div>
</template>

<script>
import BlogPreview from "../components/BlogPreview"
import { getPosts } from '../api/posts'

export default {
  async asyncData() {
    const posts = await getPosts();
    posts.map(post => {
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      };

      post.dateFormatted = new Intl.DateTimeFormat('en-US', options)
        .format(new Date(post.published_at));
    });
    return { posts: posts }
  },
  components: {
    BlogPreview
  }
}
</script>

<style lang="scss" scoped>
.blog-hero {
  background: url("../assets/images/blog-hero-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 45vh;
  padding-top: 6em;
}

.display-area {
  padding: 2em 1.5em;
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
