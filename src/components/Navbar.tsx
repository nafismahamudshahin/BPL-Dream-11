import { BsCoin } from "react-icons/bs";
import Logo from "../assets/logo.png";
const Navbar = ({ coin }: { coin: number }) => {
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
                        <li className="btn">{coin} Coin<BsCoin className="text-yellow-500" /></li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;