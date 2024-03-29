"use client";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import Loading from "../../loading";
import { motion } from "framer-motion";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
const FrontPage = React.lazy(() => import("../homepage/page"));
const AboutPage = React.lazy(() => import("../about/page"));
const Gallery = React.lazy(() => import("../gallery/page"));
const Contact = React.lazy(() => import("../contact/page"));
const ReadyVelocity = React.lazy(() => import("../ready/readyVelocity"));
import "@solana/wallet-adapter-react-ui/styles.css";
import { UmiProvider } from "../connectWallet/umiProvider";

const WholePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true); //change true
  const [letUserMint, setLetUserMint] = useState<boolean | null>(true);
  const [signature, setSignature] = useState<Uint8Array | null>(null);
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const walletsList = useMemo(
    () => [new UnsafeBurnerWalletAdapter()],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={walletsList} autoConnect>
          <WalletModalProvider>
            <UmiProvider>
              {/* <WalletMultiButton /> */}
              {/* <WalletDisconnectButton /> */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
              >
                <main>
                  <FrontPage
                    letUserMint={letUserMint}
                    setLetUserMint={setLetUserMint}
                    signature={signature}
                    setSignature={setSignature}
                  />
                  <AboutPage
                    letUserMint={letUserMint}
                    setSignature={setSignature}
                  />
                  <ReadyVelocity />
                  <Gallery />
                  <Contact
                    letUserMint={letUserMint}
                    setSignature={setSignature}
                  />
                </main>
              </motion.div>
            </UmiProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </Suspense>
  );
};

export default WholePage;
