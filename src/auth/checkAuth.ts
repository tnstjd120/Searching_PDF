import { IUserTokenParsing } from '@/types/User';
import { jwtDecode } from 'jwt-decode';

export const checkAuth = () => {
  const token = sessionStorage.getItem('token');
  if (token) return true;
  return false;
};

export const checkAdmin = () => {
  const token = sessionStorage.getItem('token');

  if (!token) return false;
  const { userRole } = jwtDecode<Omit<IUserTokenParsing, 'iat' | 'exp'>>(token);
  return userRole === 'Admin';
};
