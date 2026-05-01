<<<<<<< HEAD
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MdDashboard, 
  MdOutlinePayments, 
  MdHelpOutline 
} from 'react-icons/md';
import { 
  HiOutlineUsers, 
  HiOutlineUser 
} from 'react-icons/hi2';
import { image } from '../../constants/images';
import './Dashboard.css';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img src={image.safiLogo} alt="SafiCircles Logo" className='dashboard-logo' />
          <span className="brand">
            <span className="safi">safi</span>
            <span className="circles">circles</span>
          </span>
        </Link>
      </div>
      
      <nav className="sidebar-nav">
        <Link to="/dashboard" className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}>
          <MdDashboard className="nav-icon" />
          <span>Dashboard</span>
        </Link>
        <Link to="/circles" className={`nav-item ${isActive('/circles') ? 'active' : ''}`}>
          <HiOutlineUsers className="nav-icon" />
          <span>My Circles</span>
        </Link>
        <Link to="/payments" className={`nav-item ${isActive('/payments') ? 'active' : ''}`}>
          <MdOutlinePayments className="nav-icon" />
          <span>Payments</span>
        </Link>
        <Link to="/profile" className={`nav-item ${isActive('/profile') ? 'active' : ''}`}>
          <HiOutlineUser className="nav-icon" />
          <span>Profile</span>
        </Link>
        <Link to="/help" className={`nav-item ${isActive('/help') ? 'active' : ''}`}>
          <MdHelpOutline className="nav-icon" />
          <span>Help</span>
        </Link>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <img src={image.sandraProfile} alt="Sandra" className="user-avatar" />
          <div className="user-info">
            <span className="name">Sandra KIMENYI</span>
            <span className="status">Premium User</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
=======
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MdDashboard, 
  MdOutlinePayments, 
  MdHelpOutline 
} from 'react-icons/md';
import { 
  HiOutlineUsers, 
  HiOutlineUser 
} from 'react-icons/hi2';
import { image } from '../../constants/images';
import './Dashboard.css';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img src={image.safiLogo} alt="SafiCircles Logo" className='dashboard-logo' />
          <span className="brand">
            <span className="safi">safi</span>
            <span className="circles">circles</span>
          </span>
        </Link>
      </div>
      
      <nav className="sidebar-nav">
        <Link to="/dashboard" className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}>
          <MdDashboard className="nav-icon" />
          <span>Dashboard</span>
        </Link>
        <Link to="/circles" className={`nav-item ${isActive('/circles') ? 'active' : ''}`}>
          <HiOutlineUsers className="nav-icon" />
          <span>My Circles</span>
        </Link>
        <Link to="/payments" className={`nav-item ${isActive('/payments') ? 'active' : ''}`}>
          <MdOutlinePayments className="nav-icon" />
          <span>Payments</span>
        </Link>
        <Link to="/profile" className={`nav-item ${isActive('/profile') ? 'active' : ''}`}>
          <HiOutlineUser className="nav-icon" />
          <span>Profile</span>
        </Link>
        <Link to="/help" className={`nav-item ${isActive('/help') ? 'active' : ''}`}>
          <MdHelpOutline className="nav-icon" />
          <span>Help</span>
        </Link>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <img src={image.sandraProfile} alt="Sandra" className="user-avatar" />
          <div className="user-info">
            <span className="name">Sandra KIMENYI</span>
            <span className="status">Premium User</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
>>>>>>> c8e57c2da76ec770fc85200eb5067df3cbd76c97
