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

export const handleMint = async (
  endpoint: string,
  wallet: WalletContextState,
  candyMachineId: string,
) => {
  const umi = createUmi(endpoint)
    .use(mplTokenMetadata())
    .use(mplCandyMachine());

  if (wallet) {
    umi.use(walletAdapterIdentity(wallet));
  }
  const candyMachine = await fetchCandyMachine(umi, publicKey(candyMachineId));
  const candyGuard = await fetchCandyGuard(
    umi,
    publicKey(`6KyrobTBJLCBGTMWytFZG3rkepjoGWUekJZwFBkYAKjZ`),
  );
  console.log("candy machine: ", candyMachine);
  console.log("candy guard: ", candyGuard);
  const nftMint = generateSigner(umi);
  console.log("nftMint: ", nftMint);
  const mintResponse = await transactionBuilder()
    .add(setComputeUnitLimit(umi, { units: 800_000 }))
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
    )
    .sendAndConfirm(umi);
  console.log("mint response: ", mintResponse);
  if (!mintResponse.result.value.err) {
    console.log("mint successful");
  }
};
