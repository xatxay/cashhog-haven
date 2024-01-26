"use client";
import NavBar from "../_components/navBar";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import PigButterfly from "../_components/pigButterfly";
import "../../styles/style.css";
import { motion, AnimatePresence } from "framer-motion";
import NftDrawer from "../_components/drawer";
import { useState } from "react";

const FrontPage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const openDrawerHandle = () => {
    if (openDrawer) return;
    setOpenDrawer(true);
  };

  const closeDrawerHandle = () => {
    console.log("open: ", openDrawer);
    if (!openDrawer) return;
    setOpenDrawer(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div
        // style={{
        //   backgroundImage: `url('/home-background.png')`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
        className="background flex h-screen w-full flex-col bg-gray-500"
      >
        <NavBar />
        <div className="flex h-full w-full flex-row items-center justify-center ">
          <div className="relative flex h-full flex-1 flex-col items-center justify-center">
            {/* <div className="w-4/5 text-8xl">
              Bank on <span className="text-pink-400">Us</span>, Not on Runs
            </div> */}
            {/* <div className=" absolute bottom-0 right-0 w-72">
              <PigButterfly />
            </div> */}
          </div>
          <div className="flex w-full flex-1 items-center justify-center">
            {/* <Tilt>
              <div className="flex h-3/4 w-full items-center justify-center">
                <Image
                  src="/welcomePic.jpg"
                  priority
                  width={300}
                  height={300}
                  alt="Welcome page pic"
                  className="rounded-3xl border-2 border-black"
                  quality={100}
                />
              </div>
            </Tilt> */}
            <button className="w-20 bg-slate-500" onClick={openDrawerHandle}>
              Open
            </button>
            <AnimatePresence>
              {openDrawer ? (
                <NftDrawer
                  closeDrawerHandle={closeDrawerHandle}
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

/*
{
    "signature": [36, 86, 255, 76, 41, 156, 193, 157, 229, 110, 130, 250, 31, 138, 66, 177, 136, 50, 186, 87, 108, 79, 206, 170, 138, 245, 71, 20, 114, 131, 94, 25, 171, 219, 14, 66, 154, 200, 222, 48, 22, 135, 59, 226, 198, 144, 114, 56, 103, 179, 157, 0, 254, 255, 42, 130, 113, 22, 237, 249, 161, 220, 29, 2]
    "result": {
        "context": {
            "apiVersion": "1.17.17",
            "slot": 275104780
        },
        "value": {
            "confirmationStatus": "confirmed",
            "confirmations": 3,
            "err": null,
            "slot": 275104777,
            "status": {
                "Ok": null
            }
        }
    }
}
*/
