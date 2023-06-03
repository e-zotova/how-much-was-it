import Header from "./Header";
import OldCalculator from "./OldCalculator";
import NewCalculator from "./NewCalculator";
import Result from "./Result";
import Footer from "./Footer";

function App() {
  return (
    <div className="page">
      <Header className="header" />
      <div className="calculator__grid">
        <OldCalculator />
        <NewCalculator />
      </div>
      <Result />
      <Footer />
    </div>
  );
}

export default App;
