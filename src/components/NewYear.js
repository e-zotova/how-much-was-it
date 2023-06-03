import React, { useState } from "react";

function NewYear({ percentage, calculatePercentage }) {
  const [formValue, setFormValue] = useState({
    salary: 0,
    price: 0,
  });

  const [year, setYear] = useState("");

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

    calculatePercentage(price, salary);
    setYear(year);
  };

  return (
    <form className={`calculator__form`} onSubmit={onSubmit}>
      <div>
        <p className="calculator__header">С каким годом сравнить?</p>
        <input
          id="year"
          name="year"
          type="year"
          className="calculator__input"
          value={formValue.year}
          onChange={handleChange}
          required
        />
        <p className="calculator__header">C какой зарплатой сравнить?</p>
        <input
          id="salary"
          name="salary"
          type="salary"
          className="calculator__input"
          value={formValue.salary}
          onChange={handleChange}
          required
        />
        <p className="calculator__header">С какой ценой сравнить?</p>
        <input
          id="price"
          name="price"
          type="price"
          className="calculator__input"
          value={formValue.price}
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

export default NewYear;
