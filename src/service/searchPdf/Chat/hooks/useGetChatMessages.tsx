import { useActiveEngine, useChatMessages, useSetChatMessages, useSetIsTyping } from '@/store/useChatStore';
import { getChatMessages, getChatMessagesWithAdmin } from '../api/get';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useGetChatMessages = (readOnly: boolean) => {
  const { userId } = useParams();

  const activeEngine = useActiveEngine();
  const setChatMessages = useSetChatMessages();
  const setIsTyping = useSetIsTyping();

  const [isLoading, setIsLoading] = useState(false);
  const chatMessages = useChatMessages(activeEngine);

  useEffect(() => {
    setIsTyping(false);
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      let response;

      if (readOnly && userId) {
        response = await getChatMessagesWithAdmin(userId);
      } else {
        response = await getChatMessages(activeEngine);
      }

      if (response) setChatMessages(response);
    })().finally(() => setIsLoading(false));
  }, [activeEngine]);

  return { chatMessages, isLoading };
};

export default useGetChatMessages;
