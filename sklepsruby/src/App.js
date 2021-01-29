import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Frontpage from './pages/Frontpage'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Frontpage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
