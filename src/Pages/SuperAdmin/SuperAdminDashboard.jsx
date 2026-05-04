import React from 'react';
import SuperAdminLayout from './SuperAdminLayout';
import { 
  MdBarChart, 
  MdAttachMoney, 
  MdShoppingCart, 
  MdFileCopy 
} from 'react-icons/md';
import './SuperAdmin.css';

const SuperAdminDashboard = () => {
  const stats = [
    { label: 'Total Circles', value: '1,284', change: '+12%', up: true, icon: <MdBarChart /> },
    { label: 'System Liquidity', value: '45.2M RWF', change: '+8.4%', up: true, icon: <MdAttachMoney /> },
    { label: 'Active Users', value: '12,842', change: '+15%', up: true, icon: <MdShoppingCart /> },
    { label: 'Pending Approvals', value: '14', change: '-2%', up: false, icon: <MdFileCopy /> },
  ];

  const recentCircles = [
    { name: 'Kigali Tech Hub', admin: 'Jean Paul', members: 45, liquidity: '1.2M', status: 'Active' },
    { name: 'Gisenyi Farmers', admin: 'Marie Claire', members: 120, liquidity: '4.5M', status: 'Active' },
    { name: 'University Savvy', admin: 'Eric Munyaneza', members: 28, liquidity: '350K', status: 'Pending' },
    { name: 'Nyamirambo Youth', admin: 'Safi Ali', members: 64, liquidity: '890K', status: 'Active' },
  ];

  return (
    <SuperAdminLayout title="Main Dashboard">
      {/* Stats Grid */}
      <div className="admin-stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon-wrapper">
              {stat.icon}
            </div>
            <div className="stat-info">
              <p className="stat-label">{stat.label}</p>
              <h3 className="stat-value">{stat.value}</h3>
              <span className={`stat-change ${stat.up ? 'up' : 'down'}`}>
                {stat.change} <span style={{ fontWeight: 400, color: 'var(--admin-text-muted)' }}>since last month</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-content-grid">
        {/* Main Table */}
        <div className="admin-card">
          <div className="admin-card-header">
            <h2>Recent Circles</h2>
            <button className="admin-btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>View All</button>
          </div>
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Circle Name</th>
                  <th>Admin</th>
                  <th>Members</th>
                  <th>Liquidity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentCircles.map((circle, index) => (
                  <tr key={index}>
                    <td>{circle.name}</td>
                    <td>{circle.admin}</td>
                    <td>{circle.members}</td>
                    <td>{circle.liquidity} RWF</td>
                    <td>
                      <span className={`admin-status-pill status-${circle.status.toLowerCase()}`}>
                        {circle.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Section / Quick Actions */}
        <div className="admin-card">
          <div className="admin-card-header">
            <h2>System Health</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="health-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Payment Gateway</span>
                <span style={{ color: 'var(--admin-success)', fontSize: '0.8rem', fontWeight: 700 }}>Online</span>
              </div>
              <div style={{ height: 6, background: '#eee', borderRadius: 3 }}>
                <div style={{ width: '100%', height: '100%', background: 'var(--admin-success)', borderRadius: 3 }}></div>
              </div>
            </div>
            <div className="health-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>SMS Service</span>
                <span style={{ color: 'var(--admin-success)', fontSize: '0.8rem', fontWeight: 700 }}>Online</span>
              </div>
              <div style={{ height: 6, background: '#eee', borderRadius: 3 }}>
                <div style={{ width: '98%', height: '100%', background: 'var(--admin-success)', borderRadius: 3 }}></div>
              </div>
            </div>
            <div className="health-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Storage (85%)</span>
                <span style={{ color: 'var(--admin-warning)', fontSize: '0.8rem', fontWeight: 700 }}>Warning</span>
              </div>
              <div style={{ height: 6, background: '#eee', borderRadius: 3 }}>
                <div style={{ width: '85%', height: '100%', background: 'var(--admin-warning)', borderRadius: 3 }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default SuperAdminDashboard;
