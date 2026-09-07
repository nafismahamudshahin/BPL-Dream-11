import { Suspense } from "react";
import HeroBanner from "./components/HeroBanner"
import Navbar from "./components/Navbar"
import Players from "./components/Players"
import type { IPlayerType } from "./types/types";

const playersPromise = async (): Promise<IPlayerType[]> => {
  const res = await fetch("/players.json");
  const data = res.json()
  return data;
}
function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
        <Players playersPromise={playersPromise()}></Players>
      </Suspense>
    </>
  )
}

export default App
