import { API_PATH } from '@/api/API_PATH';
import { api } from '@/api/axios';
import { IAdminDashboard } from '@/types/AdminDashboard';

export const getAdminDashboard = async (): Promise<IAdminDashboard> => {
  const response = await api.get(API_PATH.DASHBOARD);
  return response.data.result;
};
