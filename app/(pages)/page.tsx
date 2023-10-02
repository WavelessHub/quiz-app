"use client";

import StartQuizCard from "@/components/StartQuizCard";

import { useQuestions } from "@/hooks/useQuestions";
import { useAnswers } from "@/hooks/useAnswers";

import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  const { removeQuestions } = useQuestions();
  const { removeAnswers } = useAnswers();

  useEffect(() => {
    setIsMounted(true);

    removeQuestions();
    removeAnswers();
  }, [removeAnswers, removeQuestions]);

  if (!isMounted) return null;

  return <StartQuizCard />;
}
