import { type Umi } from "@metaplex-foundation/umi";
import { toast } from "react-toastify";

interface GetMintAddressReturn {
  mintAddress: string;
  owner: string;
}

const getMintAddress = async (
  signature: Uint8Array,
  umi: Umi,
): Promise<GetMintAddressReturn | null> => {
  try {
    let transaction;
    for (let i = 0; i < 30; i++) {
      console.log("trying: ", i);
      transaction = await umi.rpc.getTransaction(Uint8Array.from(signature));
      if (transaction) {
        break;
      } else {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
    }
    // console.log("umi: ", umi);
    // console.log("signaturemi: ", signature);
    // console.log("get mint address: ", transaction);
    // console.log("getasdasd: ", transaction?.message.accounts[1]);
    if (transaction?.meta.err) {
      console.log("No transaction found: ", transaction);
      toast.error("No transaction found :(", { autoClose: 3000 });
      return null;
    }
    return {
      mintAddress: (transaction?.message.accounts[1] as string) ?? null,
      owner: (transaction?.message.accounts[0] as string) ?? null,
    };
  } catch (err) {
    console.error("Error getting mint address: ", err);
    throw err;
  }
};

export default getMintAddress;
