import "./App.css";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <h1>Dictionary App</h1>
          <SearchForm />
        </main>
        <footer className="git-link">
          <span> Project coded by Bethany Budzeak, </span>
          <a
            href="https://github.com/bbudzeak/dictionary-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
