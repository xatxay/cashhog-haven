import {
  fetchCandyGuard,
  safeFetchMintCounterFromSeeds,
  type MintLimit,
} from "@metaplex-foundation/mpl-candy-machine";
import { type Umi, type Some, publicKey } from "@metaplex-foundation/umi";
import { type WalletContextState } from "@solana/wallet-adapter-react";
import { toast } from "react-toastify";

const checkMintLimt = async (
  candyGuardId: string,
  umi: Umi,
  candyMachineId: string,
  wallet: WalletContextState,
): Promise<boolean | null> => {
  try {
    if (!wallet.connected) return null;
    // console.log("check umi: ", umi);
    if (!umi.identity.publicKey) {
      toast.warn("Connect Wallet to Mint!", { autoClose: 3000 });
      return null;
    }
    const candyGuard = await fetchCandyGuard(umi, publicKey(candyGuardId));
    const mintLimit = candyGuard.guards.mintLimit as Some<MintLimit>;
    const mintCounter = await safeFetchMintCounterFromSeeds(umi, {
      id: mintLimit.value.id,
      user: umi.identity.publicKey,
      candyMachine: publicKey(candyMachineId),
      candyGuard: candyGuard.publicKey,
    });
    if (mintCounter) {
      // console.log("has mint counter: ", mintCounter);
      return mintLimit.value.limit - mintCounter.count > 0 ? true : false;
    } else {
      // console.log("no mint counter: ", mintCounter);
      return true;
    }
  } catch (err) {
    console.error("Failed checking mint limit: ", err);
    throw err;
  }
};

export default checkMintLimt;
