import type { WalletContextState } from "@solana/wallet-adapter-react";
import type { Dispatch, SetStateAction } from "react";
import type {
  RpcConfirmTransactionResult,
  Umi,
} from "@metaplex-foundation/umi";

export interface DrawerProps {
  closeDrawerHandle: () => void;
  signature: Uint8Array;
  umi: Umi;
}

export interface TypewriteProps {
  text: string;
  speed?: number;
  loopDelay?: number;
}

export interface MetadataType {
  name: string;
  image: string;
  owner: string;
}

// interface SetMetaData {
//   setMetadata: Dispatch<SetStateAction<MetadataType>>;
//   setSignature: Dispatch<SetStateAction<Uint8Array | undefined>>;
// }

export interface NavBarProps {
  setSignature: Dispatch<SetStateAction<Uint8Array | null>>;
  // openDrawerHandle: () => void;
  umi: Umi;
}

export interface ConnectWalletProps {
  setSignature: Dispatch<SetStateAction<Uint8Array | null>>;
  wallet: WalletContextState;
  setVisible: (open: boolean) => void;
  onButtonClick: (() => void) | undefined;
  umi: Umi;
}

export interface CountDownProps {
  handleCountDown: () => void;
  metadata: MetadataType;
}

export interface MintResponseType {
  signature: Uint8Array;
  result: RpcConfirmTransactionResult;
}

export interface DisplayNftProps {
  metadata: MetadataType;
  closeDrawerHandle: () => void;
}

// export interface getMintReturn {
//   mintAddress: string;
//   walletAddress: string;
// }
