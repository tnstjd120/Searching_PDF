import { Box, Chip, styled } from '@mui/material';

export const StyledAnswerRank = styled(Box, { shouldForwardProp: (props) => props !== 'isActive' })<{
  isActive: boolean;
}>`
  cursor: pointer;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.palette.greyBlue[200] : theme.palette.background.paper};
  flex: 1;
  overflow: auto;
  transition: background 0.1s ease-in;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  }

  &:hover {
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.palette.greyBlue[300] : theme.palette.greyBlue[100]};

    & .answer-top {
      background-color: ${({ theme, isActive }) =>
        isActive ? theme.palette.greyBlue[300] : theme.palette.greyBlue[100]};
    }
  }

  & .answer-top {
    transition: background 0.1s ease-in;
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.palette.greyBlue[200] : theme.palette.background.paper};
  }
`;

export const AnswerText = styled(Box)`
  white-space: pre-wrap;
  font-size: 0.825rem;
  padding: 20px;
  padding-top: 0;
`;

export const AnswerTop = styled(Box)`
  padding: 10px 20px;
  position: sticky;
  top: 0;
`;

export const AnswerRankChip = styled(Chip)`
  font-size: 0.6rem;
  padding-inline: 2px;
  height: 18px;
  vertical-align: bottom;
`;

export const AnswerBottom = styled(Box)``;
