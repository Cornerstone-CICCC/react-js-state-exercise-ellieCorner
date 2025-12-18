import { useState } from "react";
import "./App.css";
import LightToggle from "./components/LightToggle";
import LottoNumbers from "./components/LottoNumbers";
import ClickCounter from "./components/ClickCounter";

const App = () => {
  const [isLightsOn, setIsLightsOn] = useState(true);
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle setIsLightsOn={setIsLightsOn} />
      <div
        style={{
          backgroundColor: isLightsOn ? "white" : "black",
          color: isLightsOn ? "black" : "white",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        {isLightsOn ? "Lights are ON" : "Lights are OFF"}
      </div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers setLottoNumbers={setLottoNumbers} />
      <div className="output">
        {lottoNumbers.length > 0 && lottoNumbers.join(", ")}
      </div>

      <h2>Click Counter</h2>
      <ClickCounter setCount={setCount} />
      <div className="output">Count: {count}</div>
    </div>
  );
};

export default App;
