import { useMemo } from "react";
import GolangText from "../components/projects/GolangText";

function ProjectSection() {
  // const commonClass = useMemo(
  //   () =>
  //     " bg-indigo-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100",
  //   []
  // );
  return (
    <section className="h-screen bg-black">
      <div className="grid grid-cols-3 px-[5.2vw] py-[4.2vh] grid-rows-3 h-screen w-screen gap-3">
        <div
          className={
            "bg-black w-[30vw] h-[30vh] border-gray-500 border rounded-2xl"
            // +
            // commonClass
          }
        >
          <GolangText />
        </div>
        <div
          className={
            "bg-black w-[60vw] h-[60vh] border-gray-500 border rounded-2xl col-span-2 row-span-2 min-w-full"
            // +
            // commonClass
          }
        ></div>
        <div
          className={
            "bg-black w-[30vw] h-[30vh] border-gray-500 border rounded-2xl overflow-hidden "
            // +
            // commonClass
          }
        ></div>
        <div
          className={
            "bg-black w-[90vw] h-[30vh] border-gray-500 border rounded-2xl row-span-3 min-w-full"
            // +
            // commonClass
          }
        >
          f
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
