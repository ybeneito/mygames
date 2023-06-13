import type { Game } from "@prisma/client"
import Image from "next/image"

export default function GameCard(game: Game) {

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Image src={game.imgLink} alt={game.name} width="300" height="300" sizes="300px" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{game.name}</h2>
        <p>{game.players} joueurs</p>
        <p>{game.prix}</p>
        <div className="card-actions">
          <button className="btn btn-neutral">Voir la page</button>
        </div>
      </div>
    </div>
  )
}