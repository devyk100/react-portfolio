import React from "react";
import BulbScene from "../components/BulbScene";
import PrimarySectionCard from "../components/PrimarySectionCard";

const Primary = () => {
  return (
    <section className="h-screen w-screen overflow-x-hidden flex flex-row relative bg-white">
      <BulbScene />
      <PrimarySectionCard />
    </section>
  );
};

export default Primary;
