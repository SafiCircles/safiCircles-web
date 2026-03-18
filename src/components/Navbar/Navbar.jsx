import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { image } from '../../constants/images'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navId = useId()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      window.history.pushState(null, null, `#${id}`)
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      
      <div className="logo-div">
        <img src={image.safiLogo} alt="SafiCircles logo" />
        <h2 className="brand-text">SAFICIRCLES</h2>
      </div>

      <div className={`nav-right ${menuOpen ? 'open' : ''}`} id={navId}>
        <div className="nav-links">
          <Link to="/#home" onClick={(e) => scrollToSection(e, 'home')} className="nav-link-item active">
            Home
          </Link>
          <Link to="/#features" onClick={(e) => scrollToSection(e, 'features')} className="nav-link-item">
            Features
          </Link>
          <Link to="/#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="nav-link-item">
            How it works
          </Link>
          <Link to="/#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="nav-link-item">
            Pricing
          </Link>
          <Link to="/#contacts" onClick={(e) => scrollToSection(e, 'contacts')} className="nav-link-item">
            Contacts
          </Link>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="nav-cta-btn">
            Get Started
          </Link>
        </div>
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


    </nav>
  )
}
export default Navbar