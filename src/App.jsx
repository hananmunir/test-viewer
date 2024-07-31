import React, { useState } from "react";
import Navbar from "./Components/navigation/Navbar";
import Scene from "./Components/Scene";

function App() {
  const [model, setModel] = useState(1);
  const [useAR, setUseAR] = useState(false); // New state to toggle between AR and Three.js scene
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
      <Navbar openNav={openNav} closeNav={closeNav} setModel={setModel} />
      <button
        onClick={() => setUseAR(!useAR)}
        className="absolute top-4 right-4 z-10"
      >
        Toggle AR
      </button>
      <Scene model={model} useAR={useAR} />
    </div>
  );
}

export default App;
