import React, { useState } from "react";

function OldYear({oldPercentage, calculateOldPercentage}) {
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

    calculateOldPercentage(price, salary);
    setYear(year);
  };

  return (
    <form className={`calculator__form`} onSubmit={onSubmit}>
      <div>
        <p className="calculator__header">Какой был год?</p>
        <input
          id="oldYear"
          name="year"
          type="year"
          className="calculator__input"
          autocomplete="off"
          value={formValue.year}
          onChange={handleChange}
          required
        />
        <p className="calculator__header">Какая была зарплата?</p>
        <input
          id="oldSalary"
          name="salary"
          type="salary"
          className="calculator__input"
          value={formValue.salary}
          onChange={handleChange}
          required
        />
        <p className="calculator__header">Сколько стоило?</p>
        <input
          id="oldPrice"
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
        В {year} году стоило {oldPercentage}% от зарплаты
      </div>
    </form>
  );
}

export default OldYear;
