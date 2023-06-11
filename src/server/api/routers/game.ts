import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const gameRouter = createTRPCRouter({

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.game.findMany()
  }),
  getById: publicProcedure.input(z.object({id: z.string()})).query(async ({ctx, input}) => {
    return ctx.prisma.game.findUnique({
      where: {id: input.id}
    })
  })

});
