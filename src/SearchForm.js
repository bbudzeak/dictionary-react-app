import React, { useState } from "react";
import "./SearchForm.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function SearchForm() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001342f30835f244f39a92d16f4e9fe589e";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
            defaultValue="Type word for definition"
          />
        </form>
        <div className="hint">suggested words: hike, travel, cook, coding</div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
