import HomePage from './pages/homepage/homepage';
import signUp from './pages/sign-up/sign-up';
import signIn from './pages/sign-in/sign-in';
import { HashRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/sign-up" component={signUp} />
        <Route  path="/sign-in" component={signIn} />
      </Switch>
    </div>
  );
}

export default App;
