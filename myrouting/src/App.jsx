import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import "./App.css";
// import "./assets/style.css"
import { Routes , Route } from "react-router-dom"

export default function App() {
  return (
    <div>
      <h1>Hello Routing</h1>
      <h1 className='heading'>RESUME</h1>
      <Navbar />
      <Routes>
         <Route path="/home" element = {<Home />}></Route>
         <Route path="/about" element = {<About />}></Route>
         <Route path="/contact" element = {<Contact />}></Route>
      </Routes>
    </div>
  )
}
