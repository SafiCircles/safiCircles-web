import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import {
  HiOutlineGlobeAlt, HiOutlineUsers, HiOutlineCurrencyDollar,
  HiOutlineCalendar, HiOutlineArrowRight, HiOutlineFunnel
} from 'react-icons/hi2';
import DashboardLayout from './DashboardLayout';
import './Dashboard.css';
import './PublicCircles.css';

const PUBLIC_CIRCLES = [
  {
    id: 2,
    name: 'Tech Workers Kigali',
    creator: 'John DOE',
    members: 12,
    maxMembers: 15,
    contribution: 20000,
    currency: 'RWF',
    frequency: 'monthly',
    category: 'Professional',
    description: 'A savings circle for tech professionals in Kigali. We contribute monthly and rotate payouts.',
    tags: ['Technology', 'Kigali', 'Monthly'],
    spotsLeft: 3,
    startDate: '2026-07-01',
  },
  {
    id: 5,
    name: 'University Alumni 2022',
    creator: 'Marie UWERA',
    members: 20,
    maxMembers: 25,
    contribution: 5000,
    currency: 'RWF',
    frequency: 'monthly',
    category: 'Education',
    description: 'Connect with University of Rwanda class of 2022 graduates and build wealth together.',
    tags: ['Education', 'Alumni', 'Community'],
    spotsLeft: 5,
    startDate: '2026-06-15',
  },
  {
    id: 6,
    name: 'Market Vendors Association',
    creator: 'Aline IRADUKUNDA',
    members: 30,
    maxMembers: 40,
    contribution: 3000,
    currency: 'RWF',
    frequency: 'weekly',
    category: 'Business',
    description: 'Weekly savings circle for Kimironko market vendors to support business growth.',
    tags: ['Business', 'Weekly', 'Market'],
    spotsLeft: 10,
    startDate: '2026-06-01',
  },
  {
    id: 7,
    name: 'Women Entrepreneurs Hub',
    creator: 'Grace UMUHOZA',
    members: 8,
    maxMembers: 20,
    contribution: 15000,
    currency: 'RWF',
    frequency: 'monthly',
    category: 'Business',
    description: 'Empowering women entrepreneurs across Rwanda through collaborative savings and mentorship.',
    tags: ['Women', 'Entrepreneurship', 'Monthly'],
    spotsLeft: 12,
    startDate: '2026-08-01',
  },
  {
    id: 8,
    name: 'Diaspora Savings Circle',
    creator: 'Patrick NSHIMIYE',
    members: 15,
    maxMembers: 20,
    contribution: 50,
    currency: 'USD',
    frequency: 'monthly',
    category: 'Community',
    description: 'For Rwandans living abroad who want to save and invest back home together.',
    tags: ['Diaspora', 'International', 'USD'],
    spotsLeft: 5,
    startDate: '2026-07-15',
  },
  {
    id: 9,
    name: 'Young Professionals Network',
    creator: 'Claire INGABIRE',
    members: 10,
    maxMembers: 15,
    contribution: 10000,
    currency: 'RWF',
    frequency: 'biweekly',
    category: 'Professional',
    description: 'Bi-weekly savings for young professionals aged 22–35 building their financial future.',
    tags: ['Youth', 'Professional', 'Bi-weekly'],
    spotsLeft: 5,
    startDate: '2026-06-20',
  },
];

const CATEGORIES = ['All', 'Professional', 'Business', 'Education', 'Community'];
const FREQUENCIES = ['All', 'weekly', 'biweekly', 'monthly'];

