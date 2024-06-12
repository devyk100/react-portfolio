import { Suspense, useState } from "react";
import CyberTyping from "./CyberTyping";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function timelineExecuter(tl: GSAPTimeline, id: string) {
  tl.to(id, {
    left: "100%",
    width: "100%",
    duration: 0.2,
    // delay: 2,
  });
  tl.to(id, {
    width: "100%",
    left: "-100%",
    duration: 0,
  });
  tl.to(id, {
    width: "100%",
    left: "100%",
    duration: 0.5,
  });
  tl.to(id, {
    width: "100%",
    left: "-100%",
    duration: 0,
  });
  tl.to(id, {
    width: "100%",
    left: "0",
    duration: 0.4,
  });
}

function PrimarySectionCard() {
  const [finished, setFinished] = useState(false);
  useGSAP(() => {
    if (!finished) return;
    const tl = gsap.timeline({});
    timelineExecuter(tl, "#underliner");
    timelineExecuter(tl, "#underliner_2");
    timelineExecuter(tl, "#underliner_3");
  }, [finished]);
  return (
    <Suspense fallback={"Loading..."}>
      <div className="w-full flex h-full items-center p-20 flex-col mr justify-center bg-black text-white">
        <CyberTyping
          jpText="こんにちわ。ひらがなわじょずですか。"
          engText="I'm Yash Kumar"
          pattern={[1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1]}
          className="text-5xl text-center font-bold"
          finisher={() => setFinished(true)}
        />
        {/* <div className="text-4xl text-center">I'M YASH KUMAR</div> */}
        <div className="text-2xl mt-4 text-center">
          <span className="relative inline-block z-10 overflow-hidden">
            Software Engineer.{" "}
            <span className="absolute bottom-0 left-0 h-2 w-full overflow-hidden rounded-full shadow-inner">
              <span
                id="underliner"
                className="absolute bottom-0 left-0 w-full h-2 translate-y-[1px] -z-10 rounded-full bg-blue-500 shadow-2xl overflow-hidden"
              ></span>
            </span>
          </span>{" "}
          <span className="relative inline-block z-10 overflow-hidden">
            Full Stack Web Developer.{"  "}
            <span className="absolute bottom-0 left-0 h-2 w-full rounded-full">
              <span
                id="underliner_2"
                className="absolute bottom-0 left-0 w-full h-2 translate-y-[1px] -z-10 rounded-full bg-green-500 shadow-2xl overflow-hidden"
              ></span>
            </span>
          </span>{" "}
          <span className="relative inline-block z-10 overflow-hidden">
            Nerd.{" "}
            <span className="absolute bottom-0 left-0 h-2 w-full rounded-full">
              <span
                id="underliner_3"
                className="absolute bottom-0 left-0 w-full h-2 translate-y-[1px] -z-10 rounded-full bg-yellow-500 shadow-2xl overflow-hidden"
              ></span>
            </span>
          </span>
        </div>
      </div>
    </Suspense>
  );
}

export default PrimarySectionCard;
