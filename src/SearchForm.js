import React, { useState } from "react";
import "./SearchForm.css";
import axios from "axios";
import Results from "./Results";

export default function SearchForm() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
            defaultValue="Search word for definition"
          />
        </form>
        <div className="hint">suggested words: hike, travel, cook, coding</div>
      </section>
      <Results results={results} />
    </div>
  );
}
