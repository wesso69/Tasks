import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import AddPerson from './components/AddPerson';
import PersonDetails from './Persondetails';
function App() {

  return (

    <Router>
      <Nav />
      <div className="App">
        <h1 className="header"> Homebage</h1>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/add_person" component={AddPerson} />
            <Route exact path="/person_details/:id" component={PersonDetails} />


          </Switch>
        </div>
        <Home />
      </div >
    </Router>
  );
}

export default App;
