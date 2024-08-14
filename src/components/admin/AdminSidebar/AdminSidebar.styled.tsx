import { Stack, styled } from '@mui/material';

export const StyledAdminSidebar = styled(Stack)`
  width: 200px;
  height: 100%;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
`;
