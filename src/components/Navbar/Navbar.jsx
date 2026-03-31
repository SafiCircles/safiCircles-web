import { useEffect, useId, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineUser, HiOutlineShoppingCart } from 'react-icons/hi'
import './Navbar.css'
import { image } from '../../constants/images'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [activeDropdown, setActiveDropdown] = useState(null)
  const dropdownRef = useRef(null)
  const navId = useId()

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
    const lightSections = ['how-it-works', 'features', 'contacts']
    
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -80% 0px', // Detect what's under the navbar
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (lightSections.includes(entry.target.id)) {
            setTheme('light')
          } else {
            setTheme('dark')
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    // Target all sections
    const sections = document.querySelectorAll('section, .content-wrapper')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${theme}-theme`}>
      
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
          <Link to="" className="getstarted-btn">
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

      {/* Mobile-only compact navbar */}
      <div className="button-container" ref={dropdownRef}>
        <button className="button" onClick={(e) => scrollToSection(e, 'home')}>
          <AiOutlineHome className="icon" />
        </button>

        <div className="dropdown-wrapper">
          <button className="button" onClick={() => setActiveDropdown(activeDropdown === 'features' ? null : 'features')}>
            <FiSearch className="icon" />
          </button>
          {activeDropdown === 'features' && (
            <div className="dropdown-menu">
              <Link to="/#features" onClick={(e) => { scrollToSection(e, 'features'); setActiveDropdown(null) }}>Features</Link>
              <Link to="/#how-it-works" onClick={(e) => { scrollToSection(e, 'how-it-works'); setActiveDropdown(null) }}>How it works</Link>
            </div>
          )}
        </div>

        <div className="dropdown-wrapper">
          <button className="button" onClick={() => setActiveDropdown(activeDropdown === 'profile' ? null : 'profile')}>
            <HiOutlineUser className="icon" />
          </button>
          {activeDropdown === 'profile' && (
            <div className="dropdown-menu">
              <Link to="/#pricing" onClick={(e) => { scrollToSection(e, 'pricing'); setActiveDropdown(null) }}>Pricing</Link>
              <Link to="/#contacts" onClick={(e) => { scrollToSection(e, 'contacts'); setActiveDropdown(null) }}>Contacts</Link>
            </div>
          )}
        </div>

        <button className="button" onClick={() => window.location.href = '/signup'}>
          <HiOutlineShoppingCart className="icon" />
        </button>
      </div>

    </nav>
  )
}
export default Navbar