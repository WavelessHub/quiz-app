import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

import { NextPage } from "next";

interface Props {
  options: string[];
  user_answer: string;
  onSubmit: (answer: string) => void;
}

const AnswerOptions: NextPage<Props> = ({ options, user_answer, onSubmit }) => {
  return (
    <div className="flex flex-col gap-y-3">
      {options.map((answer) => (
        <div
          className={cn(
            "p-4 flex items-center rounded-lg text-gray-700",
            user_answer === answer ? "bg-blue-400" : "bg-slate-100"
          )}
          onClick={() => onSubmit(answer)}
          key={answer}
        >
          <div className="mr-3">
            {user_answer === answer ? <CheckCircle2 /> : <Circle />}
          </div>

          <div>{answer}</div>
        </div>
      ))}
    </div>
  );
};

export default AnswerOptions;
