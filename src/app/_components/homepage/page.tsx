"use client";
import NavBar from "../navBar";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import PigButterfly from "../pigButterfly";
import "../../../styles/style.css";
import { motion, AnimatePresence } from "framer-motion";
import NftDrawer from "../drawer";
import { useCallback, useEffect, useState } from "react";
import type { FrontPageProps } from "@/utils/interface";

const FrontPage = ({
  letUserMint,
  setLetUserMint,
  signature,
  setSignature,
}: FrontPageProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const openDrawerHandle = useCallback(() => {
    if (openDrawer) return;
    setOpenDrawer(true);
  }, [openDrawer]);

  useEffect(() => {
    // console.log("open drawer: ", openDrawer);
    // console.log("useeffect signature: ", signature);
    openDrawerHandle();
  }, [openDrawer, openDrawerHandle, signature]);

  const closeDrawerHandle = () => {
    if (!openDrawer || !signature) return;
    setSignature(null);
    console.log("open: ", openDrawer);
    setOpenDrawer(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div
        style={{
          backgroundImage: `url('/home-background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="background flex h-screen w-full flex-col bg-gray-500"
      >
        <NavBar
          setSignature={setSignature}
          letUserMint={letUserMint}
          setLetUserMint={setLetUserMint}
        />
        <div className="flex h-full w-full flex-row items-center justify-center ">
          <div className="relative flex h-full flex-1 flex-col items-center justify-center">
            <div className="w-4/5 text-3xl md:text-7xl lg:text-8xl">
              Bank on <span className="text-pink-400">Us</span>, Not on Runs
            </div>
            <div className="absolute bottom-0 right-0 w-48 md:w-56 lg:w-72">
              <PigButterfly />
            </div>
          </div>
          <div className="flex w-full flex-1 items-center justify-center">
            <Tilt>
              <div className="flex h-3/4 w-full items-center justify-center">
                <Image
                  src="/welcomePic.jpg"
                  priority
                  width={300}
                  height={300}
                  alt="Welcome page pic"
                  className="w-36 rounded-3xl border-2 border-black md:w-64 lg:w-80"
                  quality={100}
                />
              </div>
            </Tilt>
            {/* <button className="w-20 bg-slate-500" onClick={openDrawerHandle}>
              Open
            </button> //test*/}
            <AnimatePresence>
              {openDrawer && signature ? (
                <NftDrawer
                  closeDrawerHandle={closeDrawerHandle}
                  signature={signature}
                  key="nft drawer"
                />
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FrontPage;
