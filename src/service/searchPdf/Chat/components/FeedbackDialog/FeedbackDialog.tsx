import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import * as S from './FeedbackDialog.styled';

interface IFeedbackDialog {
  open: boolean;
  onClose: () => void;
}

// TODO: Feedback POST 만들어야 됨.
// FIXME: 내부 도커 컨테이너끼리 통신할 수 있게 프록시나 nginx 세팅 해야함.

const FeedbackDialog = ({ open, onClose }: IFeedbackDialog) => {
  return (
    <S.FeedbackDialog open={open} onClose={onClose}>
      <DialogTitle>Feedback</DialogTitle>

      <S.FeedbackDialogContent>
        <DialogContentText>현재 답변에 대한 피드백을 적어주세요.</DialogContentText>

        <TextField variant="standard" />
      </S.FeedbackDialogContent>

      <DialogActions sx={{ color: 'grey' }}>
        <Button color="inherit" onClick={onClose}>
          취소
        </Button>
        <Button>전송</Button>
      </DialogActions>
    </S.FeedbackDialog>
  );
};

export default FeedbackDialog;
