import HomePage from './pages/homepage/homepage';
import signUp from './pages/sign-up/sign-up';
import signIn from './pages/sign-in/sign-in';
import ShopPage from './pages/shopPage/shopPage';
import Search from './pages/search/search';
import { HashRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Details from './pages/details/details';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/sign-up" component={signUp} />
        <Route  path="/sign-in" component={signIn} />
        <Route path="/Shop-page" component={ShopPage} />
        <Route path="/search" component={Search} />
        <Route path="/product/:id" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
