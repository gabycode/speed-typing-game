import { useState, useRef, useEffect } from "react";

const useLogic = () => {
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
  return {
    text,
    timeRemaining,
    setTimeRemaining,
    isTimeRunning,
    handleChange,
    textAreaRef,
    startGame,
    endGame,
    wordCount,
  };
};

export default useLogic;
