import HomePage from './pages/homepage/homepage';
import signUp from './pages/sign-up/sign-up';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sign-up" component={signUp} />
      </Switch>
    </div>
  );
}

export default App;
