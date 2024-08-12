import { IUserTokenParsing } from '@/types/User';
import { jwtDecode } from 'jwt-decode';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IState extends Omit<IUserTokenParsing, 'iat' | 'exp'> {}

interface IAction {
  loginUser: (token: string) => void;
}

interface IStore extends IAction {
  state: IState;
}

const initialState: IState = {
  id: 0,
  userId: '',
  userName: '',
  userRole: 'Basic',
};

const useUserStore = create(
  persist<IStore>(
    (set) => ({
      state: { ...initialState },

      loginUser: (token: string) =>
        set(() => {
          sessionStorage.setItem('token', token);
          const { id, userId, userName, userRole } = jwtDecode<Omit<IUserTokenParsing, 'iat' | 'exp'>>(token);
          return { state: { id, userId, userName, userRole } };
        }),
    }),
    { name: 'useUserStore', getStorage: () => sessionStorage },
  ),
);

export const useUserInfo = () => useUserStore((state) => state.state);

export const useSetUserInfo = () => useUserStore((state) => state.loginUser);
