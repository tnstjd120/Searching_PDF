export type TSender = 'limeEngineQt' | 'answerEngineQt' | 'gptEngine';

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
  sender: TSender;
  createdAt: string;
}

export interface IQuantumEngineChat {
  question: IQuantumQuestion;
  answer: IQuantumAnswer;
}

// ======================== ChatGPT Engine ======================== //
export type TGptAnswerRank = {
  text: string;
  pdfPath?: string;
  page?: number;
  prob: number;
};

export interface IGptQuestion {
  message: string;
  createdAt: string;
}

export interface IGptAnswer {
  message: string[];
  rank: TGptAnswerRank[];
  sender: TSender;
  createdAt: string;
}

export interface IGptEngineChat {
  question: IGptQuestion;
  answer: IGptAnswer;
}
