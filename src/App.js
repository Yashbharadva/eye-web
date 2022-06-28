import HomePage from './pages/homepage/homepage';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
// import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={HomePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
