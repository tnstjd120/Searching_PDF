import { SendSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import * as S from './ChatForm.styled';

const ChatForm = () => {
  return (
    <S.StyledChatForm>
      <textarea placeholder="메시지를 입력해주세요." />

      <IconButton className="send-button">
        <SendSharp sx={{ fontSize: '1.2rem' }} />
      </IconButton>
    </S.StyledChatForm>
  );
};

export default ChatForm;
