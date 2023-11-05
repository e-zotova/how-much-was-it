import React, { useState } from "react";

function Form({
  percentage,
  setPercentage,
  buttonClicked,
  yearHeader,
  salaryHeader,
  priceHeader,
}) {
  const [formValue, setFormValue] = useState({
    salary: "",
    price: "",
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
          type="year"
          className="calculator__input"
          value={formValue.year || ""}
          onChange={handleChange}
          required
        />
        <label htmlFor="salary" className="calculator__header">
          {salaryHeader}{" "}
        </label>
        <input
          id="salary"
          name="salary"
          type="salary"
          className="calculator__input"
          value={formValue.salary || ""}
          onChange={handleChange}
          required
        />
        <label htmlFor="price" className="calculator__header">
          {priceHeader}{" "}
        </label>
        <input
          id="price"
          name="price"
          type="price"
          className="calculator__input"
          value={formValue.price || ""}
          onChange={handleChange}
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
