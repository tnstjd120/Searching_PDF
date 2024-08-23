import { Card, styled } from '@mui/material';

export const SearchResultCard = styled(Card)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 4px 0 0 4px;
  border: 1px solid #ddd;
  border-right: 0;
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
