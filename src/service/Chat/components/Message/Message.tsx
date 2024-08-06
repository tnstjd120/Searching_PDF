import { formatTimeWithPeriod } from '@/utils/formatDate';
import * as S from './Message.styled';
import { useActiveEngine } from '@/store/useChatStore';
import { TMessage } from '@/types/Chat';

interface IMessage {
  renderProfile?: React.ReactNode;
  variant?: 'speechBubble' | 'radius';
  message: TMessage | string;
  isMe?: boolean;
  time?: string;
  mt?: string;
}

const Message = ({ renderProfile, variant = 'speechBubble', message, isMe, time, mt }: IMessage) => {
  const activeEngine = useActiveEngine();
  const timeFormat = time ? formatTimeWithPeriod(time) : '';

  return (
    <S.StyledMessage isMe={Boolean(isMe)} sx={{ mt: `${mt} !important` }}>
      <S.ProfileArea>{renderProfile && renderProfile}</S.ProfileArea>

      <S.StyledMessageInner isMe={Boolean(isMe)} activeEngine={activeEngine} time={timeFormat} variant={variant}>
        {typeof message === 'string' ? (
          message
        ) : message.type === 'image' ? (
          <img src={`${import.meta.env.VITE_APP_BASE_STORAGE_URL}${message.value}`} />
        ) : (
          message.value
        )}
      </S.StyledMessageInner>
    </S.StyledMessage>
  );
};

export default Message;
