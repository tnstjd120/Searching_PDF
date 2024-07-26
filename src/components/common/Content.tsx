import { Box, styled } from '@mui/system';

interface IContent {
  children: React.ReactNode;
}

const Content = ({ children }: IContent) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;

const StyledContent = styled(Box)`
  width: 100%;
  height: 100vh;
  padding: 20px;
  padding-top: 70px;
`;
