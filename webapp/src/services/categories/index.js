import api from '../axios'
import baseUrl from '../baseUrl'

export default {
  getCategories: () => {
    return api.get(baseUrl.categories.getCategories)
      .then(res => res.data);
  }
}