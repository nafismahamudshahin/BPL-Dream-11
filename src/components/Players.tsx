import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IPlayerType } from "../types/types";
import PlayerCard from "./PlayerCard";
import SelectedPlayers from "./SelectedPlayers";
import { toast } from "react-toastify";

interface IPlayerTypeCoinPromise {
    playersPromise: Promise<IPlayerType[]>,
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>,
}

const Players = ({ playersPromise, coin, setCoin }: IPlayerTypeCoinPromise) => {
    const players = use(playersPromise);
    const [selectedButton, setSelectedButton] = useState("abailable");
    const [selectdPlayers, setSelectedPlayers] = useState<IPlayerType[]>([]);


    const handleSelected = (action: "selected" | "abailable") => {
        setSelectedButton(action);
    }
    return (
        <section className="container mx-auto my-5 space-y-5">

            <div className="flex justify-between">
                <h2 className="font-semibold text-2xl">{selectedButton === "abailable" ? "Abailable Players" : `Selected Player (${selectdPlayers.length}/11)`}</h2>
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
                                <PlayerCard key={player.id} player={player} coin={coin} setCoin={setCoin} selectdPlayers={selectdPlayers} setSelectedPlayers={setSelectedPlayers}></PlayerCard>
                            )
                        })
                    }
                </div> : <SelectedPlayers selectdPlayers={selectdPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayers>
            }
        </section>
    );
};

export default Players;