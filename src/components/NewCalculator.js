import React, { useState } from "react";

function OldCalculator({}) {
  const [formValue, setFormValue] = useState({
    year: "",
    salary: "",
    price: "",
  });

  const [percentage, setPercentage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { year, salary, price } = formValue;
    
    let percentage = price/salary * 100;
    setPercentage(percentage.toFixed(3));
  };

  return (
    <form className={`calculator__form`} onSubmit={onSubmit}>
      <div>
        <p className="login__header">С каким годом сравнить?</p>
        <input
          id="year"
          name="year"
          type="year"
          className="input login__input"
          value={formValue.year}
          onChange={handleChange}
        />
        <p className="login__header">C какой зарплатой сравнить?</p>
        <input
          id="salary"
          name="salary"
          type="salary"
          className="input login__input"
          value={formValue.salary}
          onChange={handleChange}
        />
        <p className="login__header">С какой ценой сравнить?</p>
        <input
          id="price"
          name="price"
          type="price"
          className="input login__input"
          value={formValue.price}
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
