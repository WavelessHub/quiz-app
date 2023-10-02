"use client";

import { Check, ChevronsUpDown } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { amount, difficultyLevels } from "./constants/constants";
import { categories } from "./constants/categories";

import { useQuizForm } from "./hooks/useQuizForm";

import { cn } from "@/lib/utils";

export function QuizForm() {
  const { form, onSubmit, control, handleSubmit, setValue } = useQuizForm();

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex-1">
            <FormField
              control={control}
              name="amount"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Number of Questions</FormLabel>

                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "h-12 justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? amount.find((value) => value === field.value)
                            : "Select Amount"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>

                    <PopoverContent className="flex-1 p-0">
                      <Command>
                        <CommandInput placeholder="Search..." />
                        <CommandEmpty>Amount Not Found.</CommandEmpty>

                        <CommandGroup>
                          <ScrollArea className="h-72 w-full p-0">
                            {amount.map((value) => (
                              <CommandItem
                                key={value}
                                value={value.toString()}
                                onSelect={() => setValue("amount", value)}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {value}
                              </CommandItem>
                            ))}
                          </ScrollArea>
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex-1">
            <FormField
              control={control}
              name="difficulty"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Difficulty Level</FormLabel>

                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "h-12 justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? difficultyLevels.find(
                                ({ value }) => value === field.value
                              )?.label
                            : "Select Difficulty"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>

                    <PopoverContent className="flex-1 p-0">
                      <Command>
                        <CommandGroup>
                          {difficultyLevels.map(({ label, value }) => (
                            <CommandItem
                              key={value}
                              value={label}
                              onSelect={() => setValue("difficulty", value)}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="w-full mb-6">
          <FormField
            control={control}
            name="category"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel>Categories</FormLabel>

                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "h-12 justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? categories.find((value) => value.id === field.value)
                              ?.name
                          : "Select Cateogory"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>

                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search..." />
                      <CommandEmpty>Category Not Found.</CommandEmpty>

                      <CommandGroup>
                        <ScrollArea className="h-72 w-full p-0">
                          {categories.map((value) => (
                            <CommandItem
                              key={value.id}
                              value={value.name}
                              onSelect={() => setValue("category", value.id)}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value.id === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {value.name}
                            </CommandItem>
                          ))}
                        </ScrollArea>
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 w-full h-12"
        >
          Start Quiz
        </Button>
      </form>
    </Form>
  );
}
