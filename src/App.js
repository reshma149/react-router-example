import React from 'react';
import './App.css';
import './media.css';
import Menu from './Component/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Project from './Pages/Projects';
import Contact from './Pages/Contact';
import Pnf from './Pages/pnf';



function App() {
  return (
    <BrowserRouter>
    <Menu/>

    {/* add router here. router works as switch */}
    <Routes>
      <Route path={'/'} element={<Home/>} />
      <Route path={'/about'} element={<About/>} />
      <Route path={'/resume'} element={<Resume/>} />
      <Route path={'/projects'} element={<Project/>} />
      <Route path={'/contact'} element={<Contact/>} />
      <Route path={'/*'} element={<Pnf/>} />


    </Routes>
    
      </BrowserRouter>
  );
}

export default App;
