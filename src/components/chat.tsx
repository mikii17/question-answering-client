import { useAnswer } from "@/context/answer";
import ChatInput from "./chat-input";
import WelcomeChat from "./welcome-chat";
import { useQuestion } from "@/context/question";

export default function Chat() {
  const { question, context } = useQuestion();
  const { answer } = useAnswer();

  return (
    <div className=" relative w-full h-[calc(100vh-64px)] p-4  ">
      <div className="h-[calc(100%-40px)] overflow-y-auto py-2 w-[min(100%,800px)] mx-auto">
        <div className="h-full">
          {question || answer ? (
            <div className="w-full flex flex-col gap-5 ">
              {question ? (
                <div className="w-[80%] space-y-2 self-end p-4 bg-card rounded-lg">
                  <p>Q: {question}</p>
                  {context ? <p>Context: {context}</p> : null}
                </div>
              ) : null}

              {answer ? (
                <div className="w-[80%] p-4 bg-primary text-white rounded-lg">
                  A: {answer}
                </div>
              ) : null}
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center">
              <WelcomeChat />
            </div>
          )}
        </div>
      </div>
      <ChatInput />
    </div>
  );
}
