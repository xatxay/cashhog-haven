"use client";
import PigStare from "../pigStare";
import {
  FaTwitterSquare,
  FaYoutube,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { motion } from "framer-motion";
import type { ContactProps } from "@/utils/interface";
import { handleMint } from "../connectWallet/handleMint";
import { useUmi } from "../connectWallet/umiProvider";

const Contact = ({ letUserMint, setSignature }: ContactProps) => {
  const umi = useUmi();
  const candyMachineId = String(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID);
  return (
    <div
      // style={{
      //   backgroundImage: `url("/home-image.png")`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
      className="to flex h-screen w-full items-center justify-center border-t-2 border-t-black bg-sky-200 bg-gradient-to-b from-pink-300"
    >
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-r from-yellow-200 via-red-400 to-pink-400 lg:h-4/5 lg:w-4/5 lg:flex-row lg:rounded-3xl">
        <div className="flex h-full w-full flex-1 flex-col items-center justify-center lg:flex-row">
          <div className="flex h-2/3 w-4/5 flex-row items-center justify-center overflow-hidden rounded-3xl border-2 border-black lg:h-4/5 lg:flex-col">
            <div className="flex h-full w-full flex-1 flex-col items-center justify-center border-2 border-r-black bg-sky-200 lg:justify-end lg:border-r-0 lg:border-b-black">
              <div className="w-24 lg:w-64">
                <PigStare />
              </div>
            </div>
            <div className="box-border flex h-full w-full flex-1 flex-col items-center justify-center gap-4 bg-gray-200 px-8 py-2 lg:gap-0 lg:rounded-b-3xl">
              <span className="text-lg font-extrabold md:text-xl lg:m-2 lg:text-3xl">
                Cashhog Huddle
              </span>
              <span className="text-xs text-gray-700 md:text-base lg:text-lg">
                Inspire, Participate, and Create With Your Fellow Cashhogs.
              </span>
              {letUserMint ? (
                <motion.button
                  className="m-1 box-border rounded-2xl bg-pink-300 p-2 text-xs md:m-2 md:p-3 lg:m-3 lg:w-4/5 lg:p-4 lg:text-base"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleMint(umi, candyMachineId, setSignature)}
                >
                  Mint
                </motion.button>
              ) : (
                <motion.button
                  disabled
                  className="m-1 box-border rounded-2xl bg-pink-300 p-2 lg:m-3 lg:w-4/5 lg:p-4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Minted
                </motion.button>
              )}
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-1 flex-col items-center justify-center">
          <div className="flex h-full w-4/5 flex-col items-center justify-center rounded-3xl lg:h-4/5">
            <div className="flex h-full w-full flex-1 flex-col items-center justify-end rounded-3xl border-2 border-black bg-gray-300">
              <input
                className="box-border h-1/2 w-full rounded-t-3xl bg-gray-300 p-6 text-xl focus:outline-none md:text-2xl lg:text-3xl"
                placeholder="Enter your email"
              />
              <div className="box-border flex h-1/2 w-full items-center justify-between p-4 text-sm md:p-6 lg:text-base">
                <span>Signup for newsletter:</span>
                <motion.button
                  className="box-border rounded-3xl bg-pink-300 p-2 text-xs md:p-3 lg:p-5 lg:text-base"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Sign Up
                </motion.button>
              </div>
            </div>
            <div className="box-border flex h-full w-full flex-1 flex-col items-center justify-center rounded-b-3xl px-8">
              <span className="m-2 p-6 text-xl font-extrabold md:text-2xl lg:text-3xl">
                Follow Us
              </span>
              <div className="flex w-full flex-row items-center justify-between">
                <FaTwitterSquare className="h-auto w-9 md:w-12 lg:w-16" />
                <FaYoutube className="h-auto w-9 md:w-12 lg:w-16" />
                <FaInstagram className="h-auto w-9 md:w-12 lg:w-16" />
                <FaDiscord className="h-auto w-9 md:w-12 lg:w-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
