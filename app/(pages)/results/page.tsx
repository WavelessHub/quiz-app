"use client";

import { useState, useEffect } from "react";

import { useAnswers } from "@/hooks/useAnswers";

import { useRouter } from "next/navigation";
import { NextPage } from "next";

import Results from "@/components/Results";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  const { answers } = useAnswers();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);

    if (answers.length === 0) router.replace("/");
  }, []);

  if (!isMounted) return null;
  if (!answers.length) return null;

  return <Results />;
};

export default Page;
