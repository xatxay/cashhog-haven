import type { DrawerProps } from "@/utils/interface";
import Image from "next/image";
import { motion } from "framer-motion";
import TypewriterEffect from "./typewrite";

const NftDrawer = ({ closeDrawerHandle, metadata }: DrawerProps) => {
  const drawerVariants = {
    hidden: { y: "100%" },
    visible: { y: 0 },
  };
  return (
    <div>
      <div
        className="z-2 fixed inset-0 h-full w-full "
        onClick={closeDrawerHandle}
      />
      <motion.div
        key="drawer"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={drawerVariants}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-0 left-0 right-0 flex h-[60%] flex-row rounded-t-3xl bg-gradient-to-r from-yellow-200 via-red-400 to-pink-400"
      >
        <div className=" flex h-full flex-1 items-center justify-center rounded-t-[10px]">
          {/* <div className="mx-auto flex h-full max-w-full items-center justify-center"> */}
          <Image
            src={metadata.image}
            priority
            width={375}
            height={375}
            alt="nft mint"
            quality={100}
            className="pointer-events-none"
          />
          {/* </div> */}
        </div>
        <div className="relative flex h-full w-full flex-1 flex-col items-start justify-start  text-start text-3xl">
          <div className="absolute flex w-full items-center justify-end">
            <button
              className="m-5 box-border border-2 border-black p-2"
              onClick={closeDrawerHandle}
            >
              X
            </button>
          </div>
          <div className="m-4 box-border h-full w-full flex-1 items-start justify-start p-4">
            <span className="text-green-700">
              <TypewriterEffect text={`Mint Successful!!!`} />
            </span>
          </div>
          <div className="m-4 box-border h-full w-full flex-1 items-start justify-start p-4">
            <h2 className="text-border">CashHog Haven</h2>
            <h4>{metadata.name}</h4>
            <span className="block">Bank on Us, Not on Runs</span>
            <span className="block">Type: One of One</span>
          </div>
          <div className="m-4 box-border h-full w-full flex-1 items-start justify-start p-4">
            CashHog just found a new home: asdadasdasdasd
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NftDrawer;
