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

  const changeOldYear = oldYear => setOldYear(oldYear);

  const calculatePercentage = (price, salary) => Math.round((price / salary) * 100);

  const calculateOldPercentage = (price, salary) => {
    setOldPercentage(calculatePercentage(price, salary));
    setOldYear(oldYear);
    setIsOldClicked(true);
  }

  const calculateNewPercentage = (price, salary) => {
    setPercentage(calculatePercentage(price, salary));
    setIsNewClicked(true);
  }

  return (
    <div className="page">
      <Header className="header" />
      <div className="calculator__grid">
        <OldYear changeOldYear={changeOldYear} oldPercentage={oldPercentage} calculateOldPercentage={calculateOldPercentage} />
        <NewYear percentage={percentage} calculatePercentage={calculateNewPercentage} />
      </div>
      <Result isOldClicked={isOldClicked} isNewClicked={isNewClicked} year={oldYear} oldPercentage={oldPercentage} percentage={percentage}/>
      <Footer />
    </div>
  );
}

export default App;
