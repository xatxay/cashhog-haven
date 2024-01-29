import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ImageSlider = ({ pictures }: { pictures: string[] }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.scrollWidth, ref.current.offsetWidth);
      setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
    }
  }, []);

  return (
    <div className="flex h-full w-4/5 items-center justify-start">
      <motion.div className=" overflow-x-hidden" ref={ref}>
        <motion.div
          className="flex min-w-max cursor-grab gap-11"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
        >
          {pictures.map((pic, index) => (
            <motion.div key={index}>
              <Image
                src={pic}
                alt={`${pic}-${index}`}
                width={200}
                height={200}
                className="pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageSlider;
