import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";

export type Question = {
  id: string;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type DataType = {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
  removeQuestions: () => void;
};

export const useQuestions = create(
  persist<DataType>(
    (set, get) => ({
      questions: [],
      setQuestions: (questions) => set({ questions }),
      removeQuestions: () => set({ questions: [] }),
    }),
    {
      name: "questions",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
