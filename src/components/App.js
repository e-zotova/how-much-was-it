import React, { useState } from "react";
import Header from "./Header";
import OldYear from "./OldYear";
import NewYear from "./NewYear";
import Result from "./Result";
import Footer from "./Footer";

function App() {

  const [oldPercentage, setOldPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  function calculateOldPercentage (price, salary) {
    let percentage = (price / salary) * 100;
    setOldPercentage(Math.round(percentage));
    setIsClicked(true);
  }

  function calculatePercentage (price, salary) {
    let percentage = (price / salary) * 100;
    setPercentage(Math.round(percentage));
    setIsClicked(true);
  }

  return (
    <div className="page">
      <Header className="header" />
      <div className="calculator__grid">
        <OldYear oldPercentage={oldPercentage} calculateOldPercentage={calculateOldPercentage} />
        <NewYear percentage={percentage} calculatePercentage={calculatePercentage} />
      </div>
      <Result isClicked={isClicked} oldPercentage={oldPercentage} percentage={percentage}/>
      <Footer />
    </div>
  );
}

export default App;
