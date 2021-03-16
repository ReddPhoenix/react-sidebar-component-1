import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Timecards from './pages/Timecards';
import Calendar from './pages/Calendar';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/timecards' component={Timecards} />
          <Route path='/calendar' component={Calendar} />
          <Route path='/statistics' component={Statistics} />
          <Route path='/settings' component={Settings} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
