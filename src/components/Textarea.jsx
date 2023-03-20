import { useState } from "react";
import "../App.css";

const Textarea = (props) => {
  return <textarea value={props.text} onChange={props.handleChange} />;
};

export default Textarea;
