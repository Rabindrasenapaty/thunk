import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Create from './components/Create'
import Read from './components/Read'
import { Routes,BrowserRouter,Route } from "react-router"

function App() {
 

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Create/>}></Route>
        <Route path="/read" element={<Read/>}></Route>
        

      </Routes>
      
    </div>
  )
}

export default App
