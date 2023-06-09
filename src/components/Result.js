import React, { useState, useEffect } from "react";

function Result({
  isOldClicked,
  isNewClicked,
  oldPercentage,
  percentage,
}) {
  const [result, setResult] = useState("");

  useEffect(() => {
    if (oldPercentage > percentage) {
      setResult("хуже.");
    } else if (oldPercentage === percentage) {
      setResult("также.");
    } else {
      setResult("лучше.");
    }
  }, [isOldClicked, isNewClicked, oldPercentage, percentage]);

  return (
    <div className="result">
      {(!isOldClicked || !isNewClicked) && (
        <p className="result__placeholder">
          Чтобы увидеть результат, посчитайте значения за оба года.
        </p>
      )}
      {isOldClicked && isNewClicked && (
        <p className="result__text">
          Раньше было {result}
        </p>
      )}
    </div>
  );
}

export default Result;
