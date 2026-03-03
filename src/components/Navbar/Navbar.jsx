import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { image } from '../../constants/images'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navId = useId()

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <nav className="navbar">
      
      <div className="logo-div">
        <img src={image.safiLogo} alt="SafiCircles logo" />
        <h2>SafiCircles</h2>
      </div>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls={navId}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>

      <div className={`nav-right ${menuOpen ? 'open' : ''}`} id={navId}>
        <div className="nav-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/features" onClick={() => setMenuOpen(false)}>
            Features
          </Link>
          <Link to="/how-it-works" onClick={() => setMenuOpen(false)}>
            How it works
          </Link>
          <Link to="/pricing" onClick={() => setMenuOpen(false)}>
            Plans/Pricing
          </Link>
          <Link to="/contacts" onClick={() => setMenuOpen(false)}>
            Contacts
          </Link>
        </div>

        <div className="button-div">
          <button className="download-button" type="button">
            Download app
          </button>
        </div>
      </div>

    </nav>
  )
}
export default Navbar