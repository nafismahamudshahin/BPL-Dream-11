import { use, useState } from "react";
import type { IPlayerType, IPlayerTypePromise } from "../types/types";
import PlayerCard from "./PlayerCard";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({ playersPromise }: IPlayerTypePromise) => {
    const players = use(playersPromise);
    const [selectedButton, setSelectedButton] = useState("abailable");
    const [selectdPlayers, setSelectedPlayers] = useState<IPlayerType[]>([]);
    const handleSelected = (action: "selected" | "abailable") => {
        setSelectedButton(action);
    }
    return (
        <section className="container mx-auto my-5 space-y-5">
            <div className="flex justify-between">
                <h2 className="font-semibold text-2xl">Abailable Players</h2>
                <div>
                    <button onClick={() => handleSelected("abailable")} className={`btn ${selectedButton === "abailable" ? "btn-success" : ""} border-r-0 rounded-r-none`}>Abailable</button>
                    <button onClick={() => handleSelected("selected")} className={`btn ${selectedButton === "selected" ? "btn-success" : ""} rounded-l-none`}>Selected <span>{selectdPlayers.length}</span></button>
                </div>
            </div>
            {
                selectedButton === "abailable" ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        players.map(player => {
                            return (
                                <PlayerCard key={player.id} player={player} selectdPlayers={selectdPlayers} setSelectedPlayers={setSelectedPlayers}></PlayerCard>
                            )
                        })
                    }
                </div> : <SelectedPlayers selectdPlayers={selectdPlayers} setSelectedPlayers={setSelectedPlayers}></SelectedPlayers>
            }
        </section>
    );
};

export default Players;