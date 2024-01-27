import type { DrawerProps } from "@/utils/interface";
import { motion } from "framer-motion";
import CountDown from "./countDown";
import { useEffect, useState } from "react";
import DisplayNft from "./displayNft";
import useGetMetadata from "../hooks/getMetadata";

const NftDrawer = ({
  closeDrawerHandle,
  signature,
  umi,
}: DrawerProps) => {
  const [countDownFinished, setCountDownFinished] = useState<boolean>(false);

  const handleCountDown = () => {
    setCountDownFinished(true);
  };

  const metadata = useGetMetadata(signature, umi);

  useEffect(() => {
    console.log("got metadata: ", metadata);
  }, [metadata]);

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
        {!countDownFinished && (
          <div className="text-border flex h-full w-full items-center justify-center text-8xl font-extrabold">
            <CountDown handleCountDown={handleCountDown} metadata={metadata} />
          </div>
        )}
        {countDownFinished && signature.length > 0 && metadata.image && (
          <DisplayNft
            metadata={metadata}
            closeDrawerHandle={closeDrawerHandle}
          />
        )}
      </motion.div>
    </div>
  );
};

export default NftDrawer;
