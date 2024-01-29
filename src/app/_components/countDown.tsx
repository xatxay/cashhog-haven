import type { CountDownProps } from "@/utils/interface";
import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import { useEffect, useState } from "react";

const CountDown = ({ handleCountDown, metadata }: CountDownProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [countDownComplete, setCountDownComplete] = useState<boolean>(false);

  useEffect(() => {
    // console.log("rerender");
    const animation = animate(count, 100, {
      duration: 13,
      onComplete: () => {
        setCountDownComplete(true);
        if (metadata.image) {
          handleCountDown();
        }
      },
    });

    return animation.stop;
  }, [count, handleCountDown, metadata.image]);

  useEffect(() => {
    if (countDownComplete && metadata.image) {
      handleCountDown();
    }
  }, [countDownComplete, handleCountDown, metadata.image]);

  return <motion.h1>{rounded}</motion.h1>;
};

export default CountDown;
