"use client";
import HogSleeping from "../hogSleeping";
import PigCoins from "../pigCoins";
import Image from "next/image";
import "../../../styles/style.css";
import { motion } from "framer-motion";
import type { AboutPageProps } from "@/utils/interface";
import { handleMint } from "../connectWallet/handleMint";
import { useUmi } from "../connectWallet/umiProvider";

const AboutPage = ({ letUserMint, setSignature }: AboutPageProps) => {
  const umi = useUmi();
  const candyMachineId = String(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID);
  return (
    <div
      style={{
        backgroundImage: `url('/gallery-background.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex h-screen w-full flex-col border-t-2 border-t-black bg-gradient-to-bl from-green-200 via-blue-300 to-pink-300  lg:flex-row"
    >
      <div className="relative box-border flex h-full w-full flex-1 flex-col items-center justify-center gap-5 lg:gap-2">
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
          className="text-border top-0 text-2xl font-bold text-black md:text-4xl lg:m-7 lg:text-5xl xl:text-7xl"
        >
          Cashhog Haven
        </motion.span>
        <span className="text-center text-base font-bold text-white md:text-lg lg:text-xl">
          Enter a new universe of connected hogs community.
        </span>
        <span className="text-base font-bold text-white md:text-lg lg:m-3 lg:text-xl">
          A collection of 6 unique cashhog haven.
        </span>
        {letUserMint ? (
          <motion.button
            className=" box-border w-1/3 rounded-md bg-pink-300 p-1 text-sm md:p-2 lg:p-3 lg:text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleMint(umi, candyMachineId, setSignature)}
          >
            Mint Now
          </motion.button>
        ) : (
          <motion.button
            disabled
            className=" box-border w-1/3 rounded-md bg-pink-300 p-1 text-sm md:p-2 lg:p-3 lg:text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Minted
          </motion.button>
        )}
        <div className="bottom-10 w-32 lg:absolute lg:w-52">
          <HogSleeping />
        </div>
      </div>
      <div className="flex h-full w-full flex-1 flex-col items-center justify-center">
        <div className="h-full w-full flex-1">
          <div className="flex h-full w-full items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-full w-4/5 rounded-3xl lg:flex lg:h-4/5 lg:items-center lg:justify-center"
            >
              <Image
                src="/cashhog_haven_banner.png"
                alt="cashhog banner"
                fill
                sizes="100vw"
                quality={100}
                className="z-20 rounded-3xl border-2 border-black object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="relative h-full w-full flex-1 items-center justify-center">
          <div>
            <div className=" absolute flex h-full w-full flex-row items-center justify-center gap-5">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex h-5/6 w-[39%] items-center justify-center rounded-3xl border-2 border-black bg-gradient-to-bl from-green-400  via-blue-400 to-purple-500"
              >
                <div className="box-border flex h-full flex-col items-center justify-center gap-3 text-center lg:m-3 lg:items-start lg:justify-start lg:p-7 lg:text-start">
                  <span className="text-xs lg:text-base">Solana Network</span>
                  <span className="text-base font-bold text-white lg:text-3xl">
                    Built and Available on Solana Network
                  </span>
                  <span className="cursor-pointer text-xs text-gray-600 underline lg:w-3/5 lg:text-sm">
                    Visit Marketplace
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex h-5/6 w-[39%] items-center justify-center rounded-3xl border-2 border-black bg-gradient-to-br  from-green-200 via-green-300 to-green-500"
              >
                <div className="box-border flex h-full flex-col items-center justify-center gap-3 text-center lg:m-3 lg:items-start lg:justify-start lg:p-7 lg:text-start">
                  <span className="text-xs lg:text-base">
                    Stake and earn reward
                  </span>
                  <span className="text-base font-bold text-white lg:text-3xl">
                    Stake your NFT. Earn rewards.
                  </span>
                  <span className="text-xs text-gray-600 lg:text-sm">
                    Coming Soon
                  </span>
                </div>
                <div className="absolute bottom-0 right-0 hidden w-36 lg:block">
                  <PigCoins />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
