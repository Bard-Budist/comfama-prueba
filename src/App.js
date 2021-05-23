import './App.css';
import { Router } from 'react-router-dom';
import Routes from "./Routes"
import { createBrowserHistory } from 'history'

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Routes/>
    </Router>
  );
}

export default App;