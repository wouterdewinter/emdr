export function Box() {
  return (
    <div style={{ width: "1400px", height: "600px", backgroundColor: "#369" }}>
      <div
        style={{
          animation: "bobble infinite 1.5s cubic-bezier(.42,0,.58,1)",
          willChange: "transform",
        }}
      >
        <Dot />
      </div>
    </div>
  );
}

function Dot() {
  return (
    <div
      style={{
        backgroundColor: "#f33",
        width: "80px",
        height: "80px",
        position: "absolute",
        borderRadius: "40px",
        border: "solid 2px #fff",
      }}
    />
  );
}
