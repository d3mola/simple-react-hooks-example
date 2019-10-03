import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [input, setInput] = React.useState(count);
  const [authors, setAuthors] = React.useState([]);

  React.useEffect(() => {
    const getAuthors = () => {
      const url = `https://randomuser.me/api/?results=${count}`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setAuthors(data.results);
        });
    };

    getAuthors();
  }, [count, input]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{count}</h2>
      <input
        type="number"
        value={input}
        onChange={e => {
          setInput(e.target.value);
          setCount(e.target.value);
        }}
      />
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button disabled={count <= 0} onClick={() => setCount(count - 1)}>
        -
      </button>

      <h4>Authors</h4>
      <div>
        {authors.map(author => (
          <span>
            <p>
              <em>{author.name.title}</em> {author.name.first}{" "}
              {author.name.last}
            </p>
          </span>
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
