// import React from "react";
import PrimarySectionCard from "../components/PrimarySectionCard";
import Scene from "../components/3D/SceneComponent";

const Primary = () => {
  return (
    <section className="w-screen relative bg-white shadow-lg">
      <div className="h-screen absolute top-0 left-0 w-screen">
        <Scene />
      </div>
      <div className="flex flex-row w-screen z-20">
        <PrimarySectionCard />
        <div className="h-screen md:w-1/2" />
      </div>
    </section>
  );
};

export default Primary;
