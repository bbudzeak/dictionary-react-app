import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <button type="button" class="btn btn-primary">
            Primary
          </button>
        </header>
        <h1>Hello World</h1>
        <footer className="git-link">
          <span> Project coded by Bethany Budzeak, </span>
          <a
            href="https://github.com/bbudzeak/weather-react-app-project"
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
