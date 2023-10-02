import { NextRequest, NextResponse } from "next/server";
import queryString from "query-string";

import axios from "axios";

export type Results = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type BodyParams = {
  amount: number;
  category: number;
  difficulty: string;
};

type Request = {
  response_code: number;
  results: Results[];
};

export async function OPTIONS(request: NextRequest) {
  const params: BodyParams = await request.json();

  const { amount, category, difficulty } = params;

  if (!params)
    return NextResponse.json({ error: "Params not found." }, { status: 400 });

  const url = queryString.stringifyUrl({
    url: "https://opentdb.com/api.php",
    query: {
      amount,
      category,
      difficulty,
      type: "multiple",
    },
  });

  const { results } = (await axios.get<Request>(url)).data;

  return NextResponse.json({ results }, { status: 200 });
}
