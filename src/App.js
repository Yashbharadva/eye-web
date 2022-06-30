import HomePage from './pages/homepage/homepage';
import signUp from './pages/sign-up/sign-up';
import { HashRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sign-up" component={signUp} />
      </HashRouter>
    </div>
  );
}

export default App;
