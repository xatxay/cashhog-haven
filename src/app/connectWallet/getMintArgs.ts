import type {
  CandyGuard,
  DefaultGuardSetMintArgs,
} from "@metaplex-foundation/mpl-candy-machine";
import { some } from "@metaplex-foundation/umi";

const getMintArgs = (
  candyGuard: CandyGuard,
): Partial<DefaultGuardSetMintArgs> => {
  try {
    const mintArgs: Partial<DefaultGuardSetMintArgs> = {};
    const guards = candyGuard.guards;
    if (guards.solPayment.__option === "Some") {
      mintArgs.solPayment = some({
        lamports: guards.solPayment.value.lamports,
        destination: guards.solPayment.value.destination,
      });
    }

    if (guards.mintLimit.__option === "Some") {
      mintArgs.mintLimit = some({
        id: guards.mintLimit.value.id,
        limit: guards.mintLimit.value.limit,
      });
    }
    return mintArgs;
  } catch (err) {
    console.error("Failed getting mint args: ", err);
    throw err;
  }
};

export default getMintArgs;
