// import { useEffect, useState } from "react";
import "./App.css";
import Primary from "./sections/PrimarySection";
import ProjectSection from "./sections/ProjectSection";

function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Primary />
        <ProjectSection />
      </main>
    </>
  );
}

export default App;
