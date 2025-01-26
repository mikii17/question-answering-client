import { useAnswer } from "@/context/answer";
import { TypingAnimation } from "./ui/typing-animation";

export default function WelcomeChat() {
  const { answer } = useAnswer();

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">
        <TypingAnimation>እንኳን ደና መጡ ወደ ODQA</TypingAnimation>
      </h2>

      <p>
        <TypingAnimation
          duration={60}
          delay={1000}
          className=" text-lg font-normal"
        >
          Ask a question if it's needed provide a specific context to the model.
        </TypingAnimation>
      </p>
    </div>
  );
}

//
