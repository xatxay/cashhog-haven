import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const healthRouter = createTRPCRouter({
  checkHealth: publicProcedure.query(async () => {
    try {
      return { success: true, message: "hello world" };
    } catch (err) {
      console.error("Error checking health: ", err);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to check health",
      });
    }
  }),
});
