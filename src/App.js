import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Connect from './components/Connect'
import Error from './components/Errorpage'

function App() {
  return (
    <div className='main-container'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/contact'>
            <Connect />
          </Route>
          <Route path='/*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
