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
      <div className="flex h-4/5 w-4/5 items-center justify-center rounded-3xl bg-gradient-to-r from-yellow-200 via-red-400 to-pink-400">
        <div className="flex h-full w-full flex-1 items-center justify-center ">
          <div className="flex h-4/5 w-4/5 flex-col items-center justify-center rounded-3xl border-2 border-black">
            <div className="flex h-full w-full flex-1 flex-col items-center justify-end rounded-t-3xl border-2 border-b-black bg-sky-200">
              <div className="w-64">
                <PigStare />
              </div>
            </div>
            <div className="box-border flex h-full w-full flex-1 flex-col items-center justify-center rounded-b-3xl bg-gray-200 px-8 py-2">
              <span className="m-2 text-3xl font-extrabold">
                Cashhog Huddle
              </span>
              <span className="text-lg text-gray-700">
                Inspire, Participate, and Create With Your Fellow Cashhogs.
              </span>
              {letUserMint ? (
                <motion.button
                  className="m-3 box-border w-4/5 rounded-2xl bg-pink-300 p-4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleMint(umi, candyMachineId, setSignature)}
                >
                  Mint
                </motion.button>
              ) : (
                <motion.button
                  disabled
                  className="m-3 box-border w-4/5 rounded-2xl bg-pink-300 p-4"
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
          <div className="flex h-4/5 w-4/5 flex-col items-center justify-center rounded-3xl">
            <div className="flex h-full w-full flex-1 flex-col items-center justify-end rounded-3xl border-2 border-black bg-gray-300">
              <input
                className="box-border h-1/2 w-full rounded-t-3xl bg-gray-300 p-6 text-3xl focus:outline-none"
                placeholder="Enter your email"
              />
              <div className="box-border flex h-1/2 w-full items-center justify-between p-6">
                <span>Signup for newsletter:</span>
                <motion.button
                  className="box-border rounded-3xl bg-pink-300 p-5"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Sign Up
                </motion.button>
              </div>
            </div>
            <div className="box-border flex h-full w-full flex-1 flex-col items-center justify-center rounded-b-3xl px-8">
              <span className="m-2 p-6 text-3xl font-extrabold">Follow Us</span>
              <div className="flex w-full flex-row items-center justify-between">
                <FaTwitterSquare size={60} />
                <FaYoutube size={60} />
                <FaInstagram size={60} />
                <FaDiscord size={60} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;