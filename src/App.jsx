import { useState } from 'react'
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Navbar from"./components/Navbar/Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
    
     {/* <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
        {/*  <Navbar />
          <Sidebar />
          <Home />
        </main>
  </BrowserRouter>*/}
   <Sidebar 
  <div className="main">
       <Navbar />
      </div>
    
    </div>
    </>
  )
}

export default App
