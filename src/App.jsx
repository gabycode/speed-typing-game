import { useEffect, useState } from "react";
import "./App.css";
import Textarea from "./components/Textarea";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(2);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false);
    }
  }, [timeRemaining, isTimeRunning]);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  function countWords(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  function handleClick() {
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }
  }

  return (
    <div className="App">
      <h1 className="title">How fast do you type?</h1>
      <Textarea text={text} handleChange={handleChange} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => setIsTimeRunning(true)}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
