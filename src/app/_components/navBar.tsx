import Image from "next/image";
import "../../styles/style.css";
import ConnectWallet from "../connectWallet/connectWallet";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWalletDisconnectButton } from "@solana/wallet-adapter-base-ui";
import { type NavBarProps } from "@/utils/interface";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";

const NavBar = ({
  setSignature,
  umi,
  letUserMint,
  setLetUserMint,
}: NavBarProps) => {
  const wallet = useWallet();
  const { setVisible } = useWalletModal();
  const { onButtonClick } = useWalletDisconnectButton();
  if (wallet) {
    umi.use(walletAdapterIdentity(wallet));
  }
  return (
    <nav className="absolute m-auto flex w-full items-center justify-between py-4">
      <div className="flex flex-1 items-center justify-center">
        <Image
          src="/logo.png"
          alt="Cashhog Haven Logo"
          width={80}
          height={80}
          className="w-20"
        />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <h3 className="text-border text-5xl font-extrabold text-black">
          Cashhog Haven
        </h3>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <ConnectWallet
          wallet={wallet}
          setVisible={setVisible}
          onButtonClick={onButtonClick}
          setSignature={setSignature}
          umi={umi}
          letUserMint={letUserMint}
          setLetUserMint={setLetUserMint}
        />
      </div>
    </nav>
  );
};

export default NavBar;
