import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isBumping, setIsBumping] = useState(false);

  const handleIncrement = (incrementValue) => {
    const newCount = count + incrementValue;
    setCount(newCount);
    setIsBumping(true);

    setTimeout(() => {
      setIsBumping(false);
    }, 400);
  };

  return (
    <div className={`relative ${isBumping ? "animate-bump" : ""}`}>
      <div className="button-container">
        <button className="up increment" onClick={() => handleIncrement(1)}>
          UpVote
        </button>
        <span className="flex">{count}</span>
        <button className="increment down" onClick={() => handleIncrement(-1)}>
          Down
        </button>
      </div>
    </div>
  );
}

export default Counter;
