import type { Dispatch, SetStateAction } from "react";
import type { IPlayerType } from "../types/types";
import SelectedPlayersCard from "./SelectedPlayersCard";

interface IPlayerTypeSelected {
    selectdPlayers: IPlayerType[],
    setSelectedPlayers: Dispatch<SetStateAction<IPlayerType[]>>,
}
const SelectedPlayers = ({ selectdPlayers, setSelectedPlayers }: IPlayerTypeSelected) => {
    return (
        <div className="container mx-auto">
            {
                selectdPlayers.length === 0 ? <h1 className="text-center">Selected Players is Empty...</h1> : <div className="grid gap-5">
                    {
                        selectdPlayers.map(player => {
                            return (
                                <SelectedPlayersCard key={player.id} player={player} setSelectedPlayers={setSelectedPlayers}></SelectedPlayersCard>
                            )
                        })
                    }
                </div>

            }
        </div>
    );
};

export default SelectedPlayers;