import { API_PATH } from '@/api/API_PATH';
import { api } from '@/api/axios';

export const getUsers = async ({ numberPerPage, pageNumber }: { numberPerPage: number; pageNumber: number }) => {
  const response = await api.get(API_PATH.USERS, {
    params: { numberPerPage, pageNumber },
  });
  return response.data.result;
};

export const getFeedbackByUser = async (userPk: string | number) => {
  const response = await api.get(`${API_PATH.USERS}/${userPk}/feedback`);
  return response.data.result;
};

export const getFeedbackByTarget = async (feedbackPk: string | number) => {
  console.log('feedbackPk: ', feedbackPk);
  const response = await api.get(`${API_PATH.FEEDBACK}/${feedbackPk}`);
  return response.data.result;
};
