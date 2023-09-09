// sound from https://github.com/GoogleChromeLabs/web-audio-samples
import kick from "./assets/kick.wav";
import { useState } from "react";
import Button from "@mui/material/Button";

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
        width: "100%",
        height: "100%",
        //backgroundColor: "#369",
        position: "relative",
      }}
    >
      <div
        style={{
          animation: active
            ? `bounce infinite ${speed}s cubic-bezier(.42,0,.58,1)`
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
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => setActive(!active)}
        >
          {active ? "Stop" : "Start"}
        </Button>
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
