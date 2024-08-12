import { formatTimeWithPeriod } from '@/utils/formatDate';
import * as S from './Message.styled';
import { useActiveEngine, useSetIsTyping } from '@/store/useChatStore';
import { TMessage } from '@/types/Chat';
import Typewriter from 'typewriter-effect';
import { RefObject, useEffect, useRef, useState } from 'react';
import { FeedbackOutlined } from '@mui/icons-material';
import { postChatFeedback } from '../../api/post';
import FeedbackDialog from '../FeedbackDialog/FeedbackDialog';

interface IMessage {
  renderProfile?: React.ReactNode;
  variant?: 'speechBubble' | 'radius';
  message: TMessage | string;
  engineLogId?: number | false;
  isMe?: boolean;
  time?: string;
  mt?: string;
  messageEndRef?: RefObject<HTMLDivElement>;
}

const Message = ({
  renderProfile,
  variant = 'speechBubble',
  message,
  engineLogId,
  isMe,
  time,
  mt,
  messageEndRef,
}: IMessage) => {
  const activeEngine = useActiveEngine();
  const setIsTyping = useSetIsTyping();

  const [openFeedback, setOpenFeedback] = useState(false);

  const timeFormat = time ? formatTimeWithPeriod(time) : '';

  const messageContainerRef = useRef<HTMLLIElement>(null);

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

  const handleClickFeedback = async (engineLogId: number) => {
    const responseFeedback = await postChatFeedback(engineLogId);
    console.log('responseFeedback: ', responseFeedback);
  };

  return (
    <S.StyledMessage ref={messageContainerRef} isMe={Boolean(isMe)} sx={{ mt: `${mt} !important` }}>
      <S.ProfileArea>{renderProfile && renderProfile}</S.ProfileArea>

      <S.StyledMessageInner isMe={Boolean(isMe)} activeEngine={activeEngine} time={timeFormat} variant={variant}>
        {typeof message === 'string' ? (
          message
        ) : message.type === 'image' ? (
          <img src={`${import.meta.env.VITE_APP_BASE_STORAGE_URL}${message.value}`} />
        ) : message.typing ? (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(message.value)
                .callFunction(() => {
                  console.log('타이핑 끝');
                  setIsTyping(false);
                })
                .start();
            }}
            options={{
              delay: 10,
            }}
          />
        ) : (
          message.value
        )}
      </S.StyledMessageInner>

      <FeedbackDialog open={openFeedback} onClose={handleCloseFeedbackDialog} />

      {!isMe && engineLogId && (
        <S.FeedBackButton onClick={handleOpenFeedbackDialog}>
          <FeedbackOutlined />
        </S.FeedBackButton>
      )}
    </S.StyledMessage>
  );
};

export default Message;