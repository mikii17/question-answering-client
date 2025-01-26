import { createContext, useContext, useState } from "react";

type QuestionProviderState = {
  question: string;
  setQuestion: (question: string) => void;
  context: string;
  setContext: (answer: string) => void;
};

const initialState: QuestionProviderState = {
  question: "",
  setQuestion: () => {},
  context: "",
  setContext: () => {},
};
const QuestionContext = createContext<typeof initialState>(initialState);

export function QuestionProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");

  const value = {
    question,
    setQuestion,
    context,
    setContext,
  };
  return (
    <QuestionContext.Provider {...props} value={value}>
      {children}
    </QuestionContext.Provider>
  );
}

export const useQuestion = () => {
  const context = useContext(QuestionContext);

  if (context === undefined)
    throw new Error("useQuestion must be used within a QuestionProvider");

  return context;
};
