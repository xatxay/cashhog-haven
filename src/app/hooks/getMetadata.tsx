import getMintAddress from "../_components/connectWallet/getMintAddress";
import type { Umi } from "@metaplex-foundation/umi";
import fetchUserNft from "../_components/connectWallet/fetchNft";
import { useEffect, useState } from "react";

const useGetMetadata = (signature: Uint8Array, umi: Umi) => {
  console.log("usemeta: ", signature);
  const [nftData, setNftData] = useState({ name: "", image: "", owner: "" });
  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("getting mint address");
        const mintAddress = await getMintAddress(
          Uint8Array.from(signature),
          umi,
        );
        // console.log("mint adress: ", mintAddress);
        if (!mintAddress) {
          console.error("Mint address is null: ", mintAddress);
          return;
        }
        const nftMetadata = await fetchUserNft(umi, mintAddress.mintAddress);
        // console.log("usenftmeta: ", nftMetadata);
        if (!nftMetadata) {
          console.error("No metadata found: ", nftMetadata);
          return;
        }
        const image = nftMetadata.animation_url
          ? nftMetadata.animation_url
          : nftMetadata.image;
        // console.log("metadata: ", nftMetadata);
        setNftData({
          name: nftMetadata.name ?? "No name found",
          image:
            image ??
            "https://arweave.net/rZteCBzPclPc0nnO0inemmN2c8B2A-jZu3OB_HO0D8g",
          owner: mintAddress.owner,
        });
      } catch (err) {
        console.error("Failed getting nft data: ", err);
      }
    };
    void fetchData();
  }, [signature, umi]);
  return nftData;
};

export default useGetMetadata;
