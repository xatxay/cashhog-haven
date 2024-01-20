"use client";
import NavBar from "../_components/navBar";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import PigButterfly from "../_components/pigButterfly";
import "../../styles/style.css";

const FrontPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/home-background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="background flex h-screen w-full flex-col"
    >
      <NavBar />
      <div className="flex h-full w-full flex-row items-center justify-center ">
        <div className="relative flex h-full flex-1 flex-col items-center justify-center">
          <div className="w-4/5 text-8xl">
            Bank on <span className="text-pink-400">Us</span>, Not on Runs
          </div>
          <div className=" absolute bottom-0 right-0 w-72">
            <PigButterfly />
          </div>
        </div>
        <div className="flex w-full flex-1 items-center justify-center">
          <Tilt>
            <div className="flex h-3/4 w-full items-center justify-center">
              <Image
                src="/welcomePic.jpg"
                priority
                width={325}
                height={325}
                alt="Welcome page pic"
                className="rounded-3xl"
                quality={100}
              />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
