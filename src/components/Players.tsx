import { use } from "react";
import type { IPlayerTypePromise } from "../types/types";
import PlayerCard from "./PlayerCard";

const Players = ({ playersPromise }: IPlayerTypePromise) => {
    const players = use(playersPromise);
    return (
        <section className="container mx-auto my-5 space-y-5">
            <div className="flex justify-between">
                <h2 className="font-semibold text-2xl">Abailable Players</h2>
                <div>
                    <button className="btn btn-success border-r-0 rounded-r-none">Abailable</button>
                    <button className="btn rounded-l-none">Selected</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    players.map(player => {
                        return (
                            <PlayerCard key={player.id} player={player}></PlayerCard>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Players;