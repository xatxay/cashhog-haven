import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { RpcConfirmTransactionResult } from "@metaplex-foundation/umi";

export interface LetUserMintType {
  letUserMint: boolean | null;
}

export interface AboutProps extends LetUserMintType {
  setSignature: Dispatch<SetStateAction<Uint8Array | null>>;
}

export interface ContactProps extends LetUserMintType {
  setSignature: Dispatch<SetStateAction<Uint8Array | null>>;
}

export interface UmiProviderProps {
  children: ReactNode;
}

export interface FrontPageProps extends LetUserMintType {
  setLetUserMint: React.Dispatch<React.SetStateAction<boolean | null>>;
  signature: Uint8Array | null;
  setSignature: Dispatch<SetStateAction<Uint8Array | null>>;
}

export interface DrawerProps {
  closeDrawerHandle: () => void;
  signature: Uint8Array;
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

export interface NavBarProps extends LetUserMintType {
  setSignature: Dispatch<SetStateAction<Uint8Array | null>>;
  setLetUserMint: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export interface ConnectWalletProps extends LetUserMintType {
  setSignature: Dispatch<SetStateAction<Uint8Array | null>>;
  setVisible: (open: boolean) => void;
  onButtonClick: (() => void) | undefined;
  setLetUserMint: React.Dispatch<React.SetStateAction<boolean | null>>;
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
