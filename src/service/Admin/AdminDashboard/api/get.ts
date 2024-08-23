import { API_PATH } from '@/api/API_PATH';
import { api } from '@/api/axios';
import { IDashboard } from '@/types/AdminDashboard';

export const getAdminDashboard = async (): Promise<IDashboard> => {
  const response = await api.get(API_PATH.DASHBOARD);
  return response.data.result;
};
