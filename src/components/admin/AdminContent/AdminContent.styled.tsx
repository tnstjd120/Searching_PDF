import { Box, styled } from '@mui/material';

export const StyledAdminContent = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.palette.greyBlue[100]};
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: auto;
    padding: 20px;
`,
);
