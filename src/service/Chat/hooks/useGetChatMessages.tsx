import { useActiveEngine, useChatMessages, useSetChatMessages, useSetChatRanks } from '@/store/useChatStore';
import { getChatMessages } from '../api/get';
import { useEffect, useState } from 'react';
import { IGptAnswer, IQuantumAnswer } from '@/types/Chat';

const useGetChatMessages = () => {
  const activeEngine = useActiveEngine();
  const setChatMessages = useSetChatMessages();
  const setChatRank = useSetChatRanks();

  const [isLoading, setIsLoading] = useState(false);
  const chatMessages = useChatMessages(activeEngine);

  const isQuantumAnswer = (answer: IQuantumAnswer | IGptAnswer): answer is IQuantumAnswer => {
    return (answer as IQuantumAnswer).rank !== undefined;
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await getChatMessages(activeEngine);
      if (response) {
        setChatMessages(response);

        const lastMessage = response[response.length - 1];
        if (isQuantumAnswer(lastMessage.answer)) {
          setChatRank(lastMessage.answer.rank);
        } else {
          setChatRank(null);
        }
      }
    })().finally(() => setIsLoading(false));
  }, [activeEngine]);

  return { chatMessages, isLoading };
};

export default useGetChatMessages;
