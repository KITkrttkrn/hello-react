import React from "react";

export default function style() {
  const style = {
    container: { backgroundColor: "yellow", height: 200 },
  };
  return (
    <div style={style.container}>
      <h1>Style</h1>
    </div>
  );
}
