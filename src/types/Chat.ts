export type TEngine = 'limeEngineQt' | 'answerEngineQt' | 'gptEngine';
export type TMessage = {
  type: 'text' | 'image';
  value: string;
  typing?: boolean;
};

// ======================== Quantum Engine ======================== //
export type TQuantumAnswerRank = {
  text: string;
  pdfPath?: string;
  page?: number;
  prob: number;
};

export interface IQuantumQuestion {
  id: number;
  message: string;
  createdAt: string;
}

export interface IQuantumAnswer {
  id: number;
  message: TMessage[];
  rank: TQuantumAnswerRank[];
  engineId: TEngine;
  createdAt: string;
}

export interface IQuantumEngineChat {
  question: IQuantumQuestion;
  answer: IQuantumAnswer | null;
}

// ======================== ChatGPT Engine ======================== //

export interface IGptQuestion {
  id: number;
  message: string;
  createdAt: string;
}

export interface IGptAnswer {
  id: number;
  message: TMessage[];
  engineId: TEngine;
  createdAt: string;
}

export interface IGptEngineChat {
  question: IGptQuestion;
  answer: IGptAnswer | null;
}
