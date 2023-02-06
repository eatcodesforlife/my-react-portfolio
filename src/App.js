import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import SubmissionSuccess from './pages/SubmissionSuccess'
import Layout from './pages/Layout'
import Hero from './pages/Hero'
import Errorpage from './pages/Errorpage'

function App() {
  return (
    <div className='main-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/hero' element={<Hero />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/messagesent' element={<SubmissionSuccess />}/>
            <Route path='/*' element={<Errorpage />}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
