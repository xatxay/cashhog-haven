"use client";
import HogSleeping from "../_components/hogSleeping";
import PigCoins from "../_components/pigCoins";
import Image from "next/image";
import "../../styles/style.css";
import { motion } from "framer-motion";
import cardVariants from "./variant";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/gallery-background.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex h-screen w-full border-t-2 border-t-black bg-gradient-to-bl from-green-200 via-blue-300  to-pink-300"
    >
      <div className="relative flex h-full w-full flex-1 flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="text-border top-0 m-7 text-7xl font-bold text-black"
        >
          Cashhog Haven
        </motion.span>
        <span className="text-lg font-bold text-white">
          Enter a new universe of connected hogs community.
        </span>
        <span className="m-3 text-lg font-bold text-white">
          A collection of 6 unique cashhog haven.
        </span>
        <motion.button
          className=" box-border w-1/3 rounded-md bg-pink-300 p-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Mint Now
        </motion.button>
        <div className="absolute bottom-10  w-52">
          <HogSleeping />
        </div>
      </div>
      <div className="flex h-full w-full flex-1 flex-col items-center justify-center">
        <div className="relative flex h-2/5 w-10/12 items-center justify-center rounded-3xl">
          <Image
            src="/cashhog_haven_banner.png"
            alt="cashhog banner"
            fill
            sizes="100vw"
            quality={100}
            className="z-20 rounded-3xl object-cover"
          />
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <div className=" flex h-full w-full flex-row items-center justify-center gap-6">
            <div className="flex h-full w-2/5 items-center justify-center rounded-3xl bg-gradient-to-bl from-green-400 via-blue-400  to-purple-500">
              <div className="m-3 box-border flex h-full flex-col gap-3 p-7">
                <span className="text-base">Solana Network</span>
                <span className="text-3xl font-bold text-white">
                  Built and Available on Solana Network
                </span>
                <span className="w-3/5 cursor-pointer text-sm text-gray-600 underline">
                  Visit Marketplace
                </span>
              </div>
            </div>

            <div className="relative flex h-full w-2/5 items-center justify-center rounded-3xl bg-gradient-to-br from-green-200 via-green-300  to-green-500">
              <div className="m-3 box-border flex h-full flex-col gap-3 p-7">
                <span className="text-base">Stake and earn reward</span>
                <span className="text-3xl font-bold text-white">
                  Stake your NFT. Earn rewards.
                </span>
                <span className="text-sm text-gray-600">Coming Soon</span>
              </div>
              <div className="absolute bottom-0 right-0 w-36">
                <PigCoins />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
