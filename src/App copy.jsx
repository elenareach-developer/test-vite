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
   <Sidebar />
  <div className="main">
       <Navbar />
       <div className="row">
       <div className="card greenBg noTop">
            <Hero />
          </div>
          <main>
          <div className="card">
        
          </div>
          <h3 id="sell">Best Selling Products</h3>
                <div className="card add_scroll">
               
          </div>
          </main>
          <h3 id="about">About</h3>
          <div className="card">
            <About />
          </div>
          <h3 id="contactUs">Contact Us</h3>
          <div className="card">
            <Footer />
          </div>
        </div>
   </div>
    </div>
    </>
  )
}

export default App
