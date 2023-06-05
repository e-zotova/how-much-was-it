import React, { useState } from "react";
import Header from "./Header";
import OldYear from "./OldYear";
import NewYear from "./NewYear";
import Result from "./Result";
import Footer from "./Footer";

function App() {

  const [oldYear, setOldYear] = useState("");
  const [oldPercentage, setOldPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isOldClicked, setIsOldClicked] = useState(false);
  const [isNewClicked, setIsNewClicked] = useState(false);

  const changeOldYear = (oldYear) => {
    setOldYear(oldYear);
  }

  function calculate(price, salary) {
    return Math.round((price / salary) * 100);
  }

  function calculateOldPercentage (price, salary) {
    setOldPercentage(calculate(price, salary));
    setOldYear(oldYear);
    setIsOldClicked(true);
  }

  function calculatePercentage (price, salary) {
    setPercentage(calculate(price, salary));
    setIsNewClicked(true);
  }

  return (
    <div className="page">
      <Header className="header" />
      <div className="calculator__grid">
        <OldYear changeOldYear={changeOldYear} oldPercentage={oldPercentage} calculateOldPercentage={calculateOldPercentage} />
        <NewYear percentage={percentage} calculatePercentage={calculatePercentage} />
      </div>
      <Result isOldClicked={isOldClicked} isNewClicked={isNewClicked} year={oldYear} oldPercentage={oldPercentage} percentage={percentage}/>
      <Footer />
    </div>
  );
}

export default App;
