import api from "../../services/posts";

export default {
  async getAllPosts() {
    return api.getPosts();
  },
};