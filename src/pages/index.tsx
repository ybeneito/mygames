import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import GameList from "~/components/game-list";


const Home: NextPage = () => {

  return (
    <>
      <AuthShowcase />
      <GameList />
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
