import { formatTimeWithPeriod } from '@/utils/formatDate';
import * as S from './Message.styled';
import { useActiveEngine } from '@/store/useChatStore';
import { TMessage } from '@/types/Chat';
import { useEffect, useRef, useState } from 'react';
import { FeedbackOutlined } from '@mui/icons-material';
import FeedbackDialog from '../FeedbackDialog/FeedbackDialog';

interface IMessage {
  renderProfile?: React.ReactNode;
  variant?: 'speechBubble' | 'radius';
  message: TMessage | string;
  engineLogId?: number | false;
  isMe?: boolean;
  time?: string;
  mt?: string;
  messageColor?: string;
  readOnly?: boolean;
}

const Message = ({
  renderProfile,
  variant = 'speechBubble',
  message,
  engineLogId,
  isMe,
  time,
  mt,
  messageColor,
  readOnly = false,
}: IMessage) => {
  const activeEngine = useActiveEngine();

  const [openFeedback, setOpenFeedback] = useState(false);

  const timeFormat = time ? formatTimeWithPeriod(time) : '';

  const messageContainerRef = useRef<HTMLLIElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageEndRef.current) messageEndRef.current.scrollIntoView();
  }, [message]);

  const handleOpenFeedbackDialog = () => {
    setOpenFeedback(true);
  };

  const handleCloseFeedbackDialog = () => {
    setOpenFeedback(false);
  };

  const scrollToBottom = () => {
    if (messageEndRef && messageEndRef.current) {
      messageEndRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      scrollToBottom();
    });

    if (messageContainerRef.current) {
      observer.observe(messageContainerRef.current);
    }

    return () => {
      if (messageContainerRef.current) {
        observer.unobserve(messageContainerRef.current);
      }
    };
  }, [messageContainerRef]);

  return (
    <S.StyledMessage ref={messageContainerRef} isMe={Boolean(isMe)} sx={{ mt: `${mt} !important` }}>
      <S.ProfileArea>{renderProfile && renderProfile}</S.ProfileArea>

      <S.StyledMessageInner
        isMe={Boolean(isMe)}
        activeEngine={activeEngine}
        time={timeFormat}
        variant={variant}
        messageColor={messageColor}
      >
        {typeof message === 'string' ? (
          message
        ) : message.type === 'image' ? (
          <img src={`/storage${message.value}`} />
        ) : (
          message.value
        )}
      </S.StyledMessageInner>

      <FeedbackDialog open={openFeedback} onClose={handleCloseFeedbackDialog} engineLogId={engineLogId || 0} />

      {!isMe && engineLogId && !readOnly && (
        <S.FeedBackButton onClick={handleOpenFeedbackDialog}>
          <FeedbackOutlined />
        </S.FeedBackButton>
      )}

      <div ref={messageEndRef} />
    </S.StyledMessage>
  );
};

export default Message;
