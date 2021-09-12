<template>
  <div class="posts">
    <div class="box-post" v-for="(post, i) in posts" :key="i">
      <h1 class="title">a</h1>
      <div class="tags">
        <span class="tag">CSS</span>
        <span class="tag">HTML</span>
        <span class="tag">Javascript</span>
      </div>
      <p class="description">
        desacriçãodesa criçãodesacriçãode sacriçãodesacriçãodesacriçdesacriçãodesa criçãodesacriç ãodesacriçã odesacriçãodesa criçdesacriçãodesa 
        criçãodesacriçãodesac riçãodesacriçãodesacri çdesacriçãodesa criçãodesacriçãodesac riçãodesacriçãodesacriç
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

    const loadPosts = async () => {
      posts.value = await store.dispatch('posts/getAllPosts');
    };

    loadPosts();

    console.log(posts.value);
    return {
      posts,
    };
  },
  emits: ['loadPosts', 'posts']
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
