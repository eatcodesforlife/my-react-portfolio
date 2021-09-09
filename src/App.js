import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import MiniProjects from './components/MiniProjects'
import Navbar from './components/Navbar'
// import Connect from './components/Connect'
import Error from './components/Errorpage'
import Projects from './components/Projects'
import ContactFormTest from './components/ContactFormTest'

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
          <Route path='/miniprojects'>
            <MiniProjects />
          </Route>
          <Route path='/contact'>
            {/* <Connect /> */}
            <ContactFormTest />
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
