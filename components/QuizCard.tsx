"use client";

import { NextPage } from "next";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import AnswerOptions from "./common/AnswerOptions";

import { useQuizData } from "./hooks/useQuizData";

import { useEffect } from "react";

interface Props {
  id: string;
  type: string;
  category: string;
  question: string;
  options: string[];
  difficulty: string;
}

const QuizCard: NextPage<Props> = ({ id, question, options }) => {
  const {
    goBack,
    answers,
    proceed,
    onSubmit,
    currentIndex,
    nextQuestion,
    removeAnswers,
    currentQuestionIndex,
    currentQuestionAnswer,
  } = useQuizData({ question, questionId: id });

  useEffect(() => {
    if (currentIndex === 0 && answers.length === 0) removeAnswers();
  }, [currentIndex, answers, removeAnswers]);

  return (
    <Card className="border-none overflow-hidden sm:w-full">
      <div className="px-4 pt-2">
        <CardHeader className="text-xl font-medium">
          {currentQuestionIndex}. {question}
        </CardHeader>

        <CardContent>
          <AnswerOptions
            options={options}
            onSubmit={onSubmit}
            user_answer={currentQuestionAnswer?.user_answer}
          />
        </CardContent>
      </div>

      <Separator />

      <CardFooter className="p-4 w-full flex flex-row gap-x-4 items-center justify-between">
        <Button
          onClick={goBack}
          className="bg-slate-100 h-12 hover:bg-slate-200 text-black flex-1"
        >
          Back
        </Button>

        <Button
          onClick={proceed}
          className="bg-indigo-500 hover:bg-indigo-600 flex-1 h-12"
        >
          {!nextQuestion ? "Finish" : "Next"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
