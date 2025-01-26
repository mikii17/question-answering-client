/* eslint-disable @typescript-eslint/no-explicit-any */
import { Send, Plus, CircleDashed } from "lucide-react";

import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import { useQuestion } from "@/context/question";
import { useToast } from "@/hooks/use-toast";
import { useAnswer } from "@/context/answer";

export default function ChatInput() {
  const { context, setQuestion, setContext } = useQuestion();
  const { setAnswer } = useAnswer();

  const [loading, setLoading] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const { toast } = useToast();

  const fetchAnswer = async () => {
    try {
      setQuestion(text);
      setAnswer("");
      setText("");
      setLoading(true);
      const response = await fetch(
        "https://mikii17-question-answering.hf.space/answers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: text, context }),
        }
      );

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setContext("");
    }
  };

  return (
    <div className=" absolute bottom-2  flex w-[min(100%,800px)] p-2 left-1/2 transform -translate-x-1/2">
      <Textarea
        rows={1}
        placeholder="Start chatting "
        className="block  w-full resize-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="h-full flex flex-col justify-center items-center gap-1">
        <Button
          disabled={loading || !text.length}
          type="submit"
          className="flex-shrink-0 ml-2"
          size="icon"
          onClick={fetchAnswer}
        >
          {loading ? <CircleDashed className="animate-spin" /> : <Send />}
        </Button>

        <ChatContext />
      </div>
    </div>
  );
}

const ChatContext = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setContext } = useQuestion();
  const [text, setText] = useState("");

  const handleSave = () => {
    setContext(text);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex-shrink-0 ml-2" size="icon">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Context (Optional)</DialogTitle>
          <DialogDescription>
            Provide the specific context here.
          </DialogDescription>
        </DialogHeader>
        <div>
          <Textarea
            rows={6}
            id="context"
            placeholder="Your context"
            className="resize-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={300}
          />

          <span className="text-right text-sm py-1">{text.length}/300</span>
        </div>
        <DialogFooter className="mt-5" onClick={handleSave}>
          <Button disabled={text.length ? false : true}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
