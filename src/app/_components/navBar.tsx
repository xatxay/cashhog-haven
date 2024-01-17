import Image from "next/image";
import cashHogLogo from "../../styles/logo.png";

const NavBar = () => {
  return (
    <nav className="absolute m-auto flex w-full items-center justify-between px-16 py-4">
      <Image src={cashHogLogo} alt="Cashhog Haven Logo" className="w-16" />
      <h3 className="text-3xl text-pink-400">Cashhog Haven</h3>
      <button className="box-border rounded border-none bg-pink-300 p-4 text-base">
        Mint
      </button>
    </nav>
  );
};

export default NavBar;
