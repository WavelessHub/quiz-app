import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { QuizForm } from "./forms/QuizForm";
import { NextPage } from "next";

type Props = {};

const StartQuizCard: NextPage<Props> = ({}) => {
  return (
    <Card className="w-[600px] bg-slate-100 m-4">
      <CardHeader className="flex flex-col items-center mb-4 justify-center">
        <CardTitle className="text-3xl font-semibold">Quiz Game</CardTitle>

        <CardDescription className="lg:w-[60%] sm:w-[80%] font-medium text-center">
          Welcome to the Quiz Game. Please select the number of questions you
          want to answer and the level of difficulty.
        </CardDescription>
      </CardHeader>

      <CardContent className="w-full">
        <QuizForm />
      </CardContent>
    </Card>
  );
};

export default StartQuizCard;
