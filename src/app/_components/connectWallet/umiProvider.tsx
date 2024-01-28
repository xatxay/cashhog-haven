import type { UmiProviderProps } from "@/utils/interface";
import { mplCandyMachine } from "@metaplex-foundation/mpl-candy-machine";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import type { Umi } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { useWallet } from "@solana/wallet-adapter-react";
import { createContext, useContext } from "react";

const DEFAULT_UMI: Umi | null = null;

export const UmiContext = createContext<Umi | null>(DEFAULT_UMI);

export const useUmi = () => {
  const umi = useContext(UmiContext);
  if (!umi) {
    throw new Error("useUmi must be used within a UmiProvider");
  }
  return umi;
};

export const UmiProvider = ({ children }: UmiProviderProps) => {
  const endpoint = "https://api.devnet.solana.com";
  const wallet = useWallet();
  const umi = createUmi(endpoint)
    .use(mplTokenMetadata())
    .use(mplCandyMachine());
  if (wallet) {
    umi.use(walletAdapterIdentity(wallet));
  }
  return <UmiContext.Provider value={umi}>{children}</UmiContext.Provider>;
};
