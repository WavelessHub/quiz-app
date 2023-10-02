"use client";

import { ColumnDef } from "@tanstack/react-table";

import AnswerStatus from "./common/AnswerStatus";

export type Results = {
  question_id: string;
  question: string;
  user_answer: string;
  correct_answer: string;
};

export const columns: ColumnDef<Results>[] = [
  {
    accessorKey: "question",
    header: "Question",
    cell: ({ row }) => <div className="w-[80%]">{row.original.question}</div>,
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
