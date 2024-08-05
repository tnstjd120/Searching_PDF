import { Avatar, styled } from '@mui/material';

export const StyledProfileImage = styled(Avatar)`
  outline: 1px solid ${({ theme }) => theme.palette.divider};
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 4px;
  width: 28px;
  height: 28px;
`;
