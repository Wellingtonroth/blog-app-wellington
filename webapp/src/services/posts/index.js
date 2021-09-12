import api from '../axios'
import baseUrl from '../baseUrl'

export default {

  getPosts () {
    return api.get(baseUrl.posts.getPosts);
  },

}