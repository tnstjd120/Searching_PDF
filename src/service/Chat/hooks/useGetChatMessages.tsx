import { useActiveEngine, useChatMessages, useSetChatMessages } from '@/store/useChatStore';
import { getChatMessages } from '../api/get';
import { useEffect, useState } from 'react';

const useGetChatMessages = () => {
  const activeEngine = useActiveEngine();
  const setChatMessages = useSetChatMessages();

  const [isLoading, setIsLoading] = useState(false);
  const chatMessages = useChatMessages(activeEngine);

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
