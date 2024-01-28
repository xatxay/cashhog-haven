import "../../../styles/style.css";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  type MotionValue,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const [repetitions, setRepetitions] = useState(4);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity as MotionValue<number>,
    [0, 1000],
    [0, 5],
    {
      clamp: false,
    },
  );

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  //   const x = useTransform(baseX, (v) => `${wrap(80, -80, v)}%`);
  //   console.log("x: ", x);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  useEffect(() => {
    const measureTExt = () => {
      const textElement = document.createElement("span");
      textElement.style.visibility = "hidden";
      textElement.innerText = children;
      document.body.appendChild(textElement);
      const textWidth = textElement.getBoundingClientRect().width;
      textElement.remove();

      const viewportWidth = window.innerWidth;
      const newRepetitions = Math.ceil(viewportWidth / textWidth);
      setRepetitions(newRepetitions);
      // console.log("text element: ", textElement);
      // console.log("text width: ", textWidth);
    };
    measureTExt();
    window.addEventListener("resize", measureTExt);

    return () => window.removeEventListener("resize", measureTExt);
  }, [children]);

  const x = useTransform(
    baseX,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    (v) => `${wrap(-20, -20 - 100 / repetitions, v)}%`,
  );

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  //   return (
  //     <div className="parallax">
  //       <motion.div className="scroller" style={{ x }}>
  //         <span>{children} </span>
  //         <span>{children} </span>
  //         <span>{children} </span>
  //         <span>{children} </span>
  //       </motion.div>
  //     </div>
  //   );
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {Array.from({ length: repetitions }, (_, i) => (
          <span key={i}>{children}</span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ReadyVelocity() {
  return (
    <div className="background flex h-screen w-full items-center justify-center overflow-x-hidden border-t-2 border-t-black text-white">
      <section>
        <ParallaxText baseVelocity={-4}>Are You Ready? 🐽</ParallaxText>
        <ParallaxText baseVelocity={4}>Buckle Up</ParallaxText>
      </section>
    </div>
  );
}
