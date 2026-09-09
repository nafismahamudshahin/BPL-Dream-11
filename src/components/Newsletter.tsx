import BgShadow from "../assets/bg-shadow.png";
const Newsletter = () => {
    return (
        <section className="mt-20 -mb-40 relative z-10">
            <div style={{ backgroundImage: `${BgShadow}`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="container mx-auto">
                <div className="flex flex-col justify-center py-20 m-3 rounded-2xl bg-white bg-[radial-gradient(circle_at_0%_100%,rgba(56,189,248,0.35),transparent_35%),radial-gradient(circle_at_100%_0%,rgba(251,146,60,0.35),transparent_35%)]">
                    <div className="text-center space-y-3">
                        <h3 className="text-3xl text-center font-semibold">Subscribe to our Newsletter</h3>
                        <p className="text-[16px]">Get the latest updates and news right in your inbox!</p>
                        <div className="flex gap-3 justify-center">
                            <input className="input input-primary" type="email" name="" id="" placeholder="Enter your Email..." />
                            <button className="font-semibold btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Newsletter;