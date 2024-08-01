import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  sessionStorage.clear();

  useEffect(() => {
    navigate('/login', { replace: true });
  });

  return <></>;
};

export default Logout;
