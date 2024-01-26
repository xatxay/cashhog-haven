/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { motion } from "framer-motion";
import Image from "next/image";
import { handleMint } from "./handleMint";
import type { ConnectWalletProps } from "@/utils/interface";

const ConnectWallet = ({
  wallet,
  setVisible,
  onButtonClick,
  setMetadata,
  openDrawerHandle,
}: ConnectWalletProps) => {
  const endpoint = "https://api.devnet.solana.com";
  const candyMachineId = "HdagLvP5zQLb8ksdwoC37kXgp5jJp8Wen5pbDmqkaFow";

  const onRequestConnectWallet = () => {
    setVisible(true);
    console.log("asdasdasd");
  };

  if (!wallet.connected) {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="box-border rounded border-none bg-pink-300 p-4 text-base"
        onClick={onRequestConnectWallet}
      >
        Connect To Mint
      </motion.button>
    );
  }
  return (
    <div className="flex w-full items-center justify-center gap-7">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onButtonClick}
        data-tooltip-target="tooltip-default"
        className="has-tooltip relative box-border flex items-center justify-center gap-2 rounded border-none bg-pink-300 p-4 text-base"
      >
        <span className="tooltip">{wallet.publicKey?.toBase58()}</span>
        <span>Disconnect</span>
        <Image
          src={wallet.wallet?.adapter.icon ?? ""}
          alt="icon"
          width={20}
          height={20}
          quality={100}
        />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() =>
          handleMint(
            endpoint,
            wallet,
            candyMachineId,
            setMetadata,
            openDrawerHandle,
          )
        }
        className="box-border rounded border-none bg-pink-300 p-4 text-base"
      >
        Mint
      </motion.button>
    </div>
  );
};

export default ConnectWallet;
