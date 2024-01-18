"use client";
import HogSleeping from "./hogSleeping";
import PigCoins from "./pigCoins";
import Image from "next/image";
import "../../styles/style.css";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/about-background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex h-screen w-full border-t-2 border-t-black"
    >
      <div className="relative flex h-full w-full flex-1 flex-col items-center justify-center">
        <span className="text-border top-0 m-7 text-7xl font-bold text-white">
          Cashhog Haven
        </span>
        <span className="text-lg font-bold text-black">
          Enter a new universe of connected hogs community.
        </span>
        <span className="m-3 text-lg font-bold text-black">
          A collection of 6 unique cashhog haven.
        </span>
        <button className=" box-border w-1/3 rounded-md bg-pink-300 p-3">
          Mint Now
        </button>
        <div className="absolute bottom-10  w-52">
          <HogSleeping />
        </div>
      </div>
      <div className="flex h-full w-full flex-1 flex-col items-center justify-center">
        <div className="relative flex h-2/5 w-10/12 items-center justify-center rounded-3xl bg-yellow-100">
          <Image
            src="/cashhog_haven_banner.png"
            alt="cashhog banner"
            fill
            className="rounded-3xl object-cover"
          />
        </div>
        <div className="m-7 flex h-2/5 w-full flex-row items-center justify-center gap-7">
          <div className="flex h-full w-2/5 items-center justify-center rounded-3xl bg-blue-400">
            <div className="m-3 box-border flex h-full flex-col gap-3 p-7">
              <span className="text-base">Solana Network</span>
              <span className="text-3xl font-bold text-white">
                Built and Available on Solana Network
              </span>
              <span className="w-3/5 cursor-pointer text-sm text-gray-600 underline">
                Visit Marketplace
              </span>
            </div>
          </div>
          <div className="relative flex h-full w-2/5 items-center justify-center rounded-3xl bg-green-300">
            <div className="m-3 box-border flex h-full flex-col gap-3 p-7">
              <span className="text-base">Stake and earn reward</span>
              <span className="text-3xl font-bold text-white">
                Stake your NFT. Earn rewards.
              </span>
              <span className="text-sm text-gray-600">Coming Soon</span>
            </div>
            <div className="absolute bottom-0 right-0 w-36">
              <PigCoins />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
