import MessageList from '../MessageList/MessageList';
import * as S from './ChatContent.styled';

const ChatContent = () => {
  return (
    <S.StyledChatContent>
      <MessageList />
    </S.StyledChatContent>
  );
};

export default ChatContent;
