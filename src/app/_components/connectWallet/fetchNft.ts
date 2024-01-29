import { type Umi } from "@metaplex-foundation/umi";
import {
  type JsonMetadata,
  fetchDigitalAsset,
  fetchJsonMetadata,
} from "@metaplex-foundation/mpl-token-metadata";
import { publicKey } from "@metaplex-foundation/umi";
import { toast } from "react-toastify";

const fetchUserNft = async (
  umi: Umi,
  mintAddress: string,
): Promise<JsonMetadata | null> => {
  try {
    const nft = await fetchDigitalAsset(umi, publicKey(mintAddress));
    if (!nft.metadata.uri) {
      console.log("No nft minted: ", nft);
      toast.error("No nft minted :(", { autoClose: 3000 });
      return null;
    }
    const metadata = await fetchJsonMetadata(umi, nft.metadata.uri);
    return metadata;
  } catch (err) {
    console.error("Error getting user nft: ", err);
    throw err;
  }
};

export default fetchUserNft;
