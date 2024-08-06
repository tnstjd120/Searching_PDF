import { useInitializeChatStore } from '@/store/useChatStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const initializeChatStore = useInitializeChatStore();
  const navigate = useNavigate();

  useEffect(() => {
    initializeChatStore();
    sessionStorage.clear();

    navigate('/login', { replace: true });
  });

  return <></>;
};

export default Logout;
