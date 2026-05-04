import React from 'react';
import SuperAdminLayout from './SuperAdminLayout';
import './SuperAdmin.css';

const SuperAdminSettings = () => {
  return (
    <SuperAdminLayout title="System Settings">
      <div className="admin-card">
        <div className="admin-card-header">
          <h2>Platform Configuration</h2>
        </div>
        
        <div className="settings-grid">
          <div className="settings-column">
            <div className="input-group">
              <label>System Name</label>
              <input type="text" defaultValue="SafiCircles Global" />
            </div>
            <div className="input-group">
              <label>Maintenance Mode</label>
              <select>
                <option>Disabled</option>
                <option>Enabled</option>
              </select>
            </div>
            <div className="input-group">
              <label>Default Transaction Fee (%)</label>
              <input type="number" defaultValue="2.5" />
            </div>
          </div>
          
          <div className="settings-column">
            <div className="input-group">
              <label>Support Email</label>
              <input type="email" defaultValue="admin@saficircles.com" />
            </div>
            <div className="input-group">
              <label>Maximum Circle Members</label>
              <input type="number" defaultValue="500" />
            </div>
            <div className="input-group">
              <label>Currency</label>
              <select>
                <option>RWF (Rwandan Franc)</option>
                <option>USD (US Dollar)</option>
                <option>KES (Kenyan Shilling)</option>
              </select>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <button className="admin-btn-primary">Save Changes</button>
          <button className="admin-btn-primary" style={{ background: '#eee', color: '#333' }}>Reset to Default</button>
        </div>
      </div>

      <div className="admin-card" style={{ marginTop: '2rem' }}>
        <div className="admin-card-header">
          <h2 style={{ color: 'var(--admin-danger)' }}>Critical Actions</h2>
        </div>
        <p style={{ color: 'var(--admin-text-muted)', marginBottom: '1.5rem' }}>These actions can affect the entire system. Please proceed with caution.</p>
        <button className="admin-btn-primary" style={{ background: 'var(--admin-danger)' }}>Clear All System Cache</button>
      </div>
    </SuperAdminLayout>
  );
};

export default SuperAdminSettings;
