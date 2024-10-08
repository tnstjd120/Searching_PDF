import { API_PATH } from '@/api/API_PATH';
import { api } from '@/api/axios';
import { IGptAnswer, IQuantumAnswer } from '@/types/Chat';
import { EngineType } from '@/types/Engine';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

export const postChatMessage = async (
  engineType: EngineType,
  question: string,
): Promise<IQuantumAnswer | IGptAnswer | undefined> => {
  try {
    const chatPath = engineType === EngineType.Quantum ? API_PATH.CHAT_QT : API_PATH.CHAT_GPT;
    const response = await api.post(chatPath, { question: question });
    return response.data.result.answer;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error?.response?.data.message;
      enqueueSnackbar(message || '문제가 발생했습니다.', { variant: 'error' });
    } else {
      enqueueSnackbar('문제가 발생했습니다.', { variant: 'error' });
    }

    throw new Error(`postChatMessage Error - ${error}`);
  }
};

export const postChatFeedback = async (engineLogId: number, feedback: string) => {
  if (engineLogId === 0) return;

  const response = await api.post(API_PATH.FEEDBACK, { engineId: engineLogId, feedback: feedback });
  return response.data.result;
};
