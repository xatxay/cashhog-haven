import Image from "next/image";
import "../../styles/style.css";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="absolute m-auto flex w-full items-center justify-between px-16 py-4">
      <Image
        src="/logo.png"
        alt="Cashhog Haven Logo"
        width={80}
        height={80}
        className="w-20"
      />
      <h3 className="text-border text-5xl font-extrabold text-black">
        Cashhog Haven
      </h3>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="box-border rounded border-none bg-pink-300 p-4 text-base"
      >
        Mint
      </motion.button>
    </nav>
  );
};

export default NavBar;
