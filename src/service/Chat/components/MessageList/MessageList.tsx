import { Fragment } from 'react/jsx-runtime';
import useGetChatMessages from '../../hooks/useGetChatMessages';
import * as S from './MessageList.styled';
import Message from '../Message/Message';
import ProfileImage from '../ProfileImage/ProfileImage';
import CircularProgressWithBlur from '@/components/common/Progress/CircularProgressWithBlur';
import MessageByLoading from '../Message/MessageByLoading';

const MessageList = () => {
  const { chatMessages, isLoading } = useGetChatMessages();

  return (
    <S.StyledMessageList>
      {chatMessages.map((item, i) => {
        const questionMessage = (
          <Message
            key={`question-${i}`}
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
    </S.StyledMessageList>
  );
};

export default MessageList;
