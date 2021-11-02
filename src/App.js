import './css/app.css';
import Board from './components/Board.js'
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
          <Board />
      </header>
    </div>
    </Router>
  );
}

export default App;
