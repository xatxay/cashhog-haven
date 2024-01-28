/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  mintV2,
  fetchCandyMachine,
  fetchCandyGuard,
} from "@metaplex-foundation/mpl-candy-machine";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import {
  transactionBuilder,
  generateSigner,
  publicKey,
  some,
  type Umi,
} from "@metaplex-foundation/umi";
import { type WalletContextState } from "@solana/wallet-adapter-react";
import { setComputeUnitLimit } from "@metaplex-foundation/mpl-toolbox";
import { toast } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";

export const handleMint = async (
  umi: Umi,
  wallet: WalletContextState,
  candyMachineId: string,
  setSignature: Dispatch<SetStateAction<Uint8Array | null>>,
) => {
  console.log("handle mint: ", umi);
  const toastId = toast.loading("Minting...", { autoClose: 3000 });
  const candyMachine = await fetchCandyMachine(umi, publicKey(candyMachineId));
  // const candyGuard = await fetchCandyGuard(
  //   umi,
  //   publicKey(`GzaaBidWLppNpxH7XvtFoqQDtiZF3johzdrw8qdAbvpG`),
  // );
  console.log("candy machine: ", candyMachine);
  // console.log("candy guard: ", candyGuard);
  const nftMint = generateSigner(umi);
  console.log("nftMint: ", nftMint);
  const transaction = transactionBuilder()
    .add(setComputeUnitLimit(umi, { units: 800000 }))
    .add(
      mintV2(umi, {
        candyMachine: candyMachine.publicKey,
        nftMint: nftMint,
        collectionMint: candyMachine.collectionMint,
        collectionUpdateAuthority: candyMachine.authority,
        candyGuard: candyMachine.mintAuthority,
        mintArgs: {
          mintLimit: some({ id: 1, limit: 100 }),
          solPayment: some({
            value: 0.01,
            destination: publicKey(
              `5biNt1epi3bxsAedRucFkK27gmjFdMSQvmpJ2HEgcyRB`,
            ),
          }),
        },
      }),
    );
  let mintResponse;
  try {
    mintResponse = await transaction.sendAndConfirm(umi, {
      confirm: { commitment: "processed" },
      send: {
        skipPreflight: true,
      },
    });
  } catch (err) {
    console.error("Error sending minting: ", err);
    toast.update(toastId, {
      render: "Failed minting",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
  }
  console.log("mint response: ", mintResponse);
  if (!mintResponse) return null;
  if (!mintResponse.result.value.err) {
    console.log("mint successful");
    toast.update(toastId, {
      render: "Mint Successful",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
  } else {
    toast.update(toastId, {
      render: "Failed minting",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
    console.error("Error minting...: ", mintResponse);
  }
  console.log("handle sig: ", mintResponse.signature);
  setSignature(Uint8Array.from(mintResponse.signature));
  console.log("got signature");
};
