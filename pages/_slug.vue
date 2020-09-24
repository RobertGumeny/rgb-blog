<template>
  <div class="container">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.slug).fetch();
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding: 180px;
}

h1 {
  text-align: center;
}
</style>
