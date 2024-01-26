/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  mintV2,
  mplCandyMachine,
  fetchCandyMachine,
  fetchCandyGuard,
} from "@metaplex-foundation/mpl-candy-machine";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import {
  transactionBuilder,
  generateSigner,
  publicKey,
  some,
} from "@metaplex-foundation/umi";
import { type WalletContextState } from "@solana/wallet-adapter-react";
import { setComputeUnitLimit } from "@metaplex-foundation/mpl-toolbox";
import { toast } from "react-toastify";
import getMintAddress from "./getMintAddress";
import fetchUserNft from "./fetchNft";
import type { Dispatch, SetStateAction } from "react";
import type { MetadataType } from "@/utils/interface";

export const handleMint = async (
  endpoint: string,
  wallet: WalletContextState,
  candyMachineId: string,
  setMetaData: Dispatch<SetStateAction<MetadataType>>,
  openDrawerHandle: () => void,
) => {
  const umi = createUmi(endpoint)
    .use(mplTokenMetadata())
    .use(mplCandyMachine());

  if (wallet) {
    umi.use(walletAdapterIdentity(wallet));
  }
  const toastId = toast.loading("Minting...", { autoClose: 3000 });
  const candyMachine = await fetchCandyMachine(umi, publicKey(candyMachineId));
  const candyGuard = await fetchCandyGuard(
    umi,
    publicKey(`6KyrobTBJLCBGTMWytFZG3rkepjoGWUekJZwFBkYAKjZ`),
  );
  console.log("candy machine: ", candyMachine);
  console.log("candy guard: ", candyGuard);
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
        candyGuard: candyGuard.publicKey,
        mintArgs: {
          mintLimit: some({ id: 1, limit: 1 }),
          solPayment: some({
            value: 0.01,
            destination: publicKey(
              `BFxsqSADQpVRs2oznvCpVsgtrHQJm69Em4YJeMLyyMEF`,
            ),
          }),
        },
      }),
    );
  console.log("transaction: ", transaction);
  let mintResponse;
  try {
    mintResponse = await transaction.sendAndConfirm(umi);
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
  const mintAddress = await getMintAddress(mintResponse?.signature, umi);
  if (!mintAddress) {
    //check
    console.error("Mint address is null");
    toast.update(toastId, {
      render: "Mint address is null",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
    return;
  }
  console.log("mint adress: ", mintAddress);
  const nftMetadata = await fetchUserNft(umi, mintAddress);
  if (!nftMetadata) {
    console.error("No metadata found");
    toast.update(toastId, {
      render: "No metadata found",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
    return;
  }
  const image = nftMetadata.animation_url
    ? nftMetadata.animation_url
    : nftMetadata.image;
  setMetaData({
    name: nftMetadata.name ?? "No name found",
    image: image ?? "",
  });
  console.log("metadata: ", nftMetadata);
  openDrawerHandle();
};
