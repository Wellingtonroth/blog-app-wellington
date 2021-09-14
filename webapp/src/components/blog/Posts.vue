<template>
  <div class="posts">
    <div class="box-post" v-for="post in posts" :key="post._id">
      <h1 class="title">{{ post.title }}</h1>
      <div class="tags">
        <span class="tag" v-for="categorie in categories" :key="categorie._id">{{ categorie.name }}</span>
      </div>
      <p class="description">
        {{ post.desc }}
      </p>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue';

export default {
  name: 'Posts',
  setup() {
    const store = useStore();

    const posts = ref({});
    const categories = ref({});

    const loadPosts = async () => {
      posts.value = await store.dispatch('posts/getAllPosts');
      categories.value = await store.dispatch('categories/getAllCategories');
    };

    loadPosts();

    return {
      posts,
      categories,
    };
  },
  emits: ['loadPosts', 'posts', 'categories']
};
</script>

<style scoped lang="scss">
.posts {
  margin-right: 60px;
  max-width: 760px;

  .box-post {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;

    .title {
      font-size: 1.25rem;
      font-weight: 500;
      padding-bottom: 12px;
    }

    .tags {
      padding-bottom: 16px;

      .tag {
        text-transform: uppercase;
        color: #023859;
        font-size: 0.875rem;
        padding-right: 20px;
      }
    }

    .description {
      font-size: 1.25rem;
      color: #023859;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
