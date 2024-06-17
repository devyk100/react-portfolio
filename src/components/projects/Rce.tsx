import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Rce() {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function animateIn() {
      console.log("in");
      gsap.to("#top-right", {
        width: "55vw",
        translateX: "5vw",
      });
      gsap.to("#top-left", {
        width: "35vw",
      });
    }
    function animateOut() {}
    divRef.current?.addEventListener("mouseenter", animateIn);
    divRef.current?.addEventListener("mouseleave", animateOut);
    return () => {
      divRef.current?.removeEventListener("mouseenter", animateIn);
      divRef.current?.removeEventListener("mouseleave", animateOut);
    };
  });
  return (
    <div className="p-2 w-full h-full" ref={divRef}>
      Hey
    </div>
  );
}

export default Rce;
