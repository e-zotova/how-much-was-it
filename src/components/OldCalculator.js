import React, { useState } from "react";

function OldCalculator({}) {
  const [oldFormValue, setOldFormValue] = useState({
    oldYear: "",
    oldSalary: "",
    oldPrice: "",
  });

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
    setPercentage(percentage.toFixed(3));
   }

  return (
    <form className={`calculator__form`} onSubmit={onSubmit}>
      <div>
        <p className="login__header">Какой был год?</p>
        <input
          id="old-year"
          name="oldYear"
          type="oldYear"
          className="input login__input"
          value={oldFormValue.oldYear}
          onChange={handleChange}
        />
        <p className="login__header">Какая была зарплата?</p>
        <input
          id="old-salary"
          name="oldSalary"
          type="oldSalary"
          className="input login__input"
          value={oldFormValue.oldSalary}
          onChange={handleChange}
        />
        <p className="login__header">Сколько стоило?</p>
        <input
          id="old-price"
          name="oldPrice"
          type="oldPrice"
          className="input login__input"
          value={oldFormValue.oldPrice}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="button calculator__save-button">
        Посчитать
      </button>
      <div>
        Стоило {percentage}% от зарплаты
      </div>
    </form>
  );
}

export default OldCalculator;
