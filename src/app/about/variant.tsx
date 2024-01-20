import type { Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default cardVariants;
