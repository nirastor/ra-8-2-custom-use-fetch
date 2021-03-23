import './App.css';
import BlockComponent from './BlockComponent'

function App() {
  const PORT = 7777;
  const theGoodURL = `http://localhost:${PORT}/data`
  const theBadURL = `http://localhost:${PORT}/error`
  const theUglyURL = `http://localhost:${PORT}/loading`

  return (
    <div className="App">
      <BlockComponent url={theGoodURL} title="Хороший" />
      <BlockComponent url={theBadURL} title="Плохой" />
      <BlockComponent url={theUglyURL} title="Злой" />
    </div>
  );
}

export default App;
