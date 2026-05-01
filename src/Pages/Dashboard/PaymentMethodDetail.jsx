import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { 
  MdArrowBack, 
  MdOutlineSmartphone, 
  MdOutlineCreditCard,
  MdOutlineHistory,
  MdOutlineSettings,
  MdSearch
} from 'react-icons/md';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import DashboardLayout from './DashboardLayout';
import './Dashboard.css';
import './Payments.css';

const PaymentMethodDetail = () => {
  const { type } = useParams(); // 'card' or 'momo'
  const navigate = useNavigate();
  const [method, setMethod] = useState(null);

  useEffect(() => {
    if (type === 'card') {
      setMethod({
        id: 1,
        name: 'Mastercard',
        icon: <MdOutlineCreditCard />,
        details: '**** **** **** 4242',
        expiry: '12/28',
        type: 'Primary Card',
        history: [
          { date: 'May 01, 2026', amount: '10,000 RWF', status: 'Success', desc: 'Family Savings' },
          { date: 'Apr 15, 2026', amount: '20,000 RWF', status: 'Success', desc: 'Tech Workers' },
        ]
      });
    } else {
      const storedPhone = localStorage.getItem('userPhone') || '+250 780 603 033';
      setMethod({
        id: 2,
        name: 'MTN MoMo',
        icon: <MdOutlineSmartphone />,
        details: storedPhone,
        type: 'Mobile Money',
        provider: 'MTN Rwanda',
        history: [
          { date: 'May 01, 2026', amount: '5,000 RWF', status: 'Success', desc: 'Neighborhood' },
          { date: 'Apr 20, 2026', amount: '30,000 RWF', status: 'Success', desc: 'Classroom 85' },
        ]
      });
    }
  }, [type]);

  if (!method) return null;

  return (
    <DashboardLayout>
      <main className="dashboard-main">
        <header className="top-bar">
          <div className="search-wrapper">
            <MdSearch className="search-icon" />
            <input type="text" placeholder="Search transactions..." className="search-input" />
          </div>
        </header>

        <button className="back-btn" onClick={() => navigate('/payments')}>
          <MdArrowBack /> Back to Payments
        </button>

        <div className="payment-method-container">
          <div className="method-hero-card">
            <div className="method-hero-icon">{method.icon}</div>
            <div className="method-hero-info">
              <h1>{method.name}</h1>
              <p className="method-hero-type">{method.type}</p>
              <p className="method-hero-details">{method.details}</p>
            </div>
            <div className="method-hero-badge">
              <HiOutlineCheckCircle /> Active
            </div>
          </div>

          <div className="method-details-grid">
            <div className="method-info-section">
              <h3>Method Details</h3>
              <div className="info-row">
                <span>Status</span>
                <span className="status-val success">Active</span>
              </div>
              {method.expiry && (
                <div className="info-row">
                  <span>Expiry</span>
                  <span>{method.expiry}</span>
                </div>
              )}
              {method.provider && (
                <div className="info-row">
                  <span>Provider</span>
                  <span>{method.provider}</span>
                </div>
              )}
              <div className="info-row">
                <span>Added on</span>
                <span>Jan 15, 2026</span>
              </div>
              
              <div className="method-actions">
                <button className="btn-method-action"><MdOutlineSettings /> Manage Settings</button>
                <button className="btn-method-action delete">Remove Method</button>
              </div>
            </div>

            <div className="method-history-section">
              <div className="section-header">
                <h3><MdOutlineHistory /> Transaction History</h3>
                <Link to="/activity" className="view-all">View All</Link>
              </div>
              <div className="mini-history-list">
                {method.history.map((h, i) => (
                  <div key={i} className="mini-history-item">
                    <div className="h-info">
                      <p className="h-desc">{h.desc}</p>
                      <p className="h-date">{h.date}</p>
                    </div>
                    <div className="h-amount">
                      <p className="h-val">{h.amount}</p>
                      <p className={`h-status ${h.status.toLowerCase()}`}>{h.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default PaymentMethodDetail;
