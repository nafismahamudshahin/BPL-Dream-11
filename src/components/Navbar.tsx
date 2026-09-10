import { BsCoin } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { useState, type Dispatch, type SetStateAction } from "react";
interface Props {
    coin: number,
    setSearch: Dispatch<SetStateAction<string>>
}
const Navbar = ({ coin, setSearch }: Props) => {
    const [hideSearch, setHideSearch] = useState<boolean>(true);
    const [getSearchName, setGetSearchName] = useState<string>("");

    return (
        <nav className="my-6">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    {/* logo */}
                    <img src={Logo} alt="site logo" />
                </div>
                <div className="">
                    <ul className="flex gap-10 items-center">
                        <li className="text-[#131313] cursor-pointer">Home</li>
                        <li className="text-[#131313] cursor-pointer">Fixture</li>
                        <li className="text-[#131313] cursor-pointer">Teams</li>
                        <li className="text-[#131313] cursor-pointer">Schedules</li>
                        {/* Search player by name */}
                        <li className="flex gap-2 items-center">
                            <input onChange={(e) => setGetSearchName(e.target.value)} className={`input w-30 ${hideSearch ? "hidden" : "block"}`} placeholder="Search Player by name..." type="text" name="" id="" />
                            {
                                hideSearch ? <IoSearch onClick={() => setHideSearch(false)} className="text-2xl" /> : <IoSearch onClick={() => setSearch(getSearchName.toLowerCase())} className="text-2xl" />
                            }
                        </li>
                        <li className="btn">{coin} Coin<BsCoin className="text-yellow-500" /></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;