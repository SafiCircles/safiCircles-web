import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MdDashboard, 
  MdPeople, 
  MdGroups, 
  MdSettings, 
  MdPerson,
  MdLogout,
  MdAnalytics
} from 'react-icons/md';
import { image } from '../../constants/images';
import './SuperAdmin.css';

const SuperAdminSidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="admin-sidebar">
      <div className="admin-logo-section">
        <Link to="/" className="admin-brand">
          <span className="safi">safi</span>
          <span className="circles">circles</span>
          <span className="badge">Admin</span>
        </Link>
      </div>
      
      <nav className="admin-nav">
        <Link to="/admin" className={`admin-nav-item ${isActive('/admin') ? 'active' : ''}`}>
          <MdDashboard className="admin-nav-icon" />
          <span>Dashboard</span>
        </Link>
        <Link to="/admin/circles" className={`admin-nav-item ${isActive('/admin/circles') ? 'active' : ''}`}>
          <MdGroups className="admin-nav-icon" />
          <span>All Circles</span>
        </Link>
        <Link to="/admin/users" className={`admin-nav-item ${isActive('/admin/users') ? 'active' : ''}`}>
          <MdPeople className="admin-nav-icon" />
          <span>User Management</span>
        </Link>
        <Link to="/admin/analytics" className={`admin-nav-item ${isActive('/admin/analytics') ? 'active' : ''}`}>
          <MdAnalytics className="admin-nav-icon" />
          <span>Analytics</span>
        </Link>
        <Link to="/admin/profile" className={`admin-nav-item ${isActive('/admin/profile') ? 'active' : ''}`}>
          <MdPerson className="admin-nav-icon" />
          <span>Admin Profile</span>
        </Link>
        <Link to="/admin/settings" className={`admin-nav-item ${isActive('/admin/settings') ? 'active' : ''}`}>
          <MdSettings className="admin-nav-icon" />
          <span>Settings</span>
        </Link>
      </nav>

      <div className="admin-nav" style={{ marginTop: 'auto', borderTop: '1px solid #f4f7fe', paddingTop: '1rem' }}>
        <Link to="/" className="admin-nav-item">
          <MdLogout className="admin-nav-icon" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default SuperAdminSidebar;
