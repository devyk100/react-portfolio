import { useMemo } from "react";
import Rce from "../components/projects/Rce";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Euclase from "../components/projects/Euclase";
import GolangDB from "../components/projects/GolangDB";
import GolangText from "../components/projects/GolangText";
gsap.registerPlugin(ScrollTrigger);
function ProjectSection() {
  useGSAP(() => {
    gsap.to(".bento-divs", {
      scrollTrigger: {
        trigger: ".bento-divs",
        scrub: 1,
      }, // start animation when "#top-right" enters the viewport
      backgroundSize: "102%",
      start: "top top",
      ease: "sine",
      stagger: 0.5,
    });
  });
  return (
    <section className="h-screen bg-black">
      <div className="grid grid-cols-3 px-[5.2vw] py-[4.2vh] grid-rows-3 h-screen w-screen gap-3 ">
        <div
          className={
            "bg-black w-[30vw] h-[30vh] border-gray-500 border rounded-2xl bento-divs"
            // +
            // commonClass
          }
          id="top-left"
        >
          <Rce />
        </div>
        <div
          className={
            "bg-black w-[60vw] h-[60vh] border-gray-500 border rounded-2xl col-span-2 row-span-2  bento-divs"
            // +
            // commonClass
          }
          id="top-right"
        >
          <Euclase />
        </div>
        <div
          className={
            "bg-black w-[30vw] h-[30vh] border-gray-500 border rounded-2xl overflow-hidden bento-divs"
            // +
            // commonClass
          }
          id="middle-left"
        >
          <GolangText />
        </div>
        <div
          className={
            "bg-black w-[90vw] h-[30vh] border-gray-500 border rounded-2xl row-span-3 min-w-full bento-divs"
            // +
            // commonClass
          }
          id="bottom"
        >
          <GolangDB />
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
