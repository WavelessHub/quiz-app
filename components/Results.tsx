import { PartyPopper } from "lucide-react";

import { useQuestions } from "@/hooks/useQuestions";
import { useAnswers } from "@/hooks/useAnswers";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { DataTable } from "./DataTable";
import { columns } from "./Columns";

import { useRouter } from "next/navigation";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const { answers, removeAnswers } = useAnswers();
  const { questions } = useQuestions();

  const router = useRouter();

  const reset = () => router.replace("/");
  const restart = () => {
    router.replace(`/question/${questions[0].id}`);
    removeAnswers();
  };

  const correctQuestions = answers.filter(
    (answer) => answer.correct_answer === answer.user_answer
  );

  return (
    <Card className="space-y-4 w-[60%]">
      <div className="px-4 pt-4">
        <div className="flex flex-row mt-2 m-6 items-center justify-between">
          <PartyPopper size={50} />

          <div className="flex flex-col gap-y-1 items-center mx-4 justify-center">
            <div className="text-4xl font-semibold text-center">
              Quiz Results
            </div>
            <div className="text-lg font-medium text-gray-400 text-center">
              You have answered {correctQuestions.length} out of{" "}
              {questions.length} questions correctly.
            </div>
          </div>

          <PartyPopper size={50} style={{ transform: "scaleX(-1)" }} />
        </div>

        <DataTable columns={columns} data={answers} />
      </div>

      <Separator />

      <div className="p-4 pt-0 flex flex-row gap-x-4 items-center justify-between">
        <Button
          className="flex-1 h-12 bg-pink-500 hover:bg-pink-600"
          onClick={restart}
        >
          Restart Quiz
        </Button>

        <Button
          className="flex-1 h-12 bg-indigo-500 hover:bg-indigo-600"
          onClick={reset}
        >
          Start New Quiz
        </Button>
      </div>
    </Card>
  );
};

export default Page;
