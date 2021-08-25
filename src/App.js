import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/pages/Home';
import Places from './components/pages/Places';
import Signin from './components/pages/Signin';

function App() {
    return (
        <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/places' exact component={Places} />
          <Route path='/signin' component={Signin} />
        </Switch>
      </Router>
    );
};

export default App;