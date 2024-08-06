import { CardHeader } from '@mui/material';
import * as S from './Chat.styled';
import ChatContent from './ChatContent/ChatContent';
import ChatForm from './ChatForm/ChatForm';
import { EngineType } from '@/types/Engine';
import { ChangeEvent, ForwardedRef, forwardRef } from 'react';
import { useActiveEngine, useSetActiveEngine } from '@/store/useChatStore';

interface IChat {}

const Chat = (_props: IChat, ref: ForwardedRef<HTMLDivElement>) => {
  const activeEngine = useActiveEngine();
  const setActiveEngine = useSetActiveEngine();

  const handleChangeEngineType = (event: ChangeEvent<HTMLInputElement>) => {
    const engineType = event.currentTarget.checked ? EngineType.Quantum : EngineType.ChatGPT;
    setActiveEngine(engineType);
  };

  return (
    <S.ChatCard ref={ref} activeEngine={activeEngine}>
      <CardHeader
        title="검색 내용"
        action={<S.SearchModeSwitch onChange={handleChangeEngineType} defaultChecked />}
        defaultChecked={false}
        sx={{ backgroundColor: 'white' }}
      />

      <ChatContent />
      <ChatForm />
    </S.ChatCard>
  );
};

export default forwardRef(Chat);
