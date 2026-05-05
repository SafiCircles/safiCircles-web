import React, { useState } from 'react';


import { Link } from 'react-router-dom';
import { 
  MdSearch,
  MdOutlineSmartphone
} from 'react-icons/md';
import { 
  HiOutlineCreditCard,
  HiOutlineCurrencyDollar,
  HiOutlineCalendar
} from 'react-icons/hi2';
import DashboardLayout from './DashboardLayout';
import './Dashboard.css';

const Payments = () => {
  const [userPhone] = useState(() => {
    const storedPhone = localStorage.getItem('userPhone');
    if (storedPhone) {
      // Simple formatting for display: +250780000000 -> +250 780 000 000
      const code = storedPhone.slice(0, 4);
      const rest = storedPhone.slice(4);
      return `${code} ${rest.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3').trim()}`;
    }
    return '+250 780 603 033'; // Default mock
  });


  const contributions = [
    { id: 1, circle: 'Family Savings', date: 'Mar 20', dueDate: 'Due in 5d', status: 'NOT PAID', amount: '10, 000 RWF', method: '' },
    { id: 2, circle: 'Tech Workers', date: 'Mar 18', dueDate: 'Overdue', status: 'NOT PAID', amount: '20, 000 RWF', method: '' },
    { id: 3, circle: 'Neighborhood', date: 'Mar 20', dueDate: 'Due in 5d', status: 'PAID', amount: '10, 000 RWF', method: 'MTN MoMo' },
    { id: 4, circle: 'Classroom 85', date: 'Mar 20', dueDate: 'Due in 5d', status: 'PAID', amount: '30, 000 RWF', method: 'MTN MoMo' },
    { id: 5, circle: 'Wedding Party', date: 'Mar 20', dueDate: 'Overdue', status: 'NOT PAID', amount: '10, 000 RWF', method: '' },
  ];

  return (
    <DashboardLayout>
      <main className="dashboard-main">

        <section className="greeting-section">
          <h1>Contributions</h1>
          <p>This part helps you track all the payments you have done in your circles.</p>
        </section>

        <div className="payments-top-grid">
          {/* Total Due Card */}
          <div className="summary-card" style={{ marginBottom: 0 }}>
            <div className="summary-header">
              <span className="summary-label">Total due this month</span>
            </div>
            
            <h2 className="total-amount">35, 000 RWF</h2>
            
            <div className="next-payout">
              <span>3 circles</span>
              <span>•</span>
              <span style={{ color: '#f5222d' }}>1 overdue</span>
            </div>
          </div>

          {/* Payment Methods Card */}
          <div className="payment-methods-card">
            <h3>Payment Methods</h3>
            
            <Link to="/payments/card" className="method-item" style={{ textDecoration: 'none', color: 'inherit' }}>
              <HiOutlineCreditCard className="method-icon" />
              <div className="method-details">
                <p className="method-name">Mastercard</p>
                <p className="method-meta">**** **** 4242 | Expires 12/28</p>
              </div>
              <span className="primary-badge">Primary</span>
            </Link>

            <Link to="/payments/momo" className="method-item primary" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MdOutlineSmartphone className="method-icon" />
              <div className="method-details">
                <p className="method-name">MTN MoMo</p>
                <p className="method-meta">{userPhone}</p>
              </div>
              <span className="primary-badge">Primary</span>
            </Link>
          </div>

        </div>

        <section className="contributions-card">
          <table className="contributions-table">
            <thead>
              <tr>
                <th>Invoice</th>
                <th>Date</th>
                <th>Due Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Payment Method</th>
              </tr>
            </thead>
            <tbody>
              {contributions.map(item => (
                <tr key={item.id}>
                  <td>
                    <div className="invoice-cell">
                      <div className="invoice-icon"><HiOutlineCurrencyDollar /></div>
                      <span>{item.circle}</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#666' }}>
                      <HiOutlineCalendar />
                      <span>{item.date}</span>
                    </div>
                  </td>
                  <td className="due-date-cell">
                    <span className={item.dueDate === 'Overdue' ? 'overdue' : 'upcoming'}>
                      {item.dueDate}
                    </span>
                  </td>
                  <td style={{ fontWeight: 700 }}>{item.amount}</td>
                  <td>
                    <span className={`status-badge ${item.status === 'PAID' ? 'status-paid' : 'status-not-paid'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    {item.method && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <MdOutlineSmartphone />
                        <span>{item.method}</span>
                      </div>
                    )}
                    {!item.method && (
                      <div style={{ height: '4px', width: '60px', backgroundColor: item.dueDate === 'Overdue' ? '#ffccc7' : '#ffe7ba', borderRadius: '2px' }}></div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </DashboardLayout>
  );
};

export default Payments;

