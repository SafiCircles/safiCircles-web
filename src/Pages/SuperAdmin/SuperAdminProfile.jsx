import React from 'react';
import SuperAdminLayout from './SuperAdminLayout';
import { image } from '../../constants/images';
import './SuperAdmin.css';

const SuperAdminProfile = () => {
  return (
    <SuperAdminLayout title="Admin Profile">
      <div className="admin-card" style={{ padding: '0 0 2rem 0' }}>
        <div className="profile-header">
          <div className="profile-banner">
            <img src={image.sandraProfile} alt="Admin" className="profile-avatar-large" />
          </div>
          <div className="profile-info-content">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Sandra KIMENYI</h2>
            <p style={{ color: 'var(--admin-text-muted)' }}>Super Admin • System Architect</p>
          </div>
        </div>

        <div style={{ padding: '0 2rem', marginTop: '2rem' }}>
          <div className="settings-grid">
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" defaultValue="Sandra KIMENYI" />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" defaultValue="sandra.k@saficircles.com" />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input type="text" defaultValue="+250 788 000 000" />
            </div>
            <div className="input-group">
              <label>Role</label>
              <input type="text" defaultValue="Super Administrator" disabled />
            </div>
          </div>
          
          <button className="admin-btn-primary" style={{ marginTop: '1rem' }}>Update Profile</button>
        </div>
      </div>

      <div className="admin-card" style={{ marginTop: '2rem' }}>
        <div className="admin-card-header">
          <h2>Security Settings</h2>
        </div>
        <div className="settings-grid">
          <div className="input-group">
            <label>Current Password</label>
            <input type="password" placeholder="••••••••" />
          </div>
          <div className="input-group">
            <label>New Password</label>
            <input type="password" placeholder="••••••••" />
          </div>
        </div>
        <button className="admin-btn-primary">Change Password</button>
      </div>
    </SuperAdminLayout>
  );
};

export default SuperAdminProfile;
