import React from "react";
import "./Synonym.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {" "}
        {props.synonyms.map(function (synonym, index) {
          return (
            <span className="synonym" key={index}>
              {" "}
              {synonym}{" "}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
