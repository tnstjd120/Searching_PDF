import { useActiveEngine } from '@/store/useChatStore';
import { postChatMessage } from '../api/post';
import { IGptAnswer, IQuantumAnswer } from '@/types/Chat';

const usePostChatMessage = () => {
  const activeEngine = useActiveEngine();

  const postMessage = async (question: string): Promise<IQuantumAnswer | IGptAnswer | undefined> => {
    const response = await postChatMessage(activeEngine, question);
    return response;
  };

  return postMessage;
};

export default usePostChatMessage;
