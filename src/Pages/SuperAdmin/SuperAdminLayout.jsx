import React, { useState, useEffect } from 'react';
import SuperAdminSidebar from './SuperAdminSidebar';
import { MdSearch, MdNotificationsNone, MdInfoOutline, MdDarkMode, MdLightMode } from 'react-icons/md';
import { image } from '../../constants/images';
import './SuperAdmin.css';

const SuperAdminLayout = ({ children, title, subtitle }) => {
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
    <div className="admin-container">
      <SuperAdminSidebar />
      <div className="admin-content-wrapper">
        <header className="admin-header">
          <div className="header-title-area">
            <p>Pages / {title}</p>
            <h1>{title}</h1>
          </div>
          
          <div className="admin-header-tools">
            <div className="admin-search-wrapper">
              <MdSearch style={{ color: 'var(--admin-text-main)' }} />
              <input type="text" placeholder="Search..." className="admin-search-input" />
            </div>
            
            {/* Theme Toggle Button */}
            <div onClick={toggleTheme} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              {theme === 'light' ? (
                <MdDarkMode style={{ fontSize: '1.2rem', color: 'var(--admin-text-muted)' }} title="Switch to Dark Mode" />
              ) : (
                <MdLightMode style={{ fontSize: '1.2rem', color: 'var(--admin-text-muted)' }} title="Switch to Light Mode" />
              )}
            </div>

            <MdNotificationsNone style={{ fontSize: '1.2rem', color: 'var(--admin-text-muted)', cursor: 'pointer' }} />
            <MdInfoOutline style={{ fontSize: '1.2rem', color: 'var(--admin-text-muted)', cursor: 'pointer' }} />
            <div className="user-avatar-mini" style={{ width: 40, height: 40, borderRadius: '50%', background: '#eee', overflow: 'hidden' }}>
              <img src={image.sandraProfile} alt="Admin" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </header>

        <main className="admin-main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SuperAdminLayout;
