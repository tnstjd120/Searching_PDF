import { IUserTokenParsing } from '@/types/User';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface IUseUserState extends Omit<IUserTokenParsing, 'iat' | 'exp'> {}

export interface IUseUserAction {
  updateUser: (userInfo: IUseUserState) => void;
}

interface IUseUserStore {
  state: IUseUserState;
  action: IUseUserAction;
}

const useUserStore = create(
  persist<IUseUserStore>(
    (set) => ({
      state: {
        userId: '',
        userName: '',
        userRole: 'Basic',
      },
      action: {
        updateUser: (userInfo: IUseUserState) => set((prev) => ({ ...prev, ...userInfo })),
      },
    }),
    { name: 'useUserStore', getStorage: () => sessionStorage },
  ),
);

export default useUserStore;
