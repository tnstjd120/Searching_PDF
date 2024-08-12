import { Fragment } from 'react/jsx-runtime';
import useGetChatMessages from '../../hooks/useGetChatMessages';
import * as S from './MessageList.styled';
import Message from '../Message/Message';
import ProfileImage from '../ProfileImage/ProfileImage';
import CircularProgressWithBlur from '@/components/common/Progress/CircularProgressWithBlur';
import MessageByLoading from '../Message/MessageByLoading';
import { useEffect, useRef } from 'react';

const MessageList = () => {
  const { chatMessages, isLoading } = useGetChatMessages();

  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageEndRef.current) messageEndRef.current.scrollIntoView();
  }, [chatMessages]);

  return (
    <S.StyledMessageList>
      {chatMessages.map((item, i) => {
        const questionMessage = (
          <Message
            key={item.question.id}
            message={item.question.message}
            time={item.question.createdAt.split('T')[1]}
            isMe
          />
        );

        const answerMessages = item.answer ? (
          item.answer.message.map((answerMessage, answerMessageIndex) => {
            const answerMessageTime =
              item.answer?.message.length === answerMessageIndex + 1 ? item.answer.createdAt.split('T')[1] : undefined;
            return (
              <Message
                key={`answer-${answerMessageIndex}`}
                renderProfile={answerMessageIndex === 0 && <ProfileImage />}
                variant={answerMessageIndex > 0 ? 'radius' : undefined}
                message={answerMessage}
                engineLogId={answerMessageIndex === 0 && item.answer?.id}
                time={answerMessageTime}
                mt={answerMessageIndex > 0 ? '8px' : undefined}
              />
            );
          })
        ) : (
          <MessageByLoading />
        );

        return (
          <Fragment key={i}>
            {questionMessage}
            {answerMessages}
          </Fragment>
        );
      })}

      {isLoading && <CircularProgressWithBlur scope="global" />}
      <div ref={messageEndRef} />
    </S.StyledMessageList>
  );
};

export default MessageList;