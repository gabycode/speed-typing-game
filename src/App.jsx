import { useState } from "react";
import "./App.css";
import Textarea from "./components/Textarea";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  function countWords(text) {
    const wordsArr = text.trim().split(" ");
    console.log(wordsArr);
    return wordsArr.length;
  }

  return (
    <div className="App">
      <h1 className="title">How fast do you type?</h1>
      <Textarea text={text} handleChange={handleChange} />
      <h4>Time remaining: ???</h4>
      <button onClick={() => countWords(text)}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
