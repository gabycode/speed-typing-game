import { useEffect, useRef, useState } from "react";
import "./App.css";
import Textarea from "./components/Textarea";
import useLogic from "./components/useLogic";

function App() {
  const {
    text,
    timeRemaining,
    setTimeRemaining,
    isTimeRunning,
    handleChange,
    textAreaRef,
    startGame,
    endGame,
    wordCount,
  } = useLogic();

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
