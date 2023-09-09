// sound from https://github.com/GoogleChromeLabs/web-audio-samples
import kick from "./assets/kick.wav";
import { useState } from "react";
import Button from "@mui/material/Button";

export function Box() {
  const [active, setActive] = useState(false);

  const speed = 1.5;

  // setup audio
  const audioContext = new AudioContext();
  const audio = new Audio(kick);
  const track = audioContext.createMediaElementSource(audio);
  const stereoNode = new StereoPannerNode(audioContext);
  track.connect(stereoNode).connect(audioContext.destination);

  const onAnimationEvent = () => {
    if (active) {
      // play left
      stereoNode.pan.value = -1;
      audio.play();
    }
    setTimeout(
      () => {
        if (active) {
          // play right
          stereoNode.pan.value = 1;
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
        backgroundColor: "#123",
        position: "relative",
      }}
    >
      <div
        style={{
          top: "calc(30% - 40px)",
          position: "relative",
          animation: active
            ? `bounce infinite ${speed}s cubic-bezier(.42,0,.58,1)`
            : undefined,
          willChange: "transform",
        }}
        onAnimationIteration={onAnimationEvent}
        onAnimationStart={onAnimationEvent}
      >
        {active && <Dot />}
      </div>
      <div
        style={{
          textAlign: "center",
          position: "absolute",
          top: "70%",
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
  return (
    <div
      style={{
        backgroundColor: "#fff",
        filter: "blur(5px)",
        width: "80px",
        height: "80px",
        borderRadius: "40px",
      }}
    />
  );
}
