import { MdDeleteOutline } from "react-icons/md";
import type { IPlayerType } from "../types/types";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
interface IPlayerPromise {
    player: IPlayerType,
    setSelectedPlayers: Dispatch<SetStateAction<IPlayerType[]>>,
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>,

}
const SelectedPlayersCard = ({ player, setSelectedPlayers, coin, setCoin }: IPlayerPromise) => {
    const handleEventRemove = (player: IPlayerType): void => {
        setCoin(coin + player.price);
        setSelectedPlayers(previous => {
            const filteredAfterRemove = previous.filter(p => p.id !== player.id);
            return [...filteredAfterRemove];
        })
        toast.success(`You successfully remove ${player.name}`);
    }
    return (
        <div className=" flex items-center justify-between w-full min-h-[82px] rounded-xl border border-gray-200 bg-white px-4 py-3 ">

            {/* Left Side */}
            <div className="flex items-center gap-4">

                {/* Player Image */}
                <div className=" w-[52px] h-[52px] rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center
                ">
                    <img src={player.image} alt={player.name} className="w-full h-full object-cover"
                    />
                </div>

                {/* Player Info */}
                <div>
                    <h3 className=" text-base font-semibold text-gray-900
                    ">
                        {player.name}
                    </h3>

                    <p className=" mt-1 text-xs text-gray-500
                    ">
                        {player.role}
                    </p>
                </div>

            </div>

            {/* Delete Button */}
            <button onClick={() => handleEventRemove(player)} className=" text-red-500 hover:text-red-600 hover:scale-110 transition">
                <MdDeleteOutline size={18} />
            </button>

        </div>
    );
};

export default SelectedPlayersCard;