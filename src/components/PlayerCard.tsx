import type { Dispatch, SetStateAction } from "react";
import type { IPlayerType } from "../types/types";
interface IPlayerTypeCardPromise {
    player: IPlayerType,
    selectdPlayers: IPlayerType[],
    setSelectedPlayers: Dispatch<SetStateAction<IPlayerType[]>>,
}
const PlayerCard = ({ player, selectdPlayers, setSelectedPlayers }: IPlayerTypeCardPromise) => {
    const handlePlayerSelected = (player: IPlayerType): void => {
        setSelectedPlayers([...selectdPlayers, player])
    }
    return (
        <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            {/* Player Image */}
            <figure className="relative h-64 overflow-hidden bg-gradient-to-br from-green-100 via-base-200 to-green-50">

                {/* Jersey Number */}
                <span className="absolute left-4 top-4 z-10 rounded-full bg-black/80 px-3 py-1 text-sm font-bold text-white">
                    #{player.jerseyNumber}
                </span>

                {/* Price */}
                <span className="absolute right-4 top-4 z-10 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-content shadow-lg">
                    {player.currency} {player.price.toLocaleString()}
                </span>

                <img
                    src={player.image}
                    alt={`${player.name}'s Photo`}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body p-5">

                {/* Name + Role */}
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h2 className="text-2xl font-bold">
                            {player.name}
                        </h2>

                        <p className="mt-1 text-sm font-medium text-primary">
                            {player.role}
                        </p>
                    </div>

                    <div className="badge badge-outline">
                        {player.country}
                    </div>
                </div>

                {/* Playing Style */}
                <div className="mt-3 grid grid-cols-2 gap-2">

                    <div className="rounded-lg bg-base-200 p-3">
                        <p className="text-xs text-base-content/60">
                            Batting
                        </p>
                        <p className="text-sm font-semibold">
                            {player.battingStyle}
                        </p>
                    </div>

                    <div className="rounded-lg bg-base-200 p-3">
                        <p className="text-xs text-base-content/60">
                            Bowling
                        </p>
                        <p className="text-sm font-semibold">
                            {player.bowlingStyle}
                        </p>
                    </div>

                </div>

                {/* Player Info */}
                <div className="mt-3 flex items-center justify-between text-sm">

                    <span>
                        <span className="text-base-content/60">Age:</span>{" "}
                        <b>{player.age}</b>
                    </span>

                    <span>
                        <span className="text-base-content/60">Matches:</span>{" "}
                        <b>{player.matches}</b>
                    </span>

                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-4 divide-x rounded-xl bg-base-200 py-3 text-center">

                    <div>
                        <p className="text-lg font-bold">
                            {player.runs.toLocaleString()}
                        </p>
                        <p className="text-[11px] text-base-content/60">
                            Runs
                        </p>
                    </div>

                    <div>
                        <p className="text-lg font-bold">
                            {player.centuries}
                        </p>
                        <p className="text-[11px] text-base-content/60">
                            100s
                        </p>
                    </div>

                    <div>
                        <p className="text-lg font-bold">
                            {player.average}
                        </p>
                        <p className="text-[11px] text-base-content/60">
                            Average
                        </p>
                    </div>

                    <div>
                        <p className="text-lg font-bold">
                            {player.strikeRate}
                        </p>
                        <p className="text-[11px] text-base-content/60">
                            SR
                        </p>
                    </div>

                </div>

                {/* More Stats */}
                <div className="mt-3 flex justify-between text-xs text-base-content/60">
                    <span>
                        Half Centuries:{" "}
                        <b className="text-base-content">
                            {player.halfCenturies}
                        </b>
                    </span>

                    <span>
                        Strike Rate:{" "}
                        <b className="text-base-content">
                            {player.strikeRate}
                        </b>
                    </span>
                </div>

                {/* Select Button */}
                <div className="card-actions mt-5">

                    <button disabled={selectdPlayers.find(s => s.id === player.id) ? true : false} onClick={() => handlePlayerSelected(player)} className="btn btn-primary w-full rounded-xl text-base font-semibold">
                        Select Player
                    </button>

                </div>

            </div>
        </div>
    );
};

export default PlayerCard;