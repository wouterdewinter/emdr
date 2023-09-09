import kick from "./assets/kick.wav";
import { useState } from "react";

export function Box() {
  const [active, setActive] = useState(false);

  const speed = 1.4;
  const audio = new Audio(kick);

  const onAnimationEvent = () => {
    if (active) {
      audio.play();
    }
    setTimeout(
      () => {
        if (active) {
          audio.play();
        }
      },
      (speed * 1000) / 2,
    );
  };

  return (
    <div
      style={{
        width: "1400px",
        height: "600px",
        backgroundColor: "#369",
        position: "relative",
      }}
    >
      <div
        style={{
          animation: active
            ? `bobble infinite ${speed}s cubic-bezier(.42,0,.58,1)`
            : undefined,
          willChange: "transform",
        }}
        onAnimationIteration={onAnimationEvent}
        onAnimationStart={onAnimationEvent}
      >
        <Dot />
      </div>
      <div
        style={{
          textAlign: "center",
          position: "absolute",
          bottom: "10%",
        }}
      >
        <button onClick={() => setActive(!active)}>
          {active ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
}

function Dot() {
  console.log("render");
  return (
    <div
      style={{
        backgroundColor: "#f33",
        // filter: "blur(2px)",
        width: "80px",
        height: "80px",
        position: "absolute",
        borderRadius: "40px",
        // border: "solid 2px #fff",
      }}
    />
  );
}
