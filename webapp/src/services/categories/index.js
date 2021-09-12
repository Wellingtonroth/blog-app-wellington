import { api } from '../axios'

export default {
  getCategories: () => {
    return api.get("categories")
  }
}