import { SendSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import * as S from './ChatForm.styled';
import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';
import debounce from '@/utils/debounce';
import { useAppendChatMessage } from '@/store/useChatStore';

const ChatForm = () => {
  const appendChatMessage = useAppendChatMessage();
  const [activeSend, setActiveSend] = useState(false);

  const debounceCheckText = useCallback(
    debounce((text: string) => {
      setActiveSend(text.trim().length > 0);
    }, 300),
    [],
  );

  const handleChangeChatForm = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    debounceCheckText(value);
  };

  const handleKeyUpWithEnter = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (activeSend && event.key === 'Enter' && !event.shiftKey) {
      const { value } = event.currentTarget;

      const newQuestion = {
        message: value,
        createdAt: String(new Date()),
      };
      // TODO: ChatMessage question과 answer 구분해서 처리 하다가 말은 상태
      appendChatMessage({ question: newQuestion, answer: null }, 'question');
    }
  };

  return (
    <S.StyledChatForm>
      <textarea placeholder="메시지를 입력해주세요." onChange={handleChangeChatForm} onKeyUp={handleKeyUpWithEnter} />

      <IconButton className="send-button" disabled={!activeSend}>
        <SendSharp sx={{ fontSize: '1.2rem' }} />
      </IconButton>
    </S.StyledChatForm>
  );
};

export default ChatForm;
