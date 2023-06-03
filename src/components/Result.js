import React, { useState, useEffect } from "react";

function Result({ isClicked, oldPercentage, newPercentage }) {

  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(Number(oldPercentage) > Number(newPercentage) ? "хуже." : "лучше.");
    console.log(oldPercentage > newPercentage);
  }, [isClicked, newPercentage])

  return (
    <div>
      <div className="result">
        В {1990} году было {result}
      </div>
    </div>
  );
}

export default Result;
