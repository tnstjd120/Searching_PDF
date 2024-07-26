import { Box, styled } from '@mui/material';

const Home = () => {
  return <StyledHome>안녕하세요 퀀텀에이아이 입니다.</StyledHome>;
};

export default Home;

const StyledHome = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
