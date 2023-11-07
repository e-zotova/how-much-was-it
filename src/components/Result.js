import React, { useState, useEffect } from "react";

function Result({
  isOldClicked,
  isNewClicked,
  oldPercentage,
  newPercentage,
  oldYear,
  newYear
}) {
  const [result, setResult] = useState("");

  useEffect(() => {
    if (oldPercentage > newPercentage) {
      setResult("хуже.");
    } else if (oldPercentage === newPercentage) {
      setResult("также.");
    } else {
      setResult("лучше.");
    }
  }, [isOldClicked, isNewClicked, oldPercentage, newPercentage, oldYear, newYear]);

  return (
    <div className="result">
      {(!isOldClicked || !isNewClicked) && (
        <p className="result__placeholder">
          Чтобы увидеть результат, посчитайте значения за оба года.
        </p>
      )}
      {((oldYear >= newYear) && oldYear !== 0 && newYear !== 0) && (
        <p className="result__placeholder">
          Год в колонке слева должен быть меньше, чем год в колонке справа.
        </p>
      )}
      {(oldYear < newYear) && isOldClicked && isNewClicked && (
        <p className="result__text">
          Раньше было {result}
        </p>
      )}
    </div>
  );
}

export default Result;
