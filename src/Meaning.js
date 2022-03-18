import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>Part of Speech: {props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>Definition: {definition.definition}</p>
            <p>
              <em>Example: {definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
