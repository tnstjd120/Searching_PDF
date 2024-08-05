import { IGptEngineChat, IQuantumEngineChat, TQuantumAnswerRank } from '@/types/Chat';
import { EngineType } from '@/types/Engine';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TQuantumAnswerRankWithIndex = TQuantumAnswerRank & { index: number };

interface IState {
  activeEngine: EngineType;
  [EngineType.Quantum]: IQuantumEngineChat[];
  [EngineType.ChatGPT]: IGptEngineChat[];
  chatRanks: TQuantumAnswerRank[] | null;
  activeChatRank: TQuantumAnswerRankWithIndex | null;
}

interface IAction {
  setActiveEngine: (engineType: EngineType) => void;
  setChatMessages: (messages: IQuantumEngineChat[] | IGptEngineChat[]) => void;
  setChatRanks: (ranks: TQuantumAnswerRank[] | null) => void;
  setActiveChatRank: (rank: TQuantumAnswerRankWithIndex | null) => void;
  appendChatMessage: (message: IQuantumEngineChat | IGptEngineChat) => void;
}

const useChatStore = create(
  persist<IState & IAction>(
    (set) => ({
      activeEngine: EngineType.Quantum,
      [EngineType.Quantum]: [],
      [EngineType.ChatGPT]: [],
      chatRanks: null,
      activeChatRank: null,

      setActiveEngine: (engineType: EngineType) => {
        set({ activeEngine: engineType });
      },
      setChatMessages: (messages: IQuantumEngineChat[] | IGptEngineChat[]) => {
        set((state) => ({ [state.activeEngine]: messages }));
      },
      setChatRanks: (ranks: TQuantumAnswerRank[] | null) => {
        set(() => ({ chatRanks: ranks }));
      },
      setActiveChatRank: (rank: TQuantumAnswerRankWithIndex | null) => {
        set(() => ({ activeChatRank: rank }));
      },
      appendChatMessage: (message: IQuantumEngineChat | IGptEngineChat) => {
        set((state) => {
          const activeEngine = state.activeEngine;
          return { [activeEngine]: { ...state[activeEngine], message } };
        });
      },
    }),
    { name: 'useChatStore', getStorage: () => sessionStorage },
  ),
);

export const useActiveEngine = () => useChatStore((state) => state.activeEngine);
export const useChatMessages = (engineType: EngineType) => useChatStore((state) => state[engineType]);
export const useChatRanks = () => useChatStore((state) => state.chatRanks);
export const useActiveChatRank = () => useChatStore((state) => state.activeChatRank);
export const useIsActive = (index: number) => useChatStore((state) => state.activeChatRank?.index === index);

export const useSetActiveEngine = () => useChatStore((state) => state.setActiveEngine);
export const useSetChatMessages = () => useChatStore((state) => state.setChatMessages);
export const useSetChatRanks = () => useChatStore((state) => state.setChatRanks);
export const useSetActiveChatRank = () => useChatStore((state) => state.setActiveChatRank);
export const useAppendChatMessage = () => useChatStore((state) => state.appendChatMessage);
