import { redirect } from 'react-router-dom';

const Logout = () => {
  sessionStorage.clear();
  return <>{redirect('/login')}</>;
};

export default Logout;
