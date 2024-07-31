import { Typography } from '@mui/material';
import * as S from './LoginBoxHeader.styled';

import Logo from '@/assets/images/logo.svg';

const LoginBoxHeader = () => {
  return (
    <S.StyledLoginBoxHeader>
      <Typography variant="h6">Login</Typography>
    </S.StyledLoginBoxHeader>
  );
};

export default LoginBoxHeader;
