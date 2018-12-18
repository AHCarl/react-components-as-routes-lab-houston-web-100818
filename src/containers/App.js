import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Route path="/" component={Home} exact={true}/>
        <Route path="/movies" component={Movies} exact={true}/>
        <Route path="/directors" component={Directors} exact={true}/>
        <Route path="/actors" component={Actors} exact={true}/>
      </React.Fragment>
    </Router>
  );
};

export default App
