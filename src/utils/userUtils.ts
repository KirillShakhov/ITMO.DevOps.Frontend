
export const isLogin = () => {
  const jwt = localStorage.getItem('jwt');
  return jwt != null;
};

export const getUsername = () => {
  return localStorage.getItem('username');
};
