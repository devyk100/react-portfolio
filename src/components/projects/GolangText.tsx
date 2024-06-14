import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function GolangText() {
  useGSAP(() => {
    gsap.to("#top-right", {
      backgroundSize: "100%",
      duration: 3,
    });
  });
  return <div className="p-2"></div>;
}

export default GolangText;
