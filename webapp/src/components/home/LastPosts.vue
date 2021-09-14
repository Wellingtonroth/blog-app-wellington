<template>
  <div class="last-posts">
    <h1 class="title">Últimos posts</h1>

    <div class="box">
      <div class="post">
        <div class="image"></div>
        <div class="post-details">
          <h2 class="post-title">Título do post</h2>
          <p class="description">desacriçãodesa criçãodesacriçãodesacriçãodesacriçãodesacriçã</p>
          <div>
            <span class="tag">CSS</span>
            <span class="tag">HTML</span>
            <span class="tag">Javascript</span>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="image"></div>
        <div class="post-details">
          <h2 class="post-title">Título do post</h2>
          <p class="description">desacriçãodesa criçãodesacriçãodesacriçãodesacriçãodesacriçã</p>
          <div>
            <span class="tag">CSS</span>
            <span class="tag">HTML</span>
            <span class="tag">Javascript</span>
          </div>
        </div>
      </div>
      <a class="see-more" href="/posts">Ver mais</a>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue';

export default {
  name: 'LastPosts',
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
}
</script>

<style scoped lang="scss">
.last-posts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  .title {
    font-weight: normal;
    margin-bottom: 24px;
  }

  .box {
    display: flex;
    flex-direction: column;
    width: fit-content;

    .post {
      display: flex;
      margin-bottom: 24px;

      .image {
        width: 280px;
        height: 154px;
        background: rgb(180, 180, 180);
        margin-right: 24px;
      }

      .post-details {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .post-title {
          font-size: 1.125rem;
        }

        .description {
          max-width: 205px;
          font-size: 1.125rem;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tag {
          text-transform: uppercase;
          color: #023859;
          font-size: 0.875rem;
          font-weight: 500;
          padding-right: 20px;
        }
      }
    }
    .see-more {
      display: flex;
      font-size: 0.875rem;
      justify-content: flex-end;
      color: #000;
    }
  }
}
</style>
