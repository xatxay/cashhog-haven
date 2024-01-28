import {
  mintV2,
  fetchCandyMachine,
} from "@metaplex-foundation/mpl-candy-machine";
import {
  transactionBuilder,
  generateSigner,
  publicKey,
  some,
  type Umi,
} from "@metaplex-foundation/umi";
import { setComputeUnitLimit } from "@metaplex-foundation/mpl-toolbox";
import { toast } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";

export const handleMint = async (
  umi: Umi,
  candyMachineId: string,
  setSignature: Dispatch<SetStateAction<Uint8Array | null>>,
) => {
  const toastDelay = 3000;
  const toastId = toast.loading("Minting...", { autoClose: toastDelay });
  const candyMachine = await fetchCandyMachine(umi, publicKey(candyMachineId));
  console.log("candy machine: ", candyMachine);
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
      autoClose: toastDelay,
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
      autoClose: toastDelay,
    });
  } else {
    toast.update(toastId, {
      render: "Failed minting",
      type: "error",
      isLoading: false,
      autoClose: toastDelay,
    });
    console.error("Error minting...: ", mintResponse);
  }
  console.log("handle sig: ", mintResponse.signature);
  setSignature(Uint8Array.from(mintResponse.signature));
  console.log("got signature");
};
