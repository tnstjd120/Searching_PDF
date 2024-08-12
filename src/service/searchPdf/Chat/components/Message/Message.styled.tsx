import { EngineType } from '@/types/Engine';
import { Box, IconButton, ListItem, Stack, styled } from '@mui/material';

export const StyledMessage = styled(ListItem, { shouldForwardProp: (props) => props !== 'isMe' })<{ isMe: boolean }>`
  width: 100%;
  padding: 0;
  font-size: 0.9rem;
  position: relative;

  &:not(:first-of-type) {
    margin-top: 50px;
  }

  display: flex;
  align-items: flex-start;
  justify-content: ${({ isMe }) => (isMe ? 'flex-end' : 'flex-start')};
  padding-left: ${({ isMe }) => (isMe ? '0' : '40px')};
`;

export const ProfileArea = styled(Box)`
  position: absolute;
  left: 0;
  top: 0px;
  transform: translateY(-50%);
`;

export const StyledMessageInner = styled(Stack, {
  shouldForwardProp: (props) =>
    props !== 'isMe' && props !== 'time' && props !== 'varinat' && props !== 'activeEngine' && props !== 'messageColor',
})<{
  isMe: boolean;
  time: string;
  variant: 'speechBubble' | 'radius';
  activeEngine: EngineType;
  messageColor?: string;
}>`
  max-width: calc(100% - 100px);
  border-radius: 8px;
  padding: 8px 12px;
  position: relative;
  word-break: break-word;
  white-space: pre-wrap;
  unicode-bidi: isolate;
  box-shadow: 0 3px 12px rgba(120, 120, 120, 0.1);

  background-color: ${({ theme, messageColor }) => (messageColor ? messageColor : theme.palette.background.paper)};
  border-color: ${({ theme, messageColor }) => (messageColor ? messageColor : theme.palette.background.paper)};

  ${({ theme, isMe, activeEngine }) =>
    isMe &&
    `
    margin-right: 8px;
    background-color: ${activeEngine === EngineType.Quantum ? theme.palette.greyBlue[300] : theme.palette.grey[400]};
    border-color: ${activeEngine === EngineType.Quantum ? theme.palette.greyBlue[300] : theme.palette.grey[400]};

  `}

  ${({ variant, isMe }) =>
    variant === 'speechBubble' &&
    `
    &::before {
    content: '';
    position: absolute;

    ${
      isMe
        ? `
          right: 0;
          transform: translateX(75%);
      `
        : `
          left: 0;
          transform: translateX(-75%) scaleX(-1);
      `
    }

    top: 0;
    border-width: 0 16px 10px 16px;
    border-style: solid;
    border-color: transparent transparent transparent transparent;
    border-left-color: inherit;
  }
  `}

  ${({ theme, time, isMe }) =>
    time &&
    `
      &::after {
          content: "${time}";
          position: absolute;
          bottom: 0;
          font-size: 10px;
          min-width: 48px;
          color: ${theme.palette.grey[500]};
          ${
            isMe
              ? `
                right: 0;
                transform: translate(-10%, 125%);
              `
              : `
                left: 0;
                transform: translate(10%, 125%);
              `
          }
      }
    `}
`;

export const FeedBackButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: -8px;
  color: ${({ theme }) => theme.palette.divider};

  & svg {
    font-size: 1.2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.grey[500]};
  }
`;
