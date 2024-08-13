import { Dialog, DialogContent, TextareaAutosize, styled } from '@mui/material';

export const FeedbackDialog = styled(Dialog)``;

export const FeedbackDialogContent = styled(DialogContent)`
  .MuiDialogContentText-root {
    width: 450px;
  }
`;

export const Textarea = styled(TextareaAutosize)(
  ({ theme }) => `
    padding: 8px 12px;
    box-sizing: border-box;
    line-height: 1.5;
    width: 100%;
    border: 1px solid ${theme.palette.grey[300]};
    border-radius: 4px;
    margin-top: 20px;
    resize: none;
`,
);
