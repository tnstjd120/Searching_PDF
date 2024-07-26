import { Box, styled } from '@mui/material';

export const StyledChatForm = styled(Box)`
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
  width: 100%;
  flex-basis: 100px;
  position: relative;

  > textarea {
    background-color: ${({ theme }) => theme.palette.grey[50]};
    line-height: 1.4;
    padding: 10px;
    padding-right: 30px;
    width: 100%;
    height: 100%;
    border: 0;
    outline: none;
    resize: none;
    transition: background 0.1s ease-in;

    &:focus {
      background-color: ${({ theme }) => theme.palette.greyBlue[200]};

      & + button svg {
        color: ${({ theme }) => theme.palette.primary.light};
      }
    }
  }

  > .send-button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);

    svg {
      color: ${({ theme }) => theme.palette.divider};

      /* outline: 1px solid ${({ theme }) => theme.palette.primary.light}; */
    }
  }
`;
