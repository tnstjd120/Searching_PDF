import LoginBox from '@/service/Login/LoginBox';
import { Box, styled } from '@mui/material';

const Login = () => {
  return (
    <StyledLogin>
      <LoginBox>
        <LoginBox.Header />
        <LoginBox.Content />
      </LoginBox>
    </StyledLogin>
  );
};

export default Login;

const StyledLogin = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
  display: flex;
  justify-content: center;
  align-items: center;
`;
