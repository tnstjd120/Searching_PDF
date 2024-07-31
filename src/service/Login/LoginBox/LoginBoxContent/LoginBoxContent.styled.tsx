import { Box, Button, Input, styled } from '@mui/material';

export const StyledLoginBoxContent = styled(Box)`
  width: 100%;
  border: 1px solid #ddd;
  padding: 60px 40px;

  a {
    color: ${({ theme }) => theme.palette.grey[600]};

    &:hover {
      color: black;
      text-decoration: underline;
    }
  }
`;

export const StyledLoginInput = styled(Input)`
  font-size: 0.9rem;

  &:not(:first-of-type) {
    margin-top: 30px;
  }
`;

export const StyledLoginButton = styled(Button)`
  border-radius: 0;
  margin-top: 50px;
`;

export const StyledLoginBottomMenu = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
