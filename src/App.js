import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import Navigation from './Components/Navigation'
import Home from './Components/Home'
import Videos from './Components/Videos'
import Uploadvideos from './Components/Uploadvideos'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Footer from './Components/Footer'

function App() {
  return (
  <Router>
    <Navigation/>
    <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/videos" element = {<Videos/>}/>
    <Route path="/uploadvideos" element = {<Uploadvideos/>}/>
    <Route path="/login" element = {<Login/>}/>
    <Route path="/signup" element = {<Signup/>}/>
    </Routes>
    <Footer/>
  </Router>
     )
}

export default App;
