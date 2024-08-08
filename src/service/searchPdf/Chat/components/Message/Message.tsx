import { formatTimeWithPeriod } from '@/utils/formatDate';
import * as S from './Message.styled';
import { useActiveEngine } from '@/store/useChatStore';
import { TMessage } from '@/types/Chat';
import Typewriter from 'typewriter-effect';
import { useEffect, useRef } from 'react';

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

  const messageEndRef = useRef<HTMLDivElement>(null);
  const messageContainerRef = useRef<HTMLLIElement>(null);

  const scrollToBottom = () => {
    if (messageEndRef.current) {
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

  useEffect(() => {
    scrollToBottom();
  }, [message]);

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

      <div ref={messageEndRef} />
    </S.StyledMessage>
  );
};

export default Message;
