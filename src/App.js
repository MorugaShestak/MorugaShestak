import logo from './logo.svg';
import './App.css';
import Index from "./pages/Index";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Freelance from "./pages/Freelance/Freelance";
import Repos from "./pages/Repos/Repos";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/repos">
                    <Repos/>
                </Route>
                <Route path="/freelance">
                    <Freelance/>
                </Route>
                <Route path="/">
                    <Index/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
