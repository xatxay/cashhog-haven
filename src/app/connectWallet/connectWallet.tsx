import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWalletDisconnectButton } from "@solana/wallet-adapter-base-ui";
import { motion } from "framer-motion";
import Image from "next/image";

const ConnectWallet = () => {
  const { wallet } = useWallet();
  const { setVisible } = useWalletModal();
  const { onButtonClick } = useWalletDisconnectButton();

  const onRequestConnectWallet = () => {
    setVisible(true);
    console.log("asdasdasd");
  };

  if (!wallet) {
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
      {/* <p>Wallet connected</p> */}
      {/* <p>{wallet.adapter.publicKey?.toBase58()}</p> */}
      <button
        onClick={onButtonClick}
        className="box-border flex items-center justify-center gap-2 rounded border-none bg-pink-300 p-4 text-base"
      >
        <span>Disconnect</span>
        <Image
          src={wallet.adapter.icon}
          alt="icon"
          width={20}
          height={20}
          quality={100}
        />
      </button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="box-border rounded border-none bg-pink-300 p-4 text-base"
      >
        Mint
      </motion.button>
    </div>
  );
};

export default ConnectWallet;
