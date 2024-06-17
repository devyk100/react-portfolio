// import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import ExpSection from "./sections/ExpSection";
import Primary from "./sections/PrimarySection";
import ProjectSection from "./sections/ProjectSection";

function App() {
  return (
    <>
      <main className="overflow-x-hidden relative">
        <NavBar />
        <Primary />
        <ProjectSection />
        <ExpSection />
      </main>
    </>
  );
}

export default App;
