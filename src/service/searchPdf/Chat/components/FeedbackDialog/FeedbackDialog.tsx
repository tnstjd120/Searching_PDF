import { Button, DialogActions, DialogContentText, DialogTitle } from '@mui/material';
import * as S from './FeedbackDialog.styled';
import usePostChatFeedback from '../../hooks/usePostChatFeedback';
import CircularProgressWithBlur from '@/components/common/Progress/CircularProgressWithBlur';
import { enqueueSnackbar } from 'notistack';
import { useRef } from 'react';

interface IFeedbackDialog {
  open: boolean;
  onClose: () => void;
  engineLogId: number;
}

const FeedbackDialog = ({ open, onClose, engineLogId }: IFeedbackDialog) => {
  const { useRequest, isLoading } = usePostChatFeedback();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleClickSend = async () => {
    await useRequest(engineLogId, textareaRef?.current?.value ?? '');
    enqueueSnackbar('피드백이 접수되었습니다.', { variant: 'success' });
    onClose();
  };

  return (
    <S.FeedbackDialog open={open} onClose={onClose}>
      <DialogTitle>Feedback</DialogTitle>

      <S.FeedbackDialogContent>
        <DialogContentText>현재 답변에 대한 피드백을 적어주세요.</DialogContentText>

        <S.Textarea ref={textareaRef} maxRows={8} autoFocus />
      </S.FeedbackDialogContent>

      <DialogActions sx={{ color: 'grey' }}>
        <Button color="inherit" onClick={onClose}>
          취소
        </Button>
        <Button onClick={handleClickSend}>전송</Button>
      </DialogActions>

      {isLoading && <CircularProgressWithBlur scope="global" />}
    </S.FeedbackDialog>
  );
};

export default FeedbackDialog;
