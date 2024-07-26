import { ListItem, Stack, styled } from '@mui/material';

export const StyledMessage = styled(ListItem, { shouldForwardProp: (props) => props !== 'isMe' })<{ isMe: boolean }>`
  width: 100%;
  padding: 0;
  font-size: 0.9rem;

  &:not(:first-of-type) {
    margin-top: 30px;
  }

  display: flex;
  justify-content: ${({ isMe }) => (isMe ? 'flex-end' : 'flex-start')};
`;

export const StyledMessageInner = styled(Stack, { shouldForwardProp: (props) => props !== 'isMe' })<{
  isMe: boolean;
  time: string;
}>`
  max-width: calc(100% - 100px);
  background-color: white;
  border-radius: 8px;
  padding: 8px 12px;
  position: relative;
  word-break: break-word;

  ${({ isMe }) => !isMe && `margin-left: 4px;`}

  &::before {
    content: '';
    position: absolute;

    ${({ isMe }) =>
      isMe
        ? `
            right: 0;
            transform: translateX(75%);
        `
        : `
            left: 0;
            transform: translateX(-75%) scaleX(-1);
        `}

    top: 0;
    border-width: 0 16px 10px 16px;
    border-style: solid;
    border-color: transparent transparent transparent #fff;
  }

  ${({ time, isMe }) =>
    time &&
    `
      &::after {
          content: "${time}";
          position: absolute;
          bottom: 0;
          font-size: 10px;

          ${
            isMe
              ? `
                right: 0;
                transform: translate(-10%, 110%);
              `
              : `
                left: 0;
                transform: translate(10%, 110%);
              `
          }
      }
    `}
`;
