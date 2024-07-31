export const checkAuth = () => {
  const token = sessionStorage.getItem('token');
  console.log('checkAuth token: ', token);
  if (token) return true;
  return false;
};
