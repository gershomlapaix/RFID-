import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Display from './components/AllCards'
import All_transactions from './components/AllTransactions'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

function App() {
  return (
    <div className="App">     
      <Router>
        <Sidebar />
        <div className="container">
          <Main />
        </div>
      </Router>
    </div>
  );
}

function Main() {
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Display} />
      <Route exact path="/transactions" component={All_transactions} />     
    </Switch>
  );
}

export default App;