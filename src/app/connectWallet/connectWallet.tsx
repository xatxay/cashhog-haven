/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { motion } from "framer-motion";
import Image from "next/image";
import { handleMint } from "./handleMint";
import type { ConnectWalletProps } from "@/utils/interface";
import { useEffect, useState } from "react";
import checkMintLimt from "./checkLimt";

const ConnectWallet = ({
  wallet,
  setVisible,
  onButtonClick,
  setSignature,
  umi,
  letUserMint,
  setLetUserMint,
}: ConnectWalletProps) => {
  const candyMachineId = "6W65xY38tkXZjXrEiPacVrCd4PF1qbT48pjAAXFXvUcD";
  const candyGuardId = `GzaaBidWLppNpxH7XvtFoqQDtiZF3johzdrw8qdAbvpG`;

  const onRequestConnectWallet = () => {
    setVisible(true);
    console.log("asdasdasd");
  };

  useEffect(() => {
    const fetchMintLimit = async () => {
      const limit = await checkMintLimt(
        candyGuardId,
        umi,
        candyMachineId,
        wallet,
      );
      setLetUserMint(limit);
    };
    if (wallet.connected) void fetchMintLimit();
  }, [candyGuardId, setLetUserMint, umi, wallet]);

  return !wallet.connected ? (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="box-border rounded border-none bg-pink-300 p-4 text-base"
      onClick={onRequestConnectWallet}
    >
      Connect To Mint
    </motion.button>
  ) : (
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
      {letUserMint ? (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleMint(umi, wallet, candyMachineId, setSignature)}
          className="box-border rounded border-none bg-pink-300 p-4 text-base"
        >
          Mint
        </motion.button>
      ) : (
        <motion.button
          disabled
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleMint(umi, wallet, candyMachineId, setSignature)}
          className="box-border rounded border-none bg-pink-300 p-4 text-base"
        >
          Minted
        </motion.button>
      )}
    </div>
  );
};

export default ConnectWallet;
