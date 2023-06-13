import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import GameCard from "~/components/game-card";
import { api } from "~/utils/api";
import { center, grid } from "../styles/styles"
import Link from "next/link";
import { LoadingPage } from "~/components/loading";


const Home: NextPage = () => {
  const {data, isLoading} = api.games.getAll.useQuery()
  if ( isLoading ) return <LoadingPage />
  if (!data) return <div className={center}>Une erreur est survenue </div>

  return (
    <>
      <AuthShowcase />
      <div className={grid}>
      {data?.map((game) => (
      <GameCard {...game} key={game.id}/>)
      )}
      </div>
      <Link href="/addGame">Ajouter</Link>

    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex items-center justify-center gap-4 mt-3">
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
