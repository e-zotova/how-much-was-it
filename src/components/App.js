import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";

function App() {
  const [oldPercentage, setOldPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const [isOldClicked, setIsOldClicked] = useState(false);
  const [isNewClicked, setIsNewClicked] = useState(false);

  function oldClicked() {
    setIsOldClicked(true);
  };

  function newClicked() {
    setIsNewClicked(true);
  };

  return (
    <div className="page">
      <Header className="header" />
      <div className="calculator__grid">
        <Form
          percentage={oldPercentage}
          setPercentage={setOldPercentage}
          calculatePercentage={oldClicked}
          yearHeader={"Какой был год?"}
          salaryHeader={"Какая была зарплата в месяц?"}
          priceHeader={"Сколько стоило?"}
        />
        <Form
          percentage={percentage}
          setPercentage={setPercentage}
          calculatePercentage={newClicked}
          yearHeader={"С каким годом сравнить?"}
          salaryHeader={"C какой зарплатой сравнить?"}
          priceHeader={"С какой ценой сравнить?"}
        />
      </div>
      <Result
        isOldClicked={isOldClicked}
        isNewClicked={isNewClicked}
        oldPercentage={oldPercentage}
        percentage={percentage}
      />
      <Footer />
    </div>
  );
}

export default App;
