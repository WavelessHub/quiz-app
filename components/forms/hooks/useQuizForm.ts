import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { z } from "zod";

import { Results } from "@/app/api/questions/route";
import { useQuestions } from "@/hooks/useQuestions";

import { useRouter } from "next/navigation";

import axios from "axios";

const schema = z.object({
  amount: z.number({ required_error: "Please select the amount." }),
  category: z.number({ required_error: "Please select the category." }),
  difficulty: z.string({
    required_error: "Please select the difficulty level.",
  }),
});

export const useQuizForm = () => {
  const { setQuestions } = useQuestions();
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  async function onSubmit({
    amount,
    difficulty,
    category,
  }: z.infer<typeof schema>) {
    const { data } = await axios.options<{ results: Results[] }>(
      "/api/questions",
      {
        data: {
          amount,
          difficulty,
          category,
        },
      }
    );

    const questions = data.results.map((question) => ({
      ...question,
      id: uuid().slice(0, 7),
    }));

    router.replace(`/question/${questions[0].id}`);
    setQuestions(questions);
  }

  return { form, onSubmit, ...form };
};
