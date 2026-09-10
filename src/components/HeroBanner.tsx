import { useState, type Dispatch, type SetStateAction } from "react";
import HeroImg from "../assets/banner-main.png"
import HeroBg from '../assets/bg-hero.png';
import { toast } from "react-toastify";
interface IPlayerHeroPromise {
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>
}
const HeroBanner = ({ coin, setCoin }: IPlayerHeroPromise) => {
    const [credit, setCredit] = useState<boolean>(true);
    const [deposit, setDiposit] = useState<number>(0);
    const handleFreeCreadit = (): void => {
        if (credit && coin > 0) {
            const giftCredit = deposit * 0.10;
            setCoin(coin + giftCredit);
            toast.success("Congraluction! You Got 500$ coin Free.");
            setCredit(false);
        } else if (!credit) {
            toast.error("Already claim free credit.")
        } else {
            toast.error("First you need to one Time deposit atleast $2000")
        }
    }

    const handleDeposite = () => {
        if (deposit >= 2000) {
            setCoin(coin + deposit);
            toast.success(`on time ${deposit} coin deposit success.`);
        } else {
            toast.error(`You need to at leat 2000 coin on time deposit.`);
        }
    }
    return (
        <div className="container mx-auto ">
            <div style={{ backgroundImage: `url(${HeroBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className={`rounded-xl w-full h-130 text-center space-y-5 flex justify-center flex-col items-center`}>
                <div className="flex justify-center">
                    <img src={HeroImg} alt="" />
                </div>
                <h2 className="text-white text-4xl font-bold ">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className="text-2xl text-white">Beyond Boundaries Beyond Limits</p>
                <span className={`border border-lime-200 rounded flex gap-2 ${coin === 0 ? "hidden" : "block"}`}>
                    <button onClick={handleFreeCreadit} className="font-semibold py-2 px-3 bg-yellow-400 m-1 rounded">Claim Free Credit</button>
                </span>
                {/*one time Deposit coin for purcess players */}
                <div className={`flex gap-2 ${coin > 0 ? "hidden" : "block"}`}>
                    <input onChange={(e) => { setDiposit(Number(e.target.value)) }} className="input" type="number" name="" id="" placeholder="One Time Deposit coin ..." />
                    <button onClick={handleDeposite} className="btn btn-success">Deposit</button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;