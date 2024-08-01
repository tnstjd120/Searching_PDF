import { Box, Button, Stack, Typography, styled } from '@mui/material';

export const LoginBoxContent = styled(Box)`
  width: 100%;
  border: 1px solid #ddd;
  padding: 80px 40px;
  position: relative;

  a {
    color: ${({ theme }) => theme.palette.grey[600]};

    &:hover {
      color: black;
      text-decoration: underline;
    }
  }
`;

export const LoginInputGroup = styled(Stack)`
  position: relative;

  input {
    font-size: 0.9rem;
  }

  &:not(:first-of-type) {
    margin-top: 50px;
  }
`;

export const HelperText = styled(Typography)`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
`;

export const LoginButton = styled(Button)`
  border-radius: 0;
  margin-top: 70px;
`;

export const LoginBottomMenu = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 10px;
`;
