import { createStore } from 'vuex'

import posts from './posts/index';

export default createStore({
  modules: {
    posts,
  },
});
