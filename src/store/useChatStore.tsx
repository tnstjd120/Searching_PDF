import { IGptEngineChat, IQuantumEngineChat } from '@/types/Chat';
import { EngineType } from '@/types/Engine';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUseChatState {
  activeEngine: EngineType;
  [EngineType.Quantum]: IQuantumEngineChat[];
  [EngineType.ChatGPT]: IGptEngineChat[];
}

interface IUseChatAction {
  setActiveEngine: (engineType: EngineType) => void;
  setChatMessages: (messages: IQuantumEngineChat[] | IGptEngineChat[]) => void;
  appendChatMessage: (message: IQuantumEngineChat | IGptEngineChat) => void;
}

interface IUseChatStore {
  state: IUseChatState;
  action: IUseChatAction;
}

const useChatStore = create(
  persist<IUseChatStore>(
    (set) => ({
      state: {
        activeEngine: EngineType.Quantum,
        [EngineType.Quantum]: [],
        [EngineType.ChatGPT]: [],
      },
      action: {
        setActiveEngine: (engineType: EngineType) => {
          set((prevState) => ({ ...prevState, activeEngine: engineType }));
        },
        setChatMessages: (messages: IQuantumEngineChat[] | IGptEngineChat[]) => {
          set((prevState) => ({ ...prevState, [prevState.state.activeEngine]: messages }));
        },
        appendChatMessage: (message: IQuantumEngineChat | IGptEngineChat) => {
          set((prevState) => {
            const activeEngine = prevState.state.activeEngine;
            return { ...prevState, [activeEngine]: { ...prevState.state[activeEngine], message } };
          });
        },
      },
    }),
    { name: 'useChatStore', getStorage: () => sessionStorage },
  ),
);

export default useChatStore;
