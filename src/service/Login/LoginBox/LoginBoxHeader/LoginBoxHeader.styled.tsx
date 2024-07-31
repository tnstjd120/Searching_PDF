import { Box, styled } from '@mui/material';

export const StyledLoginBoxHeader = styled(Box)`
  text-align: center;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledImageBox = styled(Box)`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  .inner {
    width: 30px;
    overflow: hidden;

    img {
      width: 140px !important;
      max-width: none;
    }
  }
`;
