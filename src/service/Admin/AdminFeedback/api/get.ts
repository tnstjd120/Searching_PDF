import { API_PATH } from '@/api/API_PATH';
import { api } from '@/api/axios';

export const getFeedback = async ({ numberPerPage, pageNumber }: { numberPerPage: number; pageNumber: number }) => {
  const response = await api.get(`${API_PATH.FEEDBACK}`, {
    params: { numberPerPage, pageNumber },
  });
  return response.data.result;
};
