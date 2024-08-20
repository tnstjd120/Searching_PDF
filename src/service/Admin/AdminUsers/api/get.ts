import { API_PATH } from '@/api/API_PATH';
import { api } from '@/api/axios';

export const getUsers = async () => {
  const response = await api.get(API_PATH.USERS);
  return response.data.result;
};
