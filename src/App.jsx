import { useState } from "react";
import "./App.css";
import Textarea from "./components/Textarea";

function App() {
  return (
    <div className="App">
      <h1 className="title">How fast do you type?</h1>
      <Textarea />
      <h4>Time remaining: ???</h4>
      <button>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
