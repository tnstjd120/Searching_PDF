import { IUserResponse } from '@/types/User';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface IUsersTableBody {
  data?: IUserResponse;
}

const UsersTableBody = ({ data }: IUsersTableBody) => {
  if (!data) return <TableBody></TableBody>;

  const navigate = useNavigate();
  const { userList } = data;

  const handleClickUser = (userPk: number) => {
    navigate(`${userPk}`, { relative: 'path' });
  };

  return (
    <TableBody sx={{ backgroundColor: '#fff' }}>
      {userList.map((user, index) => (
        <TableRow key={user.id} sx={{ cursor: 'pointer' }} hover onClick={() => handleClickUser(user.id)}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{user.userName}</TableCell>
          <TableCell>{user.userId}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.userRole}</TableCell>
          <TableCell>{user.createdAt.split('T')[0]}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default UsersTableBody;
