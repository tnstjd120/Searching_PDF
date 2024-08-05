export type TEngineId = 'limeEngineQt' | 'answerEngineQt' | 'gptEngine';

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
  message: string[];
  rank: TQuantumAnswerRank[];
  engineId: TEngineId;
  createdAt: string;
}

export interface IQuantumEngineChat {
  question: IQuantumQuestion;
  answer: IQuantumAnswer;
}

// ======================== ChatGPT Engine ======================== //

export interface IGptQuestion {
  message: string;
  createdAt: string;
}

export interface IGptAnswer {
  message: string[];
  engineId: TEngineId;
  createdAt: string;
}

export interface IGptEngineChat {
  question: IGptQuestion;
  answer: IGptAnswer;
}
