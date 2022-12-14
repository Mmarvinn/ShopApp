const JWT_TOKEN = 'JWT_TOKEN';

export const getJwtToken = () => {
  return localStorage.getItem(JWT_TOKEN);
};

export const setJwtToken = (token) => {
  localStorage.setItem(JWT_TOKEN, token);
};

export const deleteJwtToken = () => {
  localStorage.removeItem(JWT_TOKEN);
};
