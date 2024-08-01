export const checkAuth = () => {
  const token = sessionStorage.getItem('token');
  if (token) return true;
  return false;
};
