import React, { useState } from "react";

function OldCalculator() {
  const [oldFormValue, setOldFormValue] = useState({
    oldSalary: "",
    oldPrice: "",
  });
  
  const [year, setYear] = useState("");
  const [percentage, setPercentage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOldFormValue({
      ...oldFormValue,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { oldYear, oldSalary, oldPrice } = oldFormValue;

    let percentage = oldPrice/oldSalary * 100;
    setPercentage(percentage.toFixed(2));
    setYear(oldYear);
   }

  return (
    <form className={`calculator__form`} onSubmit={onSubmit}>
      <div>
        <p className="calculator__header">Какой был год?</p>
        <input
          id="oldYear"
          name="oldYear"
          type="oldYear"
          className="calculator__input"
          autocomplete="off"
          value={oldFormValue.oldYear}
          onChange={handleChange}
          required
        />
        <p className="calculator__header">Какая была зарплата?</p>
        <input
          id="old-salary"
          name="oldSalary"
          type="oldSalary"
          className="calculator__input"
          value={oldFormValue.oldSalary}
          onChange={handleChange}
          required
        />
        <p className="calculator__header">Сколько стоило?</p>
        <input
          id="old-price"
          name="oldPrice"
          type="oldPrice"
          className="calculator__input"
          value={oldFormValue.oldPrice}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="button calculator__save-button">
        Посчитать
      </button>
      <div className="calculator__result">
        В {year} году стоило {percentage}% от зарплаты
      </div>
    </form>
  );
}

export default OldCalculator;
