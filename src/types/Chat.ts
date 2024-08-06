export type TEngine = 'limeEngineQt' | 'answerEngineQt' | 'gptEngine';
export type TMessage = {
  type: 'text' | 'image';
  value: string;
};

// ======================== Quantum Engine ======================== //
export type TQuantumAnswerRank = {
  text: string;
  pdfPath?: string;
  page?: number;
  prob: number;
};

export interface IQuantumQuestion {
  message: string;
  createdAt: string;
}

export interface IQuantumAnswer {
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
  message: string;
  createdAt: string;
}

export interface IGptAnswer {
  message: TMessage[];
  engineId: TEngine;
  createdAt: string;
}

export interface IGptEngineChat {
  question: IGptQuestion;
  answer: IGptAnswer | null;
}
