import { styled } from '@mui/material';

export const StyledChatForm = styled('form')`
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
  width: 100%;
  height: 120px;
  position: relative;
  overflow: hidden;
  transition: height 0.15s ease-in-out;

  &:has(textarea:focus) {
    /* height: 120px; */

    /* background-color: ${({ theme }) => theme.palette.greyBlue[200]};

      & + button svg {
        color: ${({ theme }) => theme.palette.greyBlue[500]};
      } */
  }

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

    &:disabled {
      background-color: ${({ theme }) => theme.palette.grey[200]};
    }

    &::placeholder {
      color: ${({ theme }) => theme.palette.grey[400]};
    }
  }

  > .send-button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);

    svg {
      color: ${({ theme }) => theme.palette.primary.main};
    }

    &:disabled {
      svg {
        color: ${({ theme }) => theme.palette.divider};
      }
    }
  }
`;
