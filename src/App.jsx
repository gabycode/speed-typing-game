import { useEffect, useRef, useState } from "react";
import "./App.css";
import Textarea from "./components/Textarea";

function App() {
  const STARTING_TIME = 15;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(countWords(text));
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  function countWords(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  return (
    <div className="App">
      <h1 className="title">How fast do you type?</h1>
      <Textarea
        text={text}
        handleChange={handleChange}
        isTimeRunning={isTimeRunning}
        textAreaRef={textAreaRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
