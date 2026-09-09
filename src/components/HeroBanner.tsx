import HeroImg from "../assets/banner-main.png"
import HeroBg from '../assets/bg-hero.png';
const HeroBanner = () => {
    return (
        <div className="container mx-auto ">
            <div style={{ backgroundImage: `url(${HeroBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className={`rounded-xl w-full h-130 text-center space-y-5 flex justify-center flex-col items-center`}>
                <div className="flex justify-center">
                    <img src={HeroImg} alt="" />
                </div>
                <h2 className="text-white text-4xl font-bold ">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className="text-2xl text-white">Beyond Boundaries Beyond Limits</p>
                <span className="border border-lime-200 rounded">
                    <button className="font-semibold py-2 px-3 bg-yellow-400 m-1 rounded">Claim Free Credit</button>
                </span>
            </div>
        </div>
    );
};

export default HeroBanner;