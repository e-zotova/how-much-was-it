import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";

function App() {
  const [oldPercentage, setOldPercentage] = useState(0);
  const [newPercentage, setNewPercentage] = useState(0);

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
          buttonClicked={oldClicked}
          yearHeader={"Какой был год?"}
          salaryHeader={"Какая была зарплата в месяц?"}
          priceHeader={"Сколько стоило?"}
        />
        <Form
          percentage={newPercentage}
          setPercentage={setNewPercentage}
          buttonClicked={newClicked}
          yearHeader={"С каким годом сравнить?"}
          salaryHeader={"C какой зарплатой сравнить?"}
          priceHeader={"С какой ценой сравнить?"}
        />
      </div>
      <Result
        isOldClicked={isOldClicked}
        isNewClicked={isNewClicked}
        oldPercentage={oldPercentage}
        newPercentage={newPercentage}
      />
      <Footer />
    </div>
  );
}

export default App;
