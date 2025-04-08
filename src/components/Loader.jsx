import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center> {/* ✅ Ensures text is inside valid HTML */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <span className="canvas-load"></span>
        <p 
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 10
          }}
        >
          {progress.toFixed(2)}% 
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
