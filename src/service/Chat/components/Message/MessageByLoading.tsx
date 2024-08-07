import { useActiveEngine } from '@/store/useChatStore';
import * as S from './Message.styled';
import { useEffect, useRef } from 'react';
import DotLoader from '@/components/common/Loader/DotLoader';
import ProfileImage from '../ProfileImage/ProfileImage';

const MessageByLoading = () => {
  const activeEngine = useActiveEngine();

  const messageEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <S.StyledMessage isMe={false} sx={{ mt: '8px' }}>
      <S.ProfileArea>
        <ProfileImage />
      </S.ProfileArea>

      <S.StyledMessageInner isMe={false} activeEngine={activeEngine} time="" variant="speechBubble">
        <DotLoader />
      </S.StyledMessageInner>

      <div ref={messageEndRef} />
    </S.StyledMessage>
  );
};

export default MessageByLoading;
