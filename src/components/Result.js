import React, { useState, useEffect } from "react";

function Result({ isClicked, oldPercentage, percentage }) {

  const [result, setResult] = useState("");

  useEffect(() => {
    setResult(oldPercentage > percentage ? "хуже." : "лучше.");
  }, [isClicked, oldPercentage, percentage])

  return (
    <div className="result">
      <p className="result__text">В {1990} году было {result}</p>
    </div>
  );
}

export default Result;
