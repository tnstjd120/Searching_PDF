import { EngineType } from '@/types/Engine';
import { Card, Switch, styled } from '@mui/material';

export const ChatCard = styled(Card, { shouldForwardProp: (props) => props !== 'activeEngine' })<{
  activeEngine: EngineType;
}>`
  background-color: ${({ theme, activeEngine }) =>
    activeEngine === EngineType.Quantum ? theme.palette.greyBlue[100] : theme.palette.grey[100]};
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  height: 100%;
  position: relative;

  .MuiCardHeader-root {
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
    padding: 4px 12px;

    .MuiTypography-root {
      font-size: 0.8rem;
    }

    svg {
      font-size: 1rem;
    }
  }
`;

export const SearchModeSwitch = styled(Switch)(() => ({
  padding: 8,
  width: 170,
  '& .MuiSwitch-track': {
    borderRadius: 4,
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-56%)',
      height: 16,
      fontSize: '0.8rem',
      color: '#fff',
      fontWeight: 'bold',
    },
    '&::before': {
      content: '"Quantum"',
      left: 16,
      paddingBottom: '2px',
    },
    '&::after': {
      content: '"ChatGPT"',
      right: 16,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    borderRadius: 2,
    width: 80,
    height: 18,
    margin: 1,
  },
  '.MuiButtonBase-root.MuiSwitch-switchBase.Mui-checked': {
    transform: 'translateX(calc(170px - 100%))',
  },
}));
