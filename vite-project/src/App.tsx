import React from "react";
import "./App.css";
import DynamicHeader from "./components/DynamicHeader.tsx";
import Introduction from "./components/Introduction.tsx";
import Header from "./components/Header.tsx";
import ParticleBkgd from "./components/ParticleBkgd.tsx";
import Projects from "./components/Projects.tsx";

function App() {
  return (
    <div className="relative min-h-screen">
      <ParticleBkgd />
      <div className="relative z-10">
        <div className="fixed top-0 left-0 w-full z-10">
          <Header />
        </div>
        <Introduction />
        <Projects />
      </div>
    </div>
  );
}

export default App;
