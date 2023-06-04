import React, { useState, useEffect } from "react";

function Result({ isClicked, year, oldPercentage, percentage }) {

  const [result, setResult] = useState("");

  useEffect(() => {
    if (oldPercentage > percentage) {
      setResult("хуже.");
    } else if (oldPercentage === percentage) {
      setResult("также.");
    } else {
      setResult("лучше.");
    }
  }, [isClicked, oldPercentage, percentage])

  return (
    <div className="result">
      <p className="result__text">В {year} году было {result}</p>
    </div>
  );
}

export default Result;
