import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ParticleBkgd from "./components/ParticleBkgd";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import ProjectCard from "./components/ProjectCard";

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
