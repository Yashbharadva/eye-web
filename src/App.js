import HomePage from './pages/homepage/homepage';
import signUp from './pages/sign-up/sign-up';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename="/tothepoint_login">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sign-up" component={signUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
