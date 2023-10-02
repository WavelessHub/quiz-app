import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";

type Answer = {
  question: string;
  question_id: string;
  user_answer: string;
  correct_answer: string;
};

type Data = {
  answers: Answer[];
  addAnswer: (data: Answer) => void;
  changeAnswer: (id: string, data: Answer) => void;
  removeAnswers: () => void;
};

export const useAnswers = create(
  persist<Data>(
    (set, get) => ({
      answers: [],
      addAnswer: (data) => set({ answers: [...get().answers, data] }),
      changeAnswer: (id, data) =>
        set({
          answers: get().answers.map((answer) =>
            answer.question_id === id ? data : answer
          ),
        }),
      removeAnswers: () => set({ answers: [] }),
    }),
    {
      name: "answers",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
