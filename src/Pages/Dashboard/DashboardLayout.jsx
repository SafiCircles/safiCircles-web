import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { MdSearch, MdNotificationsNone, MdInfoOutline, MdDarkMode, MdLightMode } from 'react-icons/md';
import { image } from '../../constants/images';
import './Dashboard.css';

const DashboardLayout = ({ children, title = 'Main Dashboard' }) => {
  // Check local storage or default to light
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Apply the theme to the HTML tag whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="dashboard-container">
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      <div className="dashboard-content-wrapper" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        <header className="dashboard-header">
          <div className="header-title-area">
            <p>Pages / {title}</p>
            <h1>{title}</h1>
          </div>
          
          <div className="dashboard-header-tools">
            <div className="dashboard-search-wrapper">
              <MdSearch style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }} />
              <input type="text" placeholder="Search..." className="dashboard-search-input" />
            </div>
            
            <div onClick={toggleTheme} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', background: 'var(--search-bg)', padding: '0.65rem', borderRadius: '8px' }}>
              {theme === 'light' ? (
                <MdDarkMode style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }} title="Switch to Dark Mode" />
              ) : (
                <MdLightMode style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }} title="Switch to Light Mode" />
              )}
            </div>

            <MdNotificationsNone style={{ fontSize: '1.4rem', color: 'var(--text-muted)', cursor: 'pointer' }} />
            <MdInfoOutline style={{ fontSize: '1.4rem', color: 'var(--text-muted)', cursor: 'pointer' }} />
            <div className="user-avatar-mini" style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--search-bg)', overflow: 'hidden' }}>
              <img src={image.sandraProfile} alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </header>

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
