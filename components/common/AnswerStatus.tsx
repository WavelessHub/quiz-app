import { Badge } from "@/components/ui/badge";

import { NextPage } from "next";

interface Props {
  user_answer: string;
  correct_answer: string;
}

const AnswerStatus: NextPage<Props> = ({ user_answer, correct_answer }) => {
  return (
    <div className="flex items-center justify-between">
      <div>{user_answer}</div>

      <div>
        {correct_answer === user_answer ? (
          <Badge variant="success">CORRECT</Badge>
        ) : (
          <Badge variant="destructive">WRONG</Badge>
        )}
      </div>
    </div>
  );
};

export default AnswerStatus;
