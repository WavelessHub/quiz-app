"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "./ui/badge";
import AnswerStatus from "./common/AnswerStatus";

export type Results = {
  question_id: string;
  user_answer: string;
  correct_answer: string;
};

export const columns: ColumnDef<Results>[] = [
  {
    accessorKey: "question",
    header: "Question",
  },
  {
    accessorKey: "correct_answer",
    header: "Correct Answer",
  },
  {
    accessorKey: "user_answer",
    header: "Your Answer",
    cell: ({ row }) => (
      <AnswerStatus
        user_answer={row.original.user_answer}
        correct_answer={row.original.correct_answer}
      />
    ),
  },
];
