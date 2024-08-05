import { formatTimeWithPeriod } from '@/utils/formatDate';
import * as S from './Message.styled';

interface IMessage {
  renderProfile?: React.ReactNode;
  variant?: 'speechBubble' | 'radius';
  message: string;
  isMe?: boolean;
  time?: string;
  mt?: string;
}

const Message = ({ renderProfile, variant = 'speechBubble', message, isMe, time, mt }: IMessage) => {
  const timeFormat = time ? formatTimeWithPeriod(time) : '';

  return (
    <S.StyledMessage isMe={Boolean(isMe)} sx={{ mt: `${mt} !important` }}>
      <S.ProfileArea>{renderProfile && renderProfile}</S.ProfileArea>

      <S.StyledMessageInner isMe={Boolean(isMe)} time={timeFormat} variant={variant}>
        {message}
      </S.StyledMessageInner>
    </S.StyledMessage>
  );
};

export default Message;
