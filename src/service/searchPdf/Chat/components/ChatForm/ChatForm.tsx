import { SendSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import * as S from './ChatForm.styled';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useAppendChatMessage, useIsTyping, useSetIsTyping } from '@/store/useChatStore';
import usePostChatMessage from '../../hooks/usePostChatMessage';

const ChatForm = () => {
  const postChatMessage = usePostChatMessage();
  const appendChatMessage = useAppendChatMessage();
  const isTyping = useIsTyping();
  const setIsTyping = useSetIsTyping();

  const [sendMessage, setSendMessage] = useState('');

  const handleChangeSendMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    setSendMessage(value);
  };

  const handleKeyUpWithEnter = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.nativeEvent.isComposing) return;

    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  const handleSend = async () => {
    if (sendMessage) {
      const offsetDate = new Date().getTimezoneOffset() * 60000;
      const newQuestion = {
        id: +new Date(),
        message: sendMessage,
        createdAt: new Date(Date.now() - offsetDate).toISOString(),
      };

      appendChatMessage({ question: newQuestion, answer: null }, 'question');
      setSendMessage('');
      setIsTyping(true);

      const answerResponse = await postChatMessage(newQuestion.message).catch(() => {
        setIsTyping(false);
      });
      if (answerResponse) appendChatMessage({ question: newQuestion, answer: answerResponse }, 'answer');
    }
  };

  return (
    <S.StyledChatForm>
      <textarea
        placeholder="메시지를 입력해주세요."
        value={sendMessage}
        onChange={handleChangeSendMessage}
        onKeyDown={handleKeyUpWithEnter}
        disabled={isTyping}
      />

      <IconButton className="send-button" onClick={handleSend} disabled={!sendMessage}>
        <SendSharp sx={{ fontSize: '1.2rem' }} />
      </IconButton>
    </S.StyledChatForm>
  );
};

export default ChatForm;