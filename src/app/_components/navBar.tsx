import Image from "next/image";
import "../../styles/style.css";
import ConnectWallet from "../connectWallet/connectWallet";

const NavBar = () => {
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
        <ConnectWallet />
      </div>
    </nav>
  );
};

export default NavBar;
