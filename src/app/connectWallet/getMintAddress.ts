import { type Umi } from "@metaplex-foundation/umi";
import { toast } from "react-toastify";

const getMintAddress = async (
  signature: Uint8Array,
  umi: Umi,
): Promise<string | null> => {
  try {
    const transaction = await umi.rpc.getTransaction(signature);
    if (transaction?.meta.err) {
      console.log("No transaction found: ", transaction);
      toast.error("No transaction found :(", { autoClose: 3000 });
      return null;
    }
    console.log("transaction: ", transaction);
    return transaction?.message.accounts[1] ?? null;
  } catch (err) {
    console.error("Error getting mint address: ", err);
    throw err;
  }
};

export default getMintAddress;
