import { API_PATH } from '@/api/API_PATH';
import { api } from '@/api/axios';
import { IGptEngineChat, IQuantumEngineChat } from '@/types/Chat';
import { EngineType } from '@/types/Engine';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

export const getChatMessages = async (
  engineType: EngineType,
): Promise<IQuantumEngineChat[] | IGptEngineChat[] | undefined> => {
  try {
    const chatPath = engineType === EngineType.Quantum ? API_PATH.CHAT_QT : API_PATH.CHAT_GPT;
    const response = await api.get(chatPath);

    return response.data.result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data.message;
      enqueueSnackbar(message || '문제가 발생했습니다.', { variant: 'error' });
    } else {
      enqueueSnackbar('문제가 발생했습니다.', { variant: 'error' });
    }

    throw new Error(`getChatMessages Error - ${error}`);
  }
};

export const getChatMessagesWithAdmin = async (userId: string | number) => {
  try {
    const response = await api.get(`${API_PATH.USERS}/${userId}`);
    return response.data.result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data.message;
      enqueueSnackbar(message || '문제가 발생했습니다.', { variant: 'error' });
    } else {
      enqueueSnackbar('문제가 발생했습니다.', { variant: 'error' });
    }

    throw new Error(`getChatMessages Error - ${error}`);
  }
};
