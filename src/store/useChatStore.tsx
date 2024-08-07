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

const updateChatState = (messages: IQuantumEngineChat[] | IGptEngineChat[]) => {
  const lastMessage = messages[messages.length - 1];
  const chatRanks = isQuantumAnswer(lastMessage) ? lastMessage.answer?.rank || null : null;
  const activeChatRank =
    isQuantumAnswer(lastMessage) && lastMessage.answer ? { ...lastMessage.answer.rank[0], index: 0 } : null;
  return { messages, chatRanks, activeChatRank };
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
          const { messages: updatedMessages, chatRanks, activeChatRank } = updateChatState(messages);

          return {
            [state.activeEngine]: updatedMessages,
            chatRanks: chatRanks,
            activeChatRank: activeChatRank,
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
            return { [activeEngine]: [...state[activeEngine], message] };
          } else {
            const chatMessages = [...state[activeEngine]];
            const lastMessage = chatMessages.pop();

            if (lastMessage && message.answer) {
              let updatedAnswerMessage;

              if ('rank' in message.answer) {
                updatedAnswerMessage = {
                  ...message.answer,
                  message: message.answer.message.map((msg) => (msg.type === 'text' ? { ...msg, typing: true } : msg)),
                };
              } else {
                updatedAnswerMessage = {
                  ...message.answer,
                  message: message.answer.message.map((msg) => (msg.type === 'text' ? { ...msg, typing: true } : msg)),
                };
              }

              const updatedMessage = { ...lastMessage, answer: updatedAnswerMessage };
              const messages = [...chatMessages, updatedMessage];

              if (messages.length > 0) {
                const secondLastMessage = messages[messages.length - 2];
                if (secondLastMessage.answer && secondLastMessage.answer.message) {
                  const updatedSecondLastAnswerMessage = secondLastMessage.answer.message.map((msg) => {
                    const { typing, ...rest } = msg;
                    return rest;
                  });
                  messages[messages.length - 2] = {
                    ...secondLastMessage,
                    answer: { ...secondLastMessage.answer, message: updatedSecondLastAnswerMessage },
                  };
                }
              }

              const { messages: updatedMessages, chatRanks, activeChatRank } = updateChatState(messages);
              return {
                [activeEngine]: updatedMessages,
                chatRanks: chatRanks,
                activeChatRank: activeChatRank,
              };
            }

            return state;
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
