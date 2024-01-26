import { type TypewriteProps } from "@/utils/interface";
import { useEffect, useState } from "react";

const TypewriterEffect = ({
  text,
  speed = 200,
  loopDelay = 1000,
}: TypewriteProps) => {
  const [typeText, setTypeText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (index < text.length) {
      timer = setTimeout(() => {
        setTypeText(typeText + text.charAt(index));
        setIndex(index + 1);
      }, speed);
    } else if (index === text.length) {
      timer = setTimeout(() => {
        setTypeText("");
        setIndex(0);
      }, loopDelay);
    }
    return () => clearTimeout(timer);
  }, [index, loopDelay, speed, text, typeText]);
  return <>{typeText || "\u00A0"}</>;
};

export default TypewriterEffect;
