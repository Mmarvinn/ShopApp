// const BASE_URL = 'https://apiko-2021-spring-course-api.herokuapp.com';

export const CATEGORIES = '/api/categories';
export const USER_SIGN_IN = '/api/auth/register';
export const USER_LOG_IN = '/api/auth/login';
export const ACCOUNT = '/api/account';
export const ACCOUNT_PASSWORD = '/api/account/password';
export const GET_COUNTRIES = '/api/locations/countries';

export const getProductsBySearchUrl = (keywords, offset, limit) => {
  return `/api/products/search?keywords=${keywords}&offset=${offset}&limit=${limit}`;
};

export const getProductsByCategory = (category, offset, limit, sortBy) => {
  return `/api/categories/${category}/products?offset=${offset}&limit=${limit}&sortBy=${sortBy}`;
};

export const getInfoAboutOneProductApi = (productId) => {
  return `/api/products/${productId}`;
};

export const getAllProductsWithoutChoosenCategoryUrl = (
  offset,
  limit,
  sortBy
) => {
  return `/api/products?offset=${offset}&limit=${limit}&sortBy=${sortBy}`;
};

export const getFavouritesUrl = (offset, limit) => {
  return `/api/products/favorites?offset=${offset}&limit=${limit}`;
};

export const favouriteUrl = (productId) => {
  return `/api/products/${productId}/favorite`;
};

export const createOrderUrl = () => {
  return `/api/orders`;
};

export const getUserOrdersUrl = (offset, limit) => {
  return `/api/orders?offset=${offset}&limit=${limit}`;
};
