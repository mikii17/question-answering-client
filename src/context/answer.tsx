import { createContext, useContext, useState } from "react";

type AnswerProviderState = {
  answer: string;
  setAnswer: (answer: string) => void;
};
const initialState: AnswerProviderState = {
  answer: "",
  setAnswer: () => {},
};
const AnswerContext = createContext<typeof initialState>(initialState);

export function AnswerProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const [answer, setAnswer] = useState("");

  const value = {
    answer,
    setAnswer,
  };
  return (
    <AnswerContext.Provider {...props} value={value}>
      {children}
    </AnswerContext.Provider>
  );
}

export const useAnswer = () => {
  const context = useContext(AnswerContext);

  if (context === undefined)
    throw new Error("useAnswer must be used within a AnswerProvider");

  return context;
};
