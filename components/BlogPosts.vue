<template>
  <div class="blog-posts">
    <div>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <img :src="post.feature_image" />
          <div class="content">
            <span>{{ post.authors[0].name }}</span>
            <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
            <p>{{ post.excerpt }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { getPosts } from '../api/posts';
export default {
  async asyncData() {
    const posts = await getPosts();
    return { posts: posts }
  },
  name: 'blogPosts',
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style scoped>
</style>