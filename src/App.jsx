import { useState } from "react";
import Navbar from "./Components/navigation/Navbar";
import Scene from "./Components/Scene";

function App() {
  const [model, setModel] = useState(1);
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    setNavOpen(true);
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    setNavOpen(false);
  };
  return (
    <div className="w-screen h-screen bg-[#1a1a1a] text-white">
      {/* <Navbar openNav={openNav} closeNav={closeNav} setModel={setModel} /> */}
      <Scene />
    </div>
  );
}

export default App;
