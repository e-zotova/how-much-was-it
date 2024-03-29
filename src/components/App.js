import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";
import {
  oldYearQuestion,
  oldSalaryQuestion,
  oldPriceQuestion,
  newYearQuestion,
  newSalaryQuestion,
  newPriceQuestion,
} from "../utils/constants";

function App() {
  const [oldPercentage, setOldPercentage] = useState(0);
  const [newPercentage, setNewPercentage] = useState(0);
  const [oldYear, setOldYear] = useState(0);
  const [newYear, setNewYear] = useState(0);

  const [isOldClicked, setIsOldClicked] = useState(false);
  const [isNewClicked, setIsNewClicked] = useState(false);

  function oldClicked() {
    setIsOldClicked(true);
  }

  function newClicked() {
    setIsNewClicked(true);
  }

  return (
    <div className="page">
      <Header className="header" />
      <div className="calculator__grid">
        <Form
          year={oldYear}
          setYear={setOldYear}
          percentage={oldPercentage}
          setPercentage={setOldPercentage}
          buttonClicked={oldClicked}
          yearHeader={oldYearQuestion}
          salaryHeader={oldSalaryQuestion}
          priceHeader={oldPriceQuestion}
        />
        <Form
          year={newYear}
          setYear={setNewYear}
          percentage={newPercentage}
          setPercentage={setNewPercentage}
          buttonClicked={newClicked}
          yearHeader={newYearQuestion}
          salaryHeader={newSalaryQuestion}
          priceHeader={newPriceQuestion}
        />
      </div>
      <Result
        isOldClicked={isOldClicked}
        isNewClicked={isNewClicked}
        oldPercentage={oldPercentage}
        newPercentage={newPercentage}
        oldYear={oldYear}
        newYear={newYear}
      />
      <Footer />
    </div>
  );
}

export default App;
