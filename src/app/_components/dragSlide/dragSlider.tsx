"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import "../../../styles/style.css";

const StackImages = ({ pictures }: { pictures: string[] }) => {
  const controls = useAnimation();
  const animateRef = useRef(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const isInView = useInView(animateRef, {
    margin: "-225px 0px",
    once: true,
  });

  useEffect(() => {
    if (isInView && dragRef.current) {
      // const middleIndex = Math.floor(pictures.length / 2);
      controls
        .start((i) => {
          const offset = (i - 1.15) * 430;
          console.log("offset: ", i, offset);
          return {
            x: offset,
            // x: 475 * i,
            transition: { duration: 1 + i * 0.1 },
          };
        })
        .catch((err) => console.log(err));
      console.log(dragRef.current.scrollWidth, dragRef.current.offsetWidth);
      setWidth(dragRef.current.scrollWidth - dragRef.current.offsetWidth);
    }
  }, [controls, isInView]);

  useEffect(() => {
    console.log("width: ", width);
  }, [width]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div className="flex min-w-full items-center justify-center overflow-x-hidden">
        <motion.div
          className="grid-stack min-w-max cursor-grab items-center justify-center "
          ref={dragRef}
          drag="x"
          dragConstraints={{ right: 0, left: -1300 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {pictures.map((pic, index) => (
            <div key={index} className={`item${index}`}>
              <motion.div
                initial={{ x: 0 }}
                animate={controls}
                custom={index}
                ref={animateRef}
              >
                <Image
                  src={pic}
                  alt={`img-${index}`}
                  width={425}
                  height={425}
                  className="pointer-events-none rounded-3xl"
                  quality={100}
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StackImages;
