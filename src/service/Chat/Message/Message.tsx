import { formatTimeWithPeriod } from '@/utils/formatDate';
import * as S from './Message.styled';

interface IMessage {
  message: string;
  isMe?: boolean;
  time?: string;
}

const Message = ({ message, isMe, time }: IMessage) => {
  const timeFormat = time ? formatTimeWithPeriod(time) : '';

  return (
    <S.StyledMessage isMe={Boolean(isMe)}>
      <S.StyledMessageInner isMe={Boolean(isMe)} time={timeFormat}>
        {message}
      </S.StyledMessageInner>
    </S.StyledMessage>
  );
};

export default Message;
