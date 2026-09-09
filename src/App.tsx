import { Suspense, useState } from "react";
import HeroBanner from "./components/HeroBanner"
import Navbar from "./components/Navbar"
import Players from "./components/Players"
import type { IPlayerType } from "./types/types";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const playersPromise = async (): Promise<IPlayerType[]> => {
  const res = await fetch("/players.json");
  const data = res.json()
  return data;
}
function App() {
  const [coin, setCoin] = useState(5000);
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <HeroBanner></HeroBanner>
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
        <Players playersPromise={playersPromise()} coin={coin} setCoin={setCoin}></Players>
      </Suspense>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  )
}

export default App
