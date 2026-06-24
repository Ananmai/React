import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      {/* <a href="url">Home</a> */}
      <nav className="nav">
        <Link to="/home" className="nav-tem">Home</Link>
        <Link to="/about" className="nav-tem">About</Link>
        <Link to="/contact" className="nav-tem">Contact</Link>
      </nav>
    </div>
  )
}