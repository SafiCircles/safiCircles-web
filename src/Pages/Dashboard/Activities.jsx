import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdSearch, MdArrowBack, MdFilterList } from 'react-icons/md';
import { 
  HiOutlineArrowUpRight, 
  HiOutlineArrowDownLeft,
  HiOutlineUserGroup,
  HiOutlineShieldCheck,
  HiOutlineBell
} from 'react-icons/hi2';
import DashboardLayout from './DashboardLayout';
import './Dashboard.css';
import './Activities.css';

const MOCK_ACTIVITIES = [
  { id: 1, type: 'received', title: 'Payout received', circle: 'Family Savings', amount: '+80,000 RWF', time: '2 hours ago', date: 'May 01, 2026' },
  { id: 2, type: 'sent', title: 'Contribution paid', circle: 'Neighborhood', amount: '-5,000 RWF', time: '8 hours ago', date: 'May 01, 2026' },
  { id: 3, type: 'join', title: 'New member joined', circle: 'Tech Workers', amount: null, time: '1 day ago', date: 'Apr 30, 2026' },
  { id: 4, type: 'system', title: 'Security update', circle: 'SafiCircles', amount: null, time: '2 days ago', date: 'Apr 29, 2026' },
  { id: 5, type: 'sent', title: 'Contribution paid', circle: 'Classroom 85', amount: '-10,000 RWF', time: '3 days ago', date: 'Apr 28, 2026' },
  { id: 6, type: 'received', title: 'Payout received', circle: 'Quick Cash', amount: '+150,000 RWF', time: '1 week ago', date: 'Apr 24, 2026' },
  { id: 7, type: 'join', title: 'Invitation accepted', circle: 'Wedding Fund', amount: null, time: '1 week ago', date: 'Apr 22, 2026' },
  { id: 8, type: 'sent', title: 'Contribution paid', circle: 'Family Savings', amount: '-10,000 RWF', time: '2 weeks ago', date: 'Apr 17, 2026' },
];

const Activities = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const filteredActivities = MOCK_ACTIVITIES.filter(act => {
    if (filter === 'all') return true;
    return act.type === filter;
  });

  return (
    <DashboardLayout>
      <main className="dashboard-main">

        <button className="back-btn" onClick={() => navigate(-1)}>
          <MdArrowBack /> Back
        </button>

        <section className="greeting-section">
          <h1>Recent Activity</h1>
          <p>Keep track of all your transactions and circle updates</p>
        </section>

        <div className="activities-controls">
          <div className="filter-tabs">
            {['all', 'received', 'sent', 'join', 'system'].map(f => (
              <button 
                key={f}
                className={`filter-tab ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
          <button className="btn-filter-more">
            <MdFilterList /> More Filters
          </button>
        </div>

        <div className="activities-full-list">
          {filteredActivities.map(activity => (
            <div key={activity.id} className="activity-card-wide">
              <div className={`activity-icon-big ${activity.type}`}>
                {activity.type === 'received' && <HiOutlineArrowDownLeft />}
                {activity.type === 'sent' && <HiOutlineArrowUpRight />}
                {activity.type === 'join' && <HiOutlineUserGroup />}
                {activity.type === 'system' && <HiOutlineShieldCheck />}
                {!['received', 'sent', 'join', 'system'].includes(activity.type) && <HiOutlineBell />}
              </div>
              
              <div className="activity-main-info">
                <h3>{activity.title}</h3>
                <p className="activity-circle-name">{activity.circle}</p>
                <span className="activity-date-mobile">{activity.time}</span>
              </div>

              <div className="activity-amount-side">
                {activity.amount && (
                  <p className={`activity-val ${activity.amount.startsWith('+') ? 'plus' : 'minus'}`}>
                    {activity.amount}
                  </p>
                )}
                <p className="activity-full-date">{activity.date}</p>
                <p className="activity-relative-time">{activity.time}</p>
              </div>
            </div>
          ))}

          {filteredActivities.length === 0 && (
            <div className="empty-activities">
              <HiOutlineBell />
              <p>No activities found for the selected filter.</p>
            </div>
          )}
        </div>
      </main>
    </DashboardLayout>
  );
};

export default Activities;
