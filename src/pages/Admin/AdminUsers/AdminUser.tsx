import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AdminUser = () => {
  const { userId } = useParams();

  useEffect(() => {
    console.log('userId: ', userId);
  }, [userId]);

  return <>userPk: {userId}</>;
};

export default AdminUser;
