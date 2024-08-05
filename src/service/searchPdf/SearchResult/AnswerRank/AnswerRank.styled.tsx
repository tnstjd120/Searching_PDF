import { Box, Chip, styled } from '@mui/material';

export const StyledAnswerRank = styled(Box, { shouldForwardProp: (props) => props !== 'isActive' })<{
  isActive: boolean;
}>`
  cursor: pointer;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.palette.greyBlue[200] : theme.palette.background.paper};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  padding: 20px;
  padding-bottom: 40px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.greyBlue[100]};
  }
`;

export const AnswerText = styled(Box)`
  white-space: pre-wrap;
  font-size: 0.825rem;
`;

export const AnswerTop = styled(Box)`
  margin-bottom: 10px;
`;

export const AnswerRankChip = styled(Chip)`
  font-size: 0.725rem;
  padding-inline: 4px;
`;

export const AnswerBottom = styled(Box)``;
