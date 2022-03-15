
import './App.css';
import Home from './component/Home';
import Information from './component/Information';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/information" component={Information} />
        </Switch> 
    </div>
    </Router>
  );
}

export default App;
