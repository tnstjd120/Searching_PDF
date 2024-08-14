import { Box, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <StyledUnauthorized>
      <Typography variant="h1" component="h1">
        403
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Access Denied
      </Typography>
      <Typography variant="body1" gutterBottom>
        요청하신 페이지의 접근이 거부되었습니다. <br />
        입력하신 페이지의 주소가 정확한지 다시 한번 확인해주시기 바랍니다.
      </Typography>

      <Stack direction="row" gap="20px">
        <Button variant="outlined" color="primary" onClick={handleGoBack}>
          뒤로가기
        </Button>
        <Button variant="contained" color="primary" onClick={handleGoHome}>
          홈으로
        </Button>
      </Stack>
    </StyledUnauthorized>
  );
};

export default Unauthorized;

const StyledUnauthorized = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;

  h1 {
    font-size: 8rem;
    margin: 0;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.error.main};
  }

  h2 {
    font-size: 2rem;
    margin: 1rem 0;
  }

  p {
    margin: 0.5rem 0 2rem;
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;
