import api from "../../services/categories";

export default {
  async getAllCategories() {
    return api.getCategories();
  },
};