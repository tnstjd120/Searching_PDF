import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminUsers = () => {
  const navigate = useNavigate();

  return (
    <>
      AdminUsers
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <Button key={i} onClick={() => navigate(`${i + 1}`, { relative: 'path' })}>
            {i + 1}
          </Button>
        ))}
    </>
  );
};

export default AdminUsers;
