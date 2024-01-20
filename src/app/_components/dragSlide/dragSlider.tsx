"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import "../../../styles/style.css";

const ImageSlider = ({ pictures }: { pictures: string[] }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-225px 0px",
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      // const middleIndex = Math.floor(pictures.length / 2);
      controls
        .start((i) => {
          const offset = (i - 1) * 430;
          // x: 475 * i,
          console.log("asdasd: ", offset, i);
          return {
            x: offset,
            transition: { duration: 1 + i * 0.1 },
          };
        })
        .catch((err) => console.log(err));
    }
  }, [controls, isInView, pictures.length]);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-x-hidden">
      <ul className="grid">
        {pictures.map((pic, index) => (
          <div key={index} className={`item${index}`}>
            <motion.li
              initial={{ x: 0 }}
              animate={controls}
              custom={index}
              ref={ref}
              className="cursor-grab" //check
            >
              <Image
                src={pic}
                alt={`img-${index}`}
                width={425}
                height={425}
                className="rounded-3xl"
              />
            </motion.li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ImageSlider;
