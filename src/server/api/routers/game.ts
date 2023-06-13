/* eslint-disable @typescript-eslint/no-unsafe-call */
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
  }),
  addGame: publicProcedure.input(z.object({
    name: z.string(), description: z.string(), imglink: z.string(), prix: z.string(), players: z.string(), minage: z.string()
  })).mutation(async ({input, ctx}) => {
    const game = {
      name: input.name, 
      description: input.description, 
      imgLink: input.imglink, 
      prix: input.prix, 
      players: input.players, 
      minage: input.minage
    }
    return await ctx.prisma.game.create({data: game}) 
  })
});
