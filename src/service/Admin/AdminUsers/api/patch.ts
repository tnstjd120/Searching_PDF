import { API_PATH } from '@/api/API_PATH';
import { api } from '@/api/axios';

export const patchFeedback = async (feedbackId: string | number) => {
  const response = await api.patch(`${API_PATH.FEEDBACK}/${feedbackId}`);
  return response.data.result;
};
