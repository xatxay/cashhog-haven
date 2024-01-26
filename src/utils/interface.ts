import type { WalletContextState } from "@solana/wallet-adapter-react";
import type { Dispatch, SetStateAction } from "react";

export interface DrawerProps {
  closeDrawerHandle: () => void;
  metadata: MetadataType;
}

export interface TypewriteProps {
  text: string;
  speed?: number;
  loopDelay?: number;
}

export interface MetadataType {
  name: string;
  image: string;
}

interface SetMetaData {
  setMetadata: Dispatch<SetStateAction<MetadataType>>;
}

export interface NavBarProps extends SetMetaData {
  openDrawerHandle: () => void;
}

export interface ConnectWalletProps extends SetMetaData {
  wallet: WalletContextState;
  setVisible: (open: boolean) => void;
  onButtonClick: (() => void) | undefined;
  openDrawerHandle: () => void;
}

// export interface getMintReturn {
//   mintAddress: string;
//   walletAddress: string;
// }
