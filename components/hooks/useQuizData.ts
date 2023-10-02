import { parseText } from "@/functions/parseText";

import { useQuestions } from "@/hooks/useQuestions";
import { useAnswers } from "@/hooks/useAnswers";

import { useRouter } from "next/navigation";

interface Props {
  questionId: string;
  question: string;
}

export function useQuizData({ question, questionId }: Props) {
  const { answers, addAnswer, changeAnswer, removeAnswers } = useAnswers();
  const { questions } = useQuestions();

  const router = useRouter();

  const currentIndex = questions.findIndex((i) => i.id === questionId);
  const currentQuestionIndex = currentIndex + 1;

  const nextQuestion = questions[currentQuestionIndex];
  const previousQuestion = questions[currentIndex - 1];

  const currentQuestionAnswer = answers[currentIndex];

  const onSubmit = (answer: string) => {
    if (currentQuestionAnswer) {
      changeAnswer(currentQuestionAnswer.question_id, {
        ...currentQuestionAnswer,
        user_answer: parseText(answer),
      });
    } else {
      addAnswer({
        question_id: questionId,
        question,
        user_answer: parseText(answer),
        correct_answer: parseText(questions[currentIndex].correct_answer),
      });
    }
  };

  const goBack = () =>
    !previousQuestion
      ? router.replace("/")
      : router.push(`/question/${previousQuestion.id}`);

  const proceed = () =>
    currentQuestionAnswer &&
    router.replace(!nextQuestion ? "/results" : `/question/${nextQuestion.id}`);

  return {
    goBack,
    answers,
    proceed,
    onSubmit,
    currentIndex,
    nextQuestion,
    removeAnswers,
    currentQuestionIndex,
    currentQuestionAnswer,
  };
}
