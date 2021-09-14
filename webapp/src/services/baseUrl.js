const productionUrl = 'http://localhost:5000/api';  //Quando for para produção, usar url do site;

const base = {
  posts: {
    getPosts: `${productionUrl}/posts`,
  },
  categories: {
    getCategories: `${productionUrl}/categories`,
  },
};

export default base;