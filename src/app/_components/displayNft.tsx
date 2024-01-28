import Image from "next/image";
import type { DisplayNftProps } from "@/utils/interface";
import TypewriterEffect from "./typewrite";

const DisplayNft = ({ metadata, closeDrawerHandle }: DisplayNftProps) => {
  return (
    <>
      <div className=" flex h-full flex-1 items-center justify-center rounded-t-[10px]">
        <Image
          src={metadata?.image ?? ""}
          priority
          width={375}
          height={375}
          alt="nft mint"
          quality={100}
          className="pointer-events-none"
        />
      </div>
      <div className="relative flex h-full w-full flex-1 flex-col items-start justify-start  text-start text-3xl">
        <div className="absolute flex w-full items-center justify-end">
          <button
            className="m-5 box-border rounded-2xl border-2 border-black p-2"
            onClick={closeDrawerHandle}
          >
            X
          </button>
        </div>
        <div className="m-4 box-border h-full w-full flex-1 items-start justify-start p-4">
          <span className="text-green-700">
            <TypewriterEffect text={`Mint Successful!!!`} />
          </span>
        </div>
        <div className="m-4 box-border h-full w-full flex-1 items-start justify-start p-4">
          <h2 className="text-border">CashHog Haven</h2>
          <span className="block">Bank on Us, Not on Runs</span>
          <h4>{metadata?.name ?? "No name found"}</h4>
          <span className="block">One of One</span>
        </div>
        <div className="m-4 box-border h-full w-full flex-1 items-start justify-start p-4">
          <span className="block">CashHog just found a new home:</span>
          <span className="block text-gray-700">
            {metadata?.owner.slice(0, 8) +
              "......" +
              metadata?.owner.slice(
                metadata.owner.length - 8,
                metadata.owner.length,
              ) || "No Address Found"}
          </span>
        </div>
      </div>
    </>
  );
};

export default DisplayNft;
