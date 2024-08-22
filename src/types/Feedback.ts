import { TEngine, TMessage } from './Chat';

export interface IFeedbackResponse {
  id: number;
  message: string;
  engineId: number;
  engineType: TEngine;
  isRead: 0 | 1;
  sender: { id: number; userName: string };
  readUser: { id: number; userName: string };
  readAt: string;
  createdAt: string;
}

type TQuestion = {
  id: number;
  message: string;
  createdAt: string;
};

type TAnswer = {
  id: number;
  message: Omit<TMessage, 'typing'>[];
  engineType: TEngine;
  prob: number;
  pdfPath: string;
  page: number;
  createdAt: string;
};

export interface IFeedbackResponseByTarget {
  feedback: Omit<IFeedbackResponse, 'engineId' | 'engineType'>;
  question: TQuestion;
  answer: TAnswer;
}
