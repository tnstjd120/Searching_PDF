import { Box, styled } from '@mui/material';

const Manual = () => {
  return <StyledManual>매뉴얼 입니다.</StyledManual>;
};

export default Manual;

const StyledManual = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
