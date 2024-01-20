"use client";
import Lottie from "lottie-react";
import pigLoading from "../styles/loading.json";

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-blue-400">
      <div className="w-52">
        <PigLoading />
      </div>
    </div>
  );
};

const PigLoading = () => <Lottie animationData={pigLoading} loop={true} />;

export default Loading;
