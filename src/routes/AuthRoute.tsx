import { checkAuth } from '@/auth/checkAuth';

interface IAuthRoutes {
  children: React.ReactNode;
}

const AuthRoute = ({ children }: IAuthRoutes) => {
  if (!checkAuth()) {
    window.location.replace('/login');
  } else {
    return children;
  }
};

export default AuthRoute;
