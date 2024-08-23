import { checkAdmin, checkAuth } from '@/auth/checkAuth';
import CircularProgressWithBlur from '@/components/common/Progress/CircularProgressWithBlur';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IAuthRoutes {
  children: React.ReactNode;
}

const AuthAdminRoute = ({ children }: IAuthRoutes) => {
  const navigate = useNavigate();
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = () => {
      if (!checkAuth()) {
        navigate('/login', { replace: true });
      } else if (!checkAdmin()) {
        navigate('/unauthorized', { replace: true });
      } else {
        setAuthLoading(false);
      }
    };

    verifyAuth();
  }, []);

  if (authLoading) return <CircularProgressWithBlur sx={{ backgroundColor: '#FFFFFF', zIndex: 9999 }} />;

  return <>{children}</>;
};

export default AuthAdminRoute;
