<template>
  <div class="container">
    <li v-for="post of posts" :key="post.slug">
      <nuxt-link :to="post.slug">{{ post.title }}</nuxt-link>
    </li>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("blog").fetch();

    return {
      posts
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 80px 1.5em 0;
}

h1 {
  text-align: center;
}
</style>
