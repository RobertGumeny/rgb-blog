<template>
  <div class="container">
    <li v-for="post of posts" :key="post.slug">
      <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
      <p>{{ post.description }}</p>
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
  padding: 180px;
}

li {
  list-style-type: none;
}

li a {
  text-decoration: none;
  color: $primary-color;
  font-weight: bold;
}

h1 {
  text-align: center;
}
</style>
