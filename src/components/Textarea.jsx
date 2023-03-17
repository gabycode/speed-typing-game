import { useState } from "react";
import "../App.css";

const Textarea = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  console.log(text);
  return <textarea value={text} onChange={handleChange} />;
};

export default Textarea;
