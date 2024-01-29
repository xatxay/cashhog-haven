import Image from "next/image";
import "../../styles/style.css";
import ConnectWallet from "./connectWallet/connectWallet";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWalletDisconnectButton } from "@solana/wallet-adapter-base-ui";
import { type NavBarProps } from "@/utils/interface";

const NavBar = ({ setSignature, letUserMint, setLetUserMint }: NavBarProps) => {
  const { setVisible } = useWalletModal();
  const { onButtonClick } = useWalletDisconnectButton();
  return (
    <nav className="absolute m-auto flex w-full items-center justify-between py-4">
      <div className="flex flex-1 items-center justify-center">
        <Image
          src="/logo.png"
          alt="Cashhog Haven Logo"
          width={80}
          height={80}
          className="w-11 lg:w-20"
        />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <h3 className="text-border text-base font-extrabold text-black md:text-lg lg:text-5xl">
          Cashhog Haven
        </h3>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <ConnectWallet
          setVisible={setVisible}
          onButtonClick={onButtonClick}
          setSignature={setSignature}
          letUserMint={letUserMint}
          setLetUserMint={setLetUserMint}
        />
      </div>
    </nav>
  );
};

export default NavBar;
