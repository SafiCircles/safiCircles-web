import { Link } from 'react-router-dom'
import './Navbar.css'
import { image } from '../../constants/images'
function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="logo-div">
        <img src={image.safiLogo} alt="SafiCircles logo" />
        <h2>SafiCircles</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/how-it-works">How it works</Link>
        <Link to="/pricing">Plans/Pricing</Link>
        <Link to="/contacts">Contacts</Link>
      </div>

      <div className="button-div">
        <button className="download-button">
          Download app
        </button>
      </div>

    </nav>
  )
}
export default Navbar