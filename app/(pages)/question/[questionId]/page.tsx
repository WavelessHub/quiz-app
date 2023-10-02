"use client";

import { shuffleArray } from "@/functions/suffleArray";
import { parseText } from "@/functions/parseText";

import { useQuestions } from "@/hooks/useQuestions";
import { useState, useEffect } from "react";
import { NextPage } from "next";

import QuizCard from "@/components/QuizCard";

interface Props {
  params: { questionId: string };
}

const Page: NextPage<Props> = ({ params }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { questions } = useQuestions();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const question = questions
    .filter((q) => q.id === params.questionId)
    .map((data) => {
      const { correct_answer, incorrect_answers, question } = data;

      return {
        ...data,
        question: parseText(question),
        options: shuffleArray([
          parseText(correct_answer),
          ...incorrect_answers.map((answer) => parseText(answer)),
        ]),
      };
    })[0];

  return (
    <div className="p-4 w-[50%]">
      <QuizCard {...question} />
    </div>
  );
};

export default Page;
