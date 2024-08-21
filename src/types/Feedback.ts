import { TEngine } from './Chat';

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