const PublicCircles = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [frequency, setFrequency] = useState('All');
  const [joinedCircles, setJoinedCircles] = useState(new Set());

  const handleJoin = (id) => {
    setJoinedCircles(prev => new Set([...prev, id]));
  };

  const filtered = PUBLIC_CIRCLES.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchCat = category === 'All' || c.category === category;
    const matchFreq = frequency === 'All' || c.frequency === frequency;
    return matchSearch && matchCat && matchFreq;
  });

  return (
    <DashboardLayout>
      <main className="dashboard-main">
        <header className="top-bar">
          <div className="search-wrapper">
            <MdSearch className="search-icon" />
            <input type="text" placeholder="Search circles..." className="search-input" />
          </div>
        </header>

        <section className="greeting-section">
          <h1>Discover Public Circles</h1>
          <p>Find and join savings circles that match your community and goals</p>
        </section>

        {/* Search & Filters */}
        <div className="public-filters">
          <div className="pub-search-wrap">
            <MdSearch className="pub-search-icon" />
            <input
              className="pub-search"
              placeholder="Search by name, tags, description..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <HiOutlineFunnel className="filter-icon" />
            <select className="filter-select" value={category} onChange={e => setCategory(e.target.value)}>
              {CATEGORIES.map(c => <option key={c} value={c}>{c === 'All' ? 'All Categories' : c}</option>)}
            </select>
          </div>

          <div className="filter-group">
            <HiOutlineCalendar className="filter-icon" />
            <select className="filter-select" value={frequency} onChange={e => setFrequency(e.target.value)}>
              {FREQUENCIES.map(f => <option key={f} value={f}>{f === 'All' ? 'All Frequencies' : f.charAt(0).toUpperCase() + f.slice(1)}</option>)}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <p className="results-count">
          Showing <strong>{filtered.length}</strong> circle{filtered.length !== 1 ? 's' : ''}
          {search && ` for "${search}"`}
        </p>

        {/* Circle Cards Grid */}
        <div className="public-circles-grid">
          {filtered.length === 0 && (
            <div className="empty-state">
              <HiOutlineGlobeAlt style={{ fontSize: '3rem', color: '#ccc' }} />
              <p>No circles found. Try adjusting your filters.</p>
            </div>
          )}
          {filtered.map(circle => (
            <div key={circle.id} className="public-circle-card">
              {/* Card Header */}
              <div className="pub-card-header">
                <div className="pub-card-icon">
                  <HiOutlineGlobeAlt />
                </div>
                <div>
                  <span className="pub-category-badge">{circle.category}</span>
                  <span className={`pub-freq-badge ${circle.frequency}`}>{circle.frequency}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="pub-card-body">
                <h3 className="pub-circle-name">{circle.name}</h3>
                <p className="pub-creator">by {circle.creator}</p>
                <p className="pub-description">{circle.description}</p>

                <div className="pub-tags">
                  {circle.tags.map(t => (
                    <span key={t} className="pub-tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="pub-stats">
                <div className="pub-stat">
                  <HiOutlineUsers />
                  <span>{circle.members}/{circle.maxMembers} members</span>
                </div>
                <div className="pub-stat">
                  <HiOutlineCurrencyDollar />
                  <span>{circle.contribution.toLocaleString()} {circle.currency}</span>
                </div>
              </div>

              {/* Members Progress */}
              <div className="pub-members-progress">
                <div className="pub-prog-bar">
                  <div className="pub-prog-fill" style={{ width: `${Math.round((circle.members / circle.maxMembers) * 100)}%` }} />
                </div>
                <span className="pub-spots-left">{circle.spotsLeft} spot{circle.spotsLeft !== 1 ? 's' : ''} left</span>
              </div>

              {/* Actions */}
              <div className="pub-card-actions">
                <Link to={`/circles/${circle.id}`} className="btn-view-details">
                  View Details <HiOutlineArrowRight />
                </Link>
                <button
                  className={`btn-join-pub ${joinedCircles.has(circle.id) ? 'joined' : ''}`}
                  onClick={() => handleJoin(circle.id)}
                  disabled={joinedCircles.has(circle.id)}
                >
                  {joinedCircles.has(circle.id) ? '✓ Requested' : 'Join Circle'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </DashboardLayout>
  );
};

export default PublicCircles;
