import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MdSearch,
  MdAdd
} from 'react-icons/md';
import { 
  HiOutlineLockClosed,
  HiOutlineGlobeAlt,
  HiOutlineArrowDownLeft,
  HiOutlineUserGroup
} from 'react-icons/hi2';
import DashboardLayout from './DashboardLayout';
import './Dashboard.css';

const MyCircles = () => {
  const myCircles = [
    { id: 1, name: 'Family Savings', creator: 'Sandra Kimberly', members: 8, current: 45000, target: 80000, type: 'locked' },
    { id: 2, name: 'Tech Workers', creator: 'John Doe', members: 8, current: 45000, target: 80000, type: 'globe' },
    { id: 3, name: 'Neighborhood', creator: 'Alice Smith', members: 8, current: 45000, target: 80000, type: 'locked' },
    { id: 4, name: 'Classroom 85', creator: 'Bob Johnson', members: 8, current: 45000, target: 80000, type: 'globe' },
  ];

  const recentActivities = [
    { id: 1, type: 'payout', title: 'Payout received', detail: 'You received 80,000 FRW from Family Savings', time: '2h ago' },
    { id: 2, type: 'join', title: 'New member joined', detail: 'Alice joined your Tech Workers circle', time: '5h ago' },
  ];

  return (
    <DashboardLayout>
      <main className="dashboard-main">
        <header className="top-bar">
          <div className="search-wrapper">
            <MdSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search circles, security features, ..." 
              className="search-input"
            />
          </div>
        </header>

        <section className="greeting-section">
          <h1>My Circles</h1>
          <p>The circles ( Ikibina ) you are apart of and the ones you can join</p>
        </section>

        <div className="circles-grid">
          {myCircles.map(circle => (
            <div key={circle.id} className="circle-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div className="circle-header-card">
                {circle.type === 'locked' ? <HiOutlineLockClosed /> : <HiOutlineGlobeAlt />}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3>{circle.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', color: '#666' }}>
                    <HiOutlineUserGroup />
                    <span>{circle.members}</span>
                  </div>
                </div>
                <p className="member-count">Creator: {circle.creator}</p>
                
                <div className="circle-progress-bar">
                  <div 
                    className="circle-progress-fill" 
                    style={{ width: `${(circle.current / circle.target) * 100}%` }}
                  ></div>
                </div>
                
                <div className="circle-amounts">
                  <span>{circle.current.toLocaleString()} RWF</span>
                  <span>{circle.target.toLocaleString()} RWF</span>
                </div>
              </div>
            </div>
          ))}

          {/* Create New Circle Card */}
          <div className="circle-card create-circle-card">
            <MdAdd className="plus-icon" />
            <h3>Create New Circle</h3>
            <p className="member-count">Start a new trust network</p>
          </div>
        </div>

        <section style={{ marginTop: '3rem' }}>
          <h2>Recent Circle Activities</h2>
          <div className="activities-horizontal">
            {recentActivities.map(activity => (
              <div key={activity.id} className="activity-item horizontal-activity">
                <div className={`activity-icon ${activity.type === 'payout' ? 'received' : 'sent'}`}>
                  {activity.type === 'payout' ? <HiOutlineArrowDownLeft /> : <HiOutlineUserGroup />}
                </div>
                <div className="activity-info">
                  <p className="activity-title">{activity.title}</p>
                  <p className="activity-subtitle">{activity.detail}</p>
                </div>
                <div className="activity-meta">
                  <p className="activity-time">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
};

export default MyCircles;
