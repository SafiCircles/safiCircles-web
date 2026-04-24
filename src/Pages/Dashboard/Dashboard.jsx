import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MdSearch,
  MdTrendingUp
} from 'react-icons/md';
import { 
  HiOutlineArrowUpRight,
  HiOutlineArrowDownLeft
} from 'react-icons/hi2';
import DashboardLayout from './DashboardLayout';
import './Dashboard.css';

const Dashboard = () => {
  const circles = [
    { id: 1, name: 'Family Savings', members: 8, current: 45000, target: 80000 },
    { id: 2, name: 'Tech Workers', members: 12, current: 120000, target: 220000 },
    { id: 3, name: 'Neighborhood', members: 8, current: 45000, target: 80000 },
    { id: 4, name: 'Classroom 85', members: 12, current: 120000, target: 220000 },
  ];

  const activities = [
    { id: 1, type: 'received', title: 'Payout received', circle: 'Family Savings', amount: '+80,000', time: '2h ago' },
    { id: 2, type: 'sent', title: 'Payout received', circle: 'Neighborhood', amount: '-5,000', time: '8h ago' },
    { id: 3, type: 'sent', title: 'Payout received', circle: 'Neighborhood', amount: '-5,000', time: '8h ago' },
    { id: 4, type: 'received', title: 'Payout received', circle: 'Family Savings', amount: '+80,000', time: '2h ago' },
    { id: 5, type: 'sent', title: 'Payout received', circle: 'Neighborhood', amount: '-5,000', time: '8h ago' },
    { id: 6, type: 'received', title: 'Payout received', circle: 'Family Savings', amount: '+80,000', time: '2h ago' },
    { id: 7, type: 'sent', title: 'Payout received', circle: 'Neighborhood', amount: '-5,000', time: '8h ago' },
    { id: 8, type: 'received', title: 'Payout received', circle: 'Family Savings', amount: '+80,000', time: '2h ago' },
    { id: 9, type: 'sent', title: 'Payout received', circle: 'Neighborhood', amount: '-5,000', time: '8h ago' },
    { id: 10, type: 'received', title: 'Payout received', circle: 'Family Savings', amount: '+80,000', time: '2h ago' },
  ];

  return (
    <DashboardLayout>
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Main Content */}
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
            <h1>Good morning, Sandra.</h1>
            <p>Your own digital ikibina management system with all the feature you need.</p>
          </section>

          {/* Total Saved Card */}
          <div className="summary-card">
            <div className="summary-header">
              <span className="summary-label">Total Saved</span>
              <span className="on-track-badge">On track</span>
            </div>
            
            <h2 className="total-amount">183, 000 FRW</h2>
            
            <div className="next-payout">
              <MdTrendingUp />
              <span>Next payout in 5 days</span>
            </div>

            <div className="progress-section">
              <div className="progress-header">
                <span>Savings progress</span>
                <span>56%</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: '56%' }}></div>
              </div>
            </div>
          </div>

          {/* My Circles Section */}
          <section className="circles-section">
            <div className="section-header">
              <h2>My Circles</h2>
              <Link to="/circles" className="view-all">View All</Link>
            </div>

            <div className="circles-grid">
              {circles.map(circle => (
                <div key={circle.id} className="circle-card">
                  <h3>{circle.name}</h3>
                  <p className="member-count">{circle.members} members</p>
                  
                  <div className="circle-progress-bar">
                    <div 
                      className="circle-progress-fill" 
                      style={{ width: `${(circle.current / circle.target) * 100}%` }}
                    ></div>
                  </div>
                  
                  <div className="circle-amounts">
                    <span>{circle.current.toLocaleString()}</span>
                    <span>{circle.target.toLocaleString()} RWF</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Activity Sidebar */}
        <aside className="activity-sidebar">
          <div className="section-header">
            <h2>Recent Activity</h2>
            <Link to="/activity" className="view-all">View All</Link>
          </div>

          <div className="activity-list">
            {activities.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className={`activity-icon ${activity.type}`}>
                  {activity.type === 'received' ? <HiOutlineArrowDownLeft /> : <HiOutlineArrowUpRight />}
                </div>
                <div className="activity-info">
                  <p className="activity-title">{activity.title}</p>
                  <p className="activity-subtitle">{activity.circle}</p>
                </div>
                <div className="activity-meta">
                  <p className={`activity-amount ${activity.amount.startsWith('+') ? 'plus' : ''}`}>
                    {activity.amount}
                  </p>
                  <p className="activity-time">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
