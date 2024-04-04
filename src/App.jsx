import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]); // This effect depends on 'count' and runs whenever 'count' changes

  return (
    <>
      <h1>Will's Difference Between Events and Effects</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> if you would like to change something :)
        </p>
      </div>
      <p className="read-the-docs">
        Explore the difference between handling user events and side effects in
        React.
      </p>
    </>
  );
}

export default App;
