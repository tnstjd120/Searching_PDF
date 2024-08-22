import { Fragment } from 'react/jsx-runtime';
import useGetChatMessages from '../../hooks/useGetChatMessages';
import * as S from './MessageList.styled';
import Message from '../Message/Message';
import ProfileImage from '../ProfileImage/ProfileImage';
import CircularProgressWithBlur from '@/components/common/Progress/CircularProgressWithBlur';
import MessageByLoading from '../Message/MessageByLoading';

interface IMessageList {
  readOnly?: boolean;
}

const MessageList = ({ readOnly = false }: IMessageList) => {
  const { chatMessages, isLoading } = useGetChatMessages(readOnly);

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
                renderProfile={
                  answerMessageIndex === 0 && (
                    <ProfileImage
                      engineType={item.answer?.engineType ?? 'answerEngineQt'}
                      color={item.answer?.engineType === 'answerEngineQt' ? '#e2e6d9' : '#ffffff'}
                    />
                  )
                }
                variant={answerMessageIndex > 0 ? 'radius' : undefined}
                message={answerMessage}
                engineLogId={answerMessageIndex === 0 && item.answer?.id}
                time={answerMessageTime}
                mt={answerMessageIndex > 0 ? '8px' : undefined}
                messageColor={item.answer?.engineType === 'answerEngineQt' ? '#e2e6d9' : '#ffffff'}
                readOnly={readOnly}
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
