import type { NextPage } from "next";
import { useState } from "react";
import Input from "~/components/input";
import { api } from "~/utils/api";

const AddGame: NextPage = () => {
    const game = api.games.addGame.useMutation()
    const [inputs, setInputs] = useState({
        name: "",
        description: "",
        prix: "",
        players: "",
        minage: "",
        imglink: ""
    })
    const handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        const current = {[name]: value}
        setInputs((prev) => ({...prev, ...current}))
    }

    const sendInputs = () => {
        game.mutate(inputs)
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1>Ajouter un jeu</h1>
            <Input  placeholder="Nom" name="name" type="text" onChange={handleInputs}/>
            <Input  placeholder="Description" name="description" type="text"  onChange={handleInputs}/>
            <Input  placeholder="Lien de l'image" name="imglink" type="text"  onChange={handleInputs}/>
            <Input  placeholder="Prix" name="prix" type="text"  onChange={handleInputs}/>
            <Input  placeholder="Nb de joueurs" name="players" type="text"  onChange={handleInputs}/>
            <Input  placeholder="Age minimum" name="minage" type="text"  onChange={handleInputs}/>
            <button className="btn btn-neutral" onClick={sendInputs}>Envoyer</button>
        </div>
    )
}

export default AddGame