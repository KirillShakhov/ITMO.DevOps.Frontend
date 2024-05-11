
export const isLogin = () => {
  const jwt = localStorage.getItem('jwt');
  return jwt != null;
};
