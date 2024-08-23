import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <StyledNotFound>
      <Typography variant="h1" component="h1">
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
        <br />
        입력하신 주소가 정확한지 다시 한 번 확인해주세요.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        홈으로
      </Button>
    </StyledNotFound>
  );
};

export default NotFound;

const StyledNotFound = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;

  h1 {
    font-size: 10rem;
    margin: 0;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.primary.main};
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
