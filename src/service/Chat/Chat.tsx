import { CardHeader } from '@mui/material';
import * as S from './Chat.styled';
import ChatContent from './ChatContent/ChatContent';
import ChatForm from './ChatForm/ChatForm';

const Chat = () => {
  return (
    <S.ChatCard>
      <CardHeader title="검색 내용" action={<S.SearchModeSwitch />} />

      <ChatContent />
      <ChatForm />
    </S.ChatCard>
  );
};

export default Chat;
