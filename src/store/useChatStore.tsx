import { IGptEngineChat, IQuantumAnswer, IQuantumEngineChat, TQuantumAnswerRank } from '@/types/Chat';
import { EngineType } from '@/types/Engine';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TQuantumAnswerRankWithIndex = TQuantumAnswerRank & { index: number };
type TAppend = 'question' | 'answer';

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
  setActiveChatRank: (rank: TQuantumAnswerRankWithIndex | null) => void;
  appendChatMessage: (message: IQuantumEngineChat | IGptEngineChat, appendType: TAppend) => void;
  initializeChatStore: () => void;
}

const initialState = {
  activeEngine: EngineType.Quantum,
  [EngineType.Quantum]: [],
  [EngineType.ChatGPT]: [],
  chatRanks: null,
  activeChatRank: null,
};

const isQuantumAnswer = (message: IQuantumEngineChat | IGptEngineChat): message is IQuantumEngineChat => {
  return !!(message?.answer as IQuantumAnswer)?.rank;
};

const useChatStore = create(
  persist<IState & IAction>(
    (set) => ({
      ...initialState,

      setActiveEngine: (engineType: EngineType) => {
        set({ activeEngine: engineType });
      },
      setChatMessages: (messages: IQuantumEngineChat[] | IGptEngineChat[]) => {
        set((state) => {
          const lastMessage = messages[messages.length - 1];
          return {
            [state.activeEngine]: messages,
            chatRanks: isQuantumAnswer(lastMessage) ? lastMessage.answer?.rank || null : null,
            activeChatRank:
              isQuantumAnswer(lastMessage) && lastMessage.answer ? { ...lastMessage.answer?.rank[0], index: 0 } : null,
          };
        });
      },
      setActiveChatRank: (rank: TQuantumAnswerRankWithIndex | null) => {
        set(() => ({ activeChatRank: rank }));
      },
      appendChatMessage: (message: IQuantumEngineChat | IGptEngineChat, appendType: TAppend) => {
        set((state) => {
          const activeEngine = state.activeEngine;

          if (appendType === 'question') {
            return { [activeEngine]: { ...state[activeEngine], message } };
          } else {
            const chatMessages = [...state[activeEngine]];
            const lastMessage = chatMessages.pop();
            const updateMessage = { ...lastMessage, answer: message };
            return { [activeEngine]: { ...chatMessages, updateMessage } };
          }
        });
      },
      initializeChatStore: () => {
        set({ ...initialState });
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
export const useSetActiveChatRank = () => useChatStore((state) => state.setActiveChatRank);
export const useAppendChatMessage = () => useChatStore((state) => state.appendChatMessage);
export const useInitializeChatStore = () => useChatStore((state) => state.initializeChatStore);
