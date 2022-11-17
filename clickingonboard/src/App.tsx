import React, { useState } from "react";
import "./App.css";

type TPoint = {
  x: number;
  y: number;
};

const App = () => {
  const [points, setPoints] = useState<TPoint[]>([]);
  const [popped, setPopped] = useState<TPoint[]>([]);

  // To add a point on dashborad
  function handlePlaceCircle(e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = e;
    // because the way a react works with state this is not going re-render this component unless
    // you pass in a new reference to a new array right
    setPoints([
      ...points,
      {
        x: clientX,
        y: clientY,
      },
    ]);
  }

  // Function to delete last dot undo
  function handleUndo() {
    // Remove the last point added to the array
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    if (!poppedPoint) return;
    setPopped([...popped, poppedPoint]);
    setPoints(newPoints);
  }

  // Function where back one stap if you delete dot
  function handleRedo() {
    const newPopped = [...popped];
    const poppedPoint = newPopped.pop();
    if (!poppedPoint) return;
    setPoints([...points, poppedPoint]);
    setPopped(newPopped);
  }

  return (
    <>
      <button disabled={points.length === 0} onClick={handleUndo}>
        Undo
      </button>
      <button disabled={popped.length === 0} onClick={handleRedo}>
        Redo
      </button>
      <div className="App" onClick={handlePlaceCircle}>
        {points?.map((point, index) => (
          <div
            key={index}
            className="point"
            style={{
              left: point.x - 5 + "px",
              top: point.y - 5 + "px",
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default App;
