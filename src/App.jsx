import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Create from './components/Create'
import Read from './components/Read'
import { Routes,BrowserRouter,Route } from "react-router"
import Update from './components/Update'

function App() {
 

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Create/>}></Route>
        <Route path="/read" element={<Read/>}></Route>
        <Route path="/edit/:id" element={<Update/>}></Route>
        

      </Routes>
      
    </div>
  )
}

export default App
