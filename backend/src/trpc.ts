import { initTRPC, type AnyRouter } from "@trpc/server";


const ideas = [
  { id: 1, title: "idea 1", description: "idea 1 description" },
  { id: 2, title: "idea 2", description: "idea 2 description" },
  { id: 3, title: "idea 3", description: "idea 3 description" },
  { id: 4, title: "idea 4", description: "idea 4 description" },
  { id: 5, title: "idea 5", description: "idea 5 description" },
]

const trpc = initTRPC.create();

const trpcRouter: AnyRouter = trpc.router({
  getIdeas: trpc.procedure.query(()=>{
    return {ideas};
  }),
});

export default trpcRouter;

export type TrpcRouter = typeof trpcRouter;

