import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props);
  console.log(props.phonetic.audio);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen 🔊
      </a>
      <span className="text"> {props.phonetic.text}</span>
    </div>
  );
}
