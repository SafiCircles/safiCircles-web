import React, { useState } from 'react';
import { MdSearch, MdFilterList, MdMoreVert, MdPersonOff, MdVerifiedUser } from 'react-icons/md';
import SuperAdminLayout from './SuperAdminLayout';
import './SuperAdmin.css';

const SuperAdminUsers = () => {
  const [users] = useState([
    { id: 1, name: 'Sandra KIMENYI', email: 'sandra@example.com', phone: '+250 788 123 456', joined: 'Jan 12, 2026', status: 'Active', plan: 'Premium' },
    { id: 2, name: 'Jean Paul M.', email: 'jeanpaul@example.com', phone: '+250 788 987 654', joined: 'Feb 05, 2026', status: 'Active', plan: 'Basic' },
    { id: 3, name: 'Eric N.', email: 'eric.n@example.com', phone: '+250 788 456 789', joined: 'Mar 10, 2026', status: 'Suspended', plan: 'Basic' },
    { id: 4, name: 'Marie Claire', email: 'marie@example.com', phone: '+250 788 321 654', joined: 'Jan 15, 2026', status: 'Active', plan: 'Premium' },
    { id: 5, name: 'David N.', email: 'david@example.com', phone: '+250 788 111 222', joined: 'Apr 02, 2026', status: 'Pending', plan: 'Basic' },
  ]);

  return (
    <SuperAdminLayout title="User Management">
      <div className="admin-stats-grid" style={{ marginBottom: '2rem' }}>
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Total Users</div>
            <div className="stat-value">12,450</div>
            <div className="stat-change up">+14% this month</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Premium Users</div>
            <div className="stat-value">3,120</div>
            <div className="stat-change up">+5% this month</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-label">Suspended Accounts</div>
            <div className="stat-value" style={{ color: 'var(--admin-danger)' }}>45</div>
            <div className="stat-change down">-2% this month</div>
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h2>User Accounts</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="admin-search-wrapper" style={{ minWidth: '200px' }}>
              <MdSearch style={{ color: 'var(--admin-text-muted)' }} />
              <input type="text" placeholder="Search users by name or phone..." className="admin-search-input" />
            </div>
            <button className="admin-btn-primary" style={{ background: 'var(--admin-active-bg)', color: 'var(--admin-accent)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MdFilterList /> Filter
            </button>
          </div>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>User Info</th>
                <th>Contact</th>
                <th>Plan</th>
                <th>Joined</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--admin-active-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--admin-accent)', fontWeight: 'bold' }}>
                        {user.name.charAt(0)}
                      </div>
                      <span style={{ fontWeight: 600, color: 'var(--admin-text-main)' }}>{user.name}</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <span style={{ fontSize: '0.9rem' }}>{user.email}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted)' }}>{user.phone}</span>
                    </div>
                  </td>
                  <td>
                    <span style={{ fontWeight: 600, color: user.plan === 'Premium' ? 'var(--admin-accent)' : 'inherit' }}>
                      {user.plan}
                    </span>
                  </td>
                  <td>{user.joined}</td>
                  <td>
                    <span className={`admin-status-pill status-${user.status.toLowerCase() === 'suspended' ? 'closed' : user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {user.status === 'Active' ? (
                        <MdPersonOff title="Suspend User" style={{ cursor: 'pointer', color: 'var(--admin-danger)', fontSize: '1.2rem' }} />
                      ) : (
                        <MdVerifiedUser title="Activate User" style={{ cursor: 'pointer', color: 'var(--admin-success)', fontSize: '1.2rem' }} />
                      )}
                      <MdMoreVert style={{ cursor: 'pointer', color: 'var(--admin-text-muted)', fontSize: '1.2rem' }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default SuperAdminUsers;
