import { useState } from 'react';
import { postChatFeedback } from '../api/post';
import { enqueueSnackbar } from 'notistack';
import axios from 'axios';

const usePostChatFeedback = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const useRequest = async (engineLogId: number, feedback: string) => {
    setIsLoading(true);

    try {
      const response = await postChatFeedback(engineLogId, feedback);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error?.response?.data.message;
        enqueueSnackbar(message || '문제가 발생했습니다.', { variant: 'error' });
      } else {
        enqueueSnackbar('문제가 발생했습니다.', { variant: 'error' });
      }
      setError(error as Error);
      throw new Error(`postChatFeedback Error - ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { useRequest, isLoading, error };
};

export default usePostChatFeedback;
