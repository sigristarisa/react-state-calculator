import "./App.css";
import { useState } from "react";

function App() {
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [method, setMethod] = useState();
  const [answer, setAnswer] = useState();

  const getNumOne = (num) => setNumOne(numOne + num);
  const getNumTwo = (num) => setNumTwo(numTwo + num);

  return (
    <div className="calculator">
      <div className="panel">
        <p>{Number(numOne)}</p>
        <div className="numbers">
          <button onClick={() => getNumOne("1")}>1</button>
          <button onClick={() => getNumOne("2")}>2</button>
          <button onClick={() => getNumOne("3")}>3</button>
          <button onClick={() => getNumOne("4")}>4</button>
          <button onClick={() => getNumOne("5")}>5</button>
          <button onClick={() => getNumOne("6")}>6</button>
          <button onClick={() => getNumOne("7")}>7</button>
          <button onClick={() => getNumOne("8")}>8</button>
          <button onClick={() => getNumOne("9")}>9</button>
          <button onClick={() => getNumOne("0")}>0</button>
          <button>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>+</p>
        <div className="numbers">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{Number(numTwo)}</p>
        <div className="numbers">
          <button onClick={() => getNumTwo("1")}>1</button>
          <button onClick={() => getNumTwo("2")}>2</button>
          <button onClick={() => getNumTwo("3")}>3</button>
          <button onClick={() => getNumTwo("4")}>4</button>
          <button onClick={() => getNumTwo("5")}>5</button>
          <button onClick={() => getNumTwo("6")}>6</button>
          <button onClick={() => getNumTwo("7")}>7</button>
          <button onClick={() => getNumTwo("8")}>8</button>
          <button onClick={() => getNumTwo("9")}>9</button>
          <button onClick={() => getNumTwo("0")}>0</button>
          <button>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>0</p>
        <div>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
