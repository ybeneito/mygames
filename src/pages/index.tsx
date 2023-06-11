import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import GameCard from "~/components/game-card";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const {data} = api.games.getAll.useQuery()

  return (
    <>
      <AuthShowcase />
      <div className="flex flex-wrap gap-5 w-3/4 justify-center m-auto py-5 ">
      {data?.map((game) => (
      <GameCard {...game} key={game.id}/>)
      )}
      </div>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData &&  
        <span>{sessionData?.user.name}</span>
        }
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Deconnexion" : "Connection"}
      </button>
    </div>
  );
};
