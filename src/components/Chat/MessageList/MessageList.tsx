import Message from '../Message/Message';
import * as S from './MessageList.styled';

const MessageList = () => {
  return (
    <S.StyledMessageList>
      {Array(30)
        .fill(0)
        .map((_, i) => (
          <Message
            key={i}
            message={`안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요안녕하세요안녕하세요 안녕하세요안녕하세요안녕하세요 안녕하세요안녕하세요안녕하세요 ${i}`}
            isMe={i % 3 === 0}
            time={'14:15'}
          />
        ))}
    </S.StyledMessageList>
  );
};

export default MessageList;
