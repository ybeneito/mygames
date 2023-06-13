import { center, grid } from "~/styles/styles"
import { api } from "~/utils/api"
import GameCard from "./game-card"
import { LoadingPage } from "./loading"


export default function GameList() {
    const { data, isLoading } = api.games.getAll.useQuery()
    if (isLoading) return <LoadingPage />
    if (!data) return <div className={center}>Une erreur est survenue </div>

    return (
        <div className={grid}>
            {data?.map((game) => (
                <GameCard {...game} key={game.id} />)
            )}
        </div>
    )
}


