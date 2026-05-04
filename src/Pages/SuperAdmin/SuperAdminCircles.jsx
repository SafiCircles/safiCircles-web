import React, { useState } from 'react';
import { MdSearch, MdFilterList, MdMoreVert, MdCheckCircle, MdBlock } from 'react-icons/md';
import SuperAdminLayout from './SuperAdminLayout';
import './SuperAdmin.css';

const SuperAdminCircles = () => {
  const [circles] = useState([
    { id: 1, name: 'Kigali Tech Hub', creator: 'Jean Paul', members: 45, balance: '2,500,000 RWF', status: 'Active', type: 'Public' },
    { id: 2, name: 'Family Savings', creator: 'Sandra K.', members: 12, balance: '850,000 RWF', status: 'Active', type: 'Private' },
    { id: 3, name: 'Downtown Traders', creator: 'Eric M.', members: 89, balance: '12,400,000 RWF', status: 'Pending', type: 'Public' },
    { id: 4, name: 'Gisozi Neighbors', creator: 'Marie Claire', members: 24, balance: '1,200,000 RWF', status: 'Closed', type: 'Private' },
    { id: 5, name: 'Freelancers Union', creator: 'David N.', members: 156, balance: '4,500,000 RWF', status: 'Active', type: 'Public' },
  ]);

  return (
    <SuperAdminLayout title="All Circles">
      <div className="admin-card">
        <div className="admin-card-header">
          <h2>Circle Management</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="admin-search-wrapper" style={{ minWidth: '200px' }}>
              <MdSearch style={{ color: 'var(--admin-text-muted)' }} />
              <input type="text" placeholder="Search circles..." className="admin-search-input" />
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
                <th>Circle Name</th>
                <th>Type</th>
                <th>Creator</th>
                <th>Members</th>
                <th>Total Balance</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {circles.map(circle => (
                <tr key={circle.id}>
                  <td style={{ fontWeight: 600, color: 'var(--admin-text-main)' }}>{circle.name}</td>
                  <td>{circle.type}</td>
                  <td>{circle.creator}</td>
                  <td>{circle.members}</td>
                  <td style={{ fontWeight: 600 }}>{circle.balance}</td>
                  <td>
                    <span className={`admin-status-pill status-${circle.status.toLowerCase()}`}>
                      {circle.status}
                    </span>
                  </td>
                  <td>
                    <MdMoreVert style={{ cursor: 'pointer', color: 'var(--admin-text-muted)', fontSize: '1.2rem' }} />
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

export default SuperAdminCircles;
