import { Box, Card, styled } from '@mui/material';

export const SearchPdfCard = styled(Card)`
  /* background-color: ${({ theme }) => theme.palette.greyBlue[100]}; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 0 4px 4px 0;
  border: 1px solid #ddd;
  border-left: 0;
  box-shadow: none;

  .MuiCardHeader-root {
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
    padding: 10px 12px;

    .MuiTypography-root {
      font-size: 0.8rem;
    }

    svg {
      font-size: 1rem;
    }
  }
`;

export const ActionLayout = styled(Box)`
  display: flex;
  gap: 20px;

  .rpv-core__tooltip-body {
    display: none;
  }

  .rpv-core__minimal-button {
    height: 24px;
    width: 24px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const PaginationLayout = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;

  .slash {
    color: ${({ theme }) => theme.palette.grey[300]};
    padding: 0 5px;
  }
`;

export const ButtonLayout = styled(Box)`
  display: flex;
  align-items: center;
`;
