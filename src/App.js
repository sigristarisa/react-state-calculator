import "./App.css";
import { useState } from "react";

function App() {
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [method, setMethod] = useState("+");
  const [answer, setAnswer] = useState(0);
  const [numStored, setNumStored] = useState(0);

  const getNumOne = (num) => setNumOne(Number(numOne + num));
  const clearNumOne = () => setNumOne(0);

  const getNumTwo = (num) => setNumTwo(Number(numTwo + num));
  const clearNumTwo = () => setNumTwo(0);

  const getMethod = (type) => setMethod(type);

  const getAnswer = (numOne, numTwo, method) => {
    if (method === "+") setAnswer(numOne + numTwo);
    if (method === "-") setAnswer(numOne - numTwo);
    if (method === "*") setAnswer(numOne * numTwo);
    if (method === "/") setAnswer(numOne / numTwo);
  };

  const storeAnswer = (answer) => setNumStored(answer);

  const recallAnswerOne = () => setNumOne(numStored);
  const recallAnswerTwo = () => setNumTwo(numStored);

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
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
          <button onClick={() => clearNumOne()}>Clear</button>
          <button onClick={() => recallAnswerOne()}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{method}</p>
        <div className="numbers">
          <button onClick={() => getMethod("+")}>+</button>
          <button onClick={() => getMethod("-")}>-</button>
          <button onClick={() => getMethod("*")}>*</button>
          <button onClick={() => getMethod("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numTwo}</p>
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
          <button onClick={() => clearNumTwo()}>Clear</button>
          <button onClick={() => recallAnswerOne()}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div className="answer-btn">
          <button onClick={() => getAnswer(numOne, numTwo, method)}>=</button>
          <button onClick={() => storeAnswer(answer)}>Store Answer</button>
        </div>
      </div>
    </div>
  );
}

export default App;
