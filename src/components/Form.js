import React, { useState } from "react";

function Form({
  percentage,
  setPercentage,
  buttonClicked,
  yearHeader,
  salaryHeader,
  priceHeader,
  year,
  setYear
}) {
  const [formValue, setFormValue] = useState({
    salary: "",
    price: "",
  });

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

    setPercentage((price / salary) * 100);
    setYear(year);
    buttonClicked();
  };

  return (
    <form className={`calculator__form`} onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="year" className="calculator__header">
          {yearHeader}{" "}
        </label>
        <input
          id="year"
          name="year"
          type="number"
          className="calculator__input"
          value={formValue.year || ""}
          onChange={handleChange}
          min="1900"
          max="2099"
          step="1"
          required
        />
        <label htmlFor="salary" className="calculator__header">
          {salaryHeader}{" "}
        </label>
        <input
          id="salary"
          name="salary"
          type="number"
          className="calculator__input"
          value={formValue.salary || ""}
          onChange={handleChange}
          min="1"
          required
        />
        <label htmlFor="price" className="calculator__header">
          {priceHeader}{" "}
        </label>
        <input
          id="price"
          name="price"
          type="number"
          className="calculator__input"
          value={formValue.price || ""}
          onChange={handleChange}
          min="1"
          required
        />
      </fieldset>
      <button type="submit" className="calculator__save-button">
        Посчитать
      </button>
      <div className="calculator__result">
        В {year} году стоило {percentage?.toFixed(2)}% от зарплаты
      </div>
    </form>
  );
}

export default Form;
