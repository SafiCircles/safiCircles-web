import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MdSearch, MdArrowBack } from 'react-icons/md';
import {
  HiOutlineUsers, HiOutlineLockClosed, HiOutlineGlobeAlt,
  HiOutlineCurrencyDollar, HiOutlineCalendar, HiOutlineTrophy,
  HiOutlineArrowDownLeft, HiOutlineArrowUpRight, HiOutlineClock,
  HiOutlineCheckCircle, HiOutlineUserCircle
} from 'react-icons/hi2';
import DashboardLayout from './DashboardLayout';
import './Dashboard.css';
import './CircleDetails.css';

// Mock data - in a real app this would come from API
const MOCK_CIRCLES = {
  1: {
    id: 1,
    name: 'Family Savings',
    type: 'private',
    description: 'Our family monthly savings group to support each other in times of need and celebrate milestones together.',
    members: 8,
    maxMembers: 10,
    contribution: 10000,
    currency: 'RWF',
    frequency: 'monthly',
    totalPool: 80000,
    startDate: '2024-01-01',
    nextPayout: '2026-06-01',
    myPosition: 3,
    status: 'active',
    isMember: true,
    creator: 'Sandra KIMENYI',
    rotation: [
      { position: 1, name: 'Sandra KIMENYI', avatar: null, status: 'received', date: 'Jan 2026' },
      { position: 2, name: 'Jean Pierre MUGABO', avatar: null, status: 'received', date: 'Feb 2026' },
      { position: 3, name: 'Alice UWIMANA', avatar: null, status: 'current', date: 'Jun 2026' },
      { position: 4, name: 'Bob NKURUNZIZA', avatar: null, status: 'upcoming', date: 'Jul 2026' },
      { position: 5, name: 'Claire INGABIRE', avatar: null, status: 'upcoming', date: 'Aug 2026' },
      { position: 6, name: 'David HABIMANA', avatar: null, status: 'upcoming', date: 'Sep 2026' },
      { position: 7, name: 'Eve MUKAMANA', avatar: null, status: 'upcoming', date: 'Oct 2026' },
      { position: 8, name: 'Frank BIZIMANA', avatar: null, status: 'upcoming', date: 'Nov 2026' },
    ],
    activities: [
      { id: 1, type: 'received', text: 'Jean Pierre received payout', amount: '+80,000 RWF', time: '2 months ago' },
      { id: 2, type: 'sent', text: 'You contributed to Family Savings', amount: '-10,000 RWF', time: '1 month ago' },
      { id: 3, type: 'join', text: 'Frank Bizimana joined the circle', amount: null, time: '3 months ago' },
    ],
  },
  2: {
    id: 2,
    name: 'Tech Workers',
    type: 'public',
    description: 'A savings circle for tech professionals in Kigali. We contribute monthly and rotate payouts to support each other\'s projects.',
    members: 12,
    maxMembers: 15,
    contribution: 20000,
    currency: 'RWF',
    frequency: 'monthly',
    totalPool: 240000,
    startDate: '2024-03-01',
    nextPayout: '2026-06-15',
    myPosition: null,
    status: 'active',
    isMember: false,
    creator: 'John DOE',
    rotation: [
      { position: 1, name: 'John DOE', avatar: null, status: 'received', date: 'Mar 2026' },
      { position: 2, name: 'Marie UWERA', avatar: null, status: 'current', date: 'Jun 2026' },
      { position: 3, name: 'Patrick NSHIMIYE', avatar: null, status: 'upcoming', date: 'Jul 2026' },
      { position: 4, name: 'Grace UMUHOZA', avatar: null, status: 'upcoming', date: 'Aug 2026' },
    ],
    activities: [
      { id: 1, type: 'received', text: 'John DOE received payout', amount: '+240,000 RWF', time: '3 months ago' },
      { id: 2, type: 'join', text: 'Aline IRADUKUNDA joined the circle', amount: null, time: '2 weeks ago' },
    ],
  },
};

const CircleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [joinRequested, setJoinRequested] = useState(false);

  const circle = MOCK_CIRCLES[id] || MOCK_CIRCLES[1];
  const progress = Math.round((circle.members / circle.maxMembers) * 100);
  const poolProgress = Math.round(((circle.rotation.filter(r => r.status === 'received').length) / circle.rotation.length) * 100);

  const nextRecipient = circle.rotation.find(r => r.status === 'current');

  return (
    <DashboardLayout>
      <main className="dashboard-main">

        {/* Back nav */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          <MdArrowBack /> Back to Circles
        </button>

        {/* Circle Hero Card */}
        <div className="circle-detail-hero">
          <div className="circle-detail-icon">
            {circle.type === 'private' ? <HiOutlineLockClosed /> : <HiOutlineGlobeAlt />}
          </div>
          <div className="circle-detail-info">
            <div className="circle-detail-name-row">
              <h1>{circle.name}</h1>
              <span className={`circle-type-badge ${circle.type}`}>
                {circle.type === 'private' ? <HiOutlineLockClosed /> : <HiOutlineGlobeAlt />}
                {circle.type}
              </span>
              <span className="circle-status-badge active">Active</span>
            </div>
            <p className="circle-detail-desc">{circle.description}</p>
            <p className="circle-creator">Created by <strong>{circle.creator}</strong></p>
          </div>

          <div className="circle-detail-actions">
            {/* Invite button - only for admin (creator) */}
            {circle.creator === 'Sandra KIMENYI' && (
              <button className="btn-invite-members">
                <HiOutlineUsers /> Invite Members
              </button>
            )}

            {!circle.isMember && (
              <button
                className={`btn-join-circle ${joinRequested ? 'requested' : ''}`}
                onClick={() => setJoinRequested(true)}
                disabled={joinRequested}
              >
                {joinRequested ? 'Request Sent' : 'Request to Join'}
              </button>
            )}
          </div>
        </div>


        {/* Stats Row */}
        <div className="circle-stats-row">
          <div className="circle-stat-card">
            <HiOutlineUsers className="stat-icon members" />
            <div>
              <p className="stat-value">{circle.members} / {circle.maxMembers}</p>
              <p className="stat-label">Members</p>
            </div>
          </div>
          <div className="circle-stat-card">
            <HiOutlineCurrencyDollar className="stat-icon pool" />
            <div>
              <p className="stat-value">{circle.totalPool.toLocaleString()} {circle.currency}</p>
              <p className="stat-label">Total Pool</p>
            </div>
          </div>
          <div className="circle-stat-card">
            <HiOutlineCalendar className="stat-icon frequency" />
            <div>
              <p className="stat-value" style={{ textTransform: 'capitalize' }}>{circle.frequency}</p>
              <p className="stat-label">Frequency</p>
            </div>
          </div>
          <div className="circle-stat-card">
            <HiOutlineCurrencyDollar className="stat-icon contribution" />
            <div>
              <p className="stat-value">{circle.contribution.toLocaleString()} {circle.currency}</p>
              <p className="stat-label">Per Contribution</p>
            </div>
          </div>
        </div>

        {/* Next Recipient Highlight */}
        {nextRecipient && (
          <div className="next-recipient-banner">
            <div className="next-recipient-label">
              <HiOutlineTrophy className="trophy-icon" />
              <span>Next Payout Recipient</span>
            </div>
            <div className="next-recipient-info">
              <div className="recipient-avatar-lg">
                {nextRecipient.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <p className="recipient-name">{nextRecipient.name}</p>
                <p className="recipient-date">{nextRecipient.date} · {circle.totalPool.toLocaleString()} {circle.currency}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="detail-tabs">
          {['overview', 'rotation', 'activity'].map(t => (
            <button
              key={t}
              className={`detail-tab ${activeTab === t ? 'active' : ''}`}
              onClick={() => setActiveTab(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="detail-content">
            <div className="detail-card">
              <h3 className="detail-card-title">Circle Progress</h3>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className="prog-label">Members Joined</span>
                  <span className="prog-pct">{progress}%</span>
                </div>
                <div className="det-progress-bar">
                  <div className="det-progress-fill members" style={{ width: `${progress}%` }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className="prog-label">Rotation Progress</span>
                  <span className="prog-pct">{poolProgress}%</span>
                </div>
                <div className="det-progress-bar">
                  <div className="det-progress-fill rotation" style={{ width: `${poolProgress}%` }} />
                </div>
              </div>
            </div>

            <div className="detail-card">
              <h3 className="detail-card-title">Key Dates</h3>
              <div className="key-dates-list">
                <div className="key-date-row">
                  <span className="key-date-label">Started</span>
                  <span className="key-date-val">{new Date(circle.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="key-date-row">
                  <span className="key-date-label">Next Payout</span>
                  <span className="key-date-val highlight">{new Date(circle.nextPayout).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
            </div>

            {circle.isMember && circle.myPosition && (
              <div className="my-position-card">
                <HiOutlineTrophy className="my-pos-icon" />
                <div>
                  <p className="my-pos-label">Your Position in Rotation</p>
                  <p className="my-pos-value">#{circle.myPosition} of {circle.rotation.length}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Rotation Tab */}
        {activeTab === 'rotation' && (
          <div className="detail-card">
            <h3 className="detail-card-title">Payout Rotation Queue</h3>
            <div className="rotation-list">
              {circle.rotation.map((member) => (
                <div key={member.position} className={`rotation-item ${member.status}`}>
                  <div className="rotation-pos">#{member.position}</div>
                  <div className="rotation-avatar">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="rotation-info">
                    <p className="rotation-name">{member.name}</p>
                    <p className="rotation-date">{member.date}</p>
                  </div>
                  <div className={`rotation-status ${member.status}`}>
                    {member.status === 'received' && <><HiOutlineCheckCircle /> Received</>}
                    {member.status === 'current' && <><HiOutlineTrophy /> Next Up</>}
                    {member.status === 'upcoming' && <><HiOutlineClock /> Upcoming</>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="detail-card">
            <h3 className="detail-card-title">Circle Activity</h3>
            <div className="activity-list" style={{ marginTop: '1rem' }}>
              {circle.activities.map(act => (
                <div key={act.id} className="activity-item">
                  <div className={`activity-icon ${act.type === 'received' ? 'received' : 'sent'}`}>
                    {act.type === 'received' ? <HiOutlineArrowDownLeft /> : act.type === 'sent' ? <HiOutlineArrowUpRight /> : <HiOutlineUserCircle />}
                  </div>
                  <div className="activity-info">
                    <p className="activity-title">{act.text}</p>
                    <p className="activity-subtitle">{act.time}</p>
                  </div>
                  {act.amount && (
                    <div className="activity-meta">
                      <p className={`activity-amount ${act.amount.startsWith('+') ? 'plus' : ''}`}>{act.amount}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </DashboardLayout>
  );
};

export default CircleDetails;
