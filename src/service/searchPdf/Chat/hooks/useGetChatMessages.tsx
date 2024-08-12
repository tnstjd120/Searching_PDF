import { useActiveEngine, useChatMessages, useSetChatMessages, useSetIsTyping } from '@/store/useChatStore';
import { getChatMessages } from '../api/get';
import { useEffect, useState } from 'react';

const useGetChatMessages = () => {
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
      const response = await getChatMessages(activeEngine);
      if (response) setChatMessages(response);
    })().finally(() => setIsLoading(false));
  }, [activeEngine]);

  return { chatMessages, isLoading };
};

export default useGetChatMessages;
