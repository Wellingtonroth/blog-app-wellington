import { createStore } from 'vuex'

import posts from './posts/index';
import categories from './categories/index';

export default createStore({
  modules: {
    posts,
    categories,
  },
});
