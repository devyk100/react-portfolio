import { useEffect, useRef, useState } from "react";

const awaiter1 = () =>
  new Promise((res) => {
    setTimeout(res, 20);
  });
const awaiter2 = () =>
  new Promise((res) => {
    setTimeout(res, 100);
  });

// const jpText = "ひらがなわじょずですか。いっしょにえいがおみましょ。";
// const engText = "I'm Yash Kumar";
// const pattern = [1, 2, 2, 1, 3, 2, 1, 2, 3, 1, 2, 3, 1, 2];
function CyberTyping({
  jpText,
  engText,
  pattern,
  delay,
  className,
  finisher,
}: {
  jpText: string;
  engText: string;
  pattern: number[];
  delay?: number;
  className: string;
  finisher: () => void;
}) {
  // the sum of the pattern must equal the characters inside japanese text please.
  const [tokens, setTokens] = useState<string[]>([]);
  useEffect(() => {
    const tokens = [];
    let i = 0;
    for (let a of pattern) {
      let str = jpText[i];
      a--;
      i++;
      while (a--) {
        str += jpText[i];
        i++;
      }
      tokens.push(str);
    }
    setTokens(tokens);
  }, []);
  useEffect(() => {
    async function cyberTyping() {
      if (delay) {
        await new Promise((res) => {
          setTimeout(res, delay);
        });
      }
      if (tokens.length != engText.length) return;
      for (let i = 0; i < spanRefs.current.length; i++) {
        while (spanRefs.current[i].innerText.length != 1) {
          spanRefs.current[i].innerText =
            spanRefs.current[i].innerText.slice(1);
          await awaiter1();
        }
        spanRefs.current[i].innerHTML = engText[i];
        spanRefs.current[0].className = "";
        await awaiter2();
      }
      await awaiter1();
      divRef.current[0].innerText = engText;
      finisher();
    }
    cyberTyping();
  }, [tokens]);
  const spanRefs = useRef<HTMLSpanElement[]>([]);
  const divRef = useRef<HTMLDivElement[]>([]);
  return (
    <>
      <div
        ref={(r) => {
          if (r) divRef.current[0] = r;
        }}
        className={className}
      >
        {tokens.map((value, i) => {
          return (
            <span
              className={className}
              key={i}
              ref={(r) => {
                if (r) spanRefs.current[i] = r;
              }}
            >
              {value}
            </span>
          );
        })}
      </div>
    </>
  );
}

export default CyberTyping;
