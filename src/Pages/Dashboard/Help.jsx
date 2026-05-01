import React, { useState } from 'react';
import { MdSearch, MdExpandMore, MdExpandLess, MdEmail, MdWhatsapp } from 'react-icons/md';
import {
  HiOutlineQuestionMarkCircle, HiOutlineChatBubbleLeft,
  HiOutlineBookOpen, HiOutlinePhone, HiOutlineShieldCheck,
  HiOutlineArrowRight
} from 'react-icons/hi2';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import DashboardLayout from './DashboardLayout';
import './Dashboard.css';
import './Help.css';

const faqs = [
  {
    q: 'What is a SafiCircle (Ikibina)?',
    a: 'A SafiCircle is a group savings system (also known as Ikibina in Rwanda or Chama, ROSCA, etc.) where members contribute a fixed amount periodically and take turns receiving the total pot. It\'s a trusted community-based savings method now digitized for convenience and transparency.'
  },
  {
    q: 'How do I create a circle?',
    a: 'Go to "My Circles" in the sidebar and click "Create New Circle". Fill in the circle name, contribution amount, frequency, and whether the circle is public or private. For private circles, you\'ll receive an invite code to share with members.'
  },
  {
    q: 'How does the payout rotation work?',
    a: 'Members are added to a rotation queue when they join. Each cycle, one member receives the total contributions from all members. The rotation continues until all members have received a payout, then restarts.'
  },
  {
    q: 'How do I join a private circle?',
    a: 'You need an invitation code from the circle creator or any existing member. Go to "My Circles" > "Join Private Circle" and enter the invitation code. Once verified, you\'ll be added to the circle.'
  },
  {
    q: 'What payment methods are supported?',
    a: 'SafiCircles supports MTN Mobile Money (MTN MoMo) and Airtel Money for seamless contributions and payouts. You can manage your payment methods in the Payments section of your dashboard.'
  },
  {
    q: 'Is my money safe?',
    a: 'All transactions are secured with industry-standard encryption. Contributions are held in a secure escrow until it\'s your turn to receive. Circle admins cannot access or withdraw funds outside the scheduled rotation.'
  },
  {
    q: 'Can I leave a circle?',
    a: 'You can request to leave a circle before your contribution turn in the cycle. Once you\'ve been added to the rotation schedule, you may not be able to leave without consensus from circle members. Contact support for exceptional cases.'
  },
  {
    q: 'What happens if a member misses a payment?',
    a: 'The system sends automatic reminders before the due date. If a member misses a payment, circle admins are notified. The payout to the next recipient may be delayed until the contribution is made. Persistent defaulters can be removed by the circle admin.'
  },
];

const categories = [
  { icon: <HiOutlineBookOpen />, title: 'Getting Started', desc: 'Learn how to set up your account and join your first circle', color: '#e8f0fe', iconColor: '#5A8FCC' },
  { icon: <HiOutlineShieldCheck />, title: 'Security & Privacy', desc: 'Understand how we protect your data and funds', color: '#f0fff4', iconColor: '#16a34a' },
  { icon: <HiOutlinePhone />, title: 'Payments & Payouts', desc: 'Everything about contributing and receiving money', color: '#fff7ed', iconColor: '#ea580c' },
  { icon: <HiOutlineChatBubbleLeft />, title: 'Circle Management', desc: 'Creating, joining, and managing your circles', color: '#fdf4ff', iconColor: '#9333ea' },
];

const Help = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <main className="dashboard-main">
        <header className="top-bar">
          <div className="search-wrapper">
            <MdSearch className="search-icon" />
            <input type="text" placeholder="Search help articles..." className="search-input" />
          </div>
        </header>

        {/* Hero */}
        <div className="help-hero">
          <div className="help-hero-text">
            <h1>Help & Support</h1>
            <p>Find answers, contact us, or browse our knowledge base</p>
          </div>
          <div className="help-search-bar">
            <HiOutlineQuestionMarkCircle className="help-search-icon" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="help-search-input"
            />
          </div>
        </div>

        {/* Categories */}
        {!searchTerm && (
          <section className="help-categories">
            {categories.map((cat, i) => (
              <div key={i} className="help-cat-card" style={{ background: cat.color }}>
                <div className="help-cat-icon" style={{ color: cat.iconColor }}>{cat.icon}</div>
                <div>
                  <p className="help-cat-title">{cat.title}</p>
                  <p className="help-cat-desc">{cat.desc}</p>
                </div>
                <HiOutlineArrowRight className="help-cat-arrow" style={{ color: cat.iconColor }} />
              </div>
            ))}
          </section>
        )}

        {/* FAQs */}
        <section className="help-faq-section">
          <h2 className="help-section-title">
            {searchTerm ? `Results for "${searchTerm}"` : 'Frequently Asked Questions'}
          </h2>

          <div className="faq-list">
            {filtered.length === 0 && (
              <div className="no-results">
                <HiOutlineQuestionMarkCircle style={{ fontSize: '3rem', color: '#ccc' }} />
                <p>No results found. Try different keywords or contact our support team.</p>
              </div>
            )}
            {filtered.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  {openFaq === i ? <FaChevronUp className="faq-chevron" /> : <FaChevronDown className="faq-chevron" />}
                </button>
                {openFaq === i && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Support */}
        <section className="help-contact-section">
          <h2 className="help-section-title">Still Need Help?</h2>
          <div className="contact-cards">
            <a href="mailto:support@saficircles.rw" className="contact-card email">
              <div className="contact-icon"><MdEmail /></div>
              <div>
                <p className="contact-title">Email Support</p>
                <p className="contact-desc">support@saficircles.rw</p>
                <p className="contact-sub">Response within 24 hours</p>
              </div>
            </a>
            <a href="https://wa.me/250780000000" className="contact-card whatsapp" target="_blank" rel="noreferrer">
              <div className="contact-icon"><MdWhatsapp /></div>
              <div>
                <p className="contact-title">WhatsApp Support</p>
                <p className="contact-desc">+250 780 000 000</p>
                <p className="contact-sub">Available Mon–Fri, 8am–6pm</p>
              </div>
            </a>
            <div className="contact-card phone">
              <div className="contact-icon"><HiOutlinePhone /></div>
              <div>
                <p className="contact-title">Phone Support</p>
                <p className="contact-desc">+250 780 000 001</p>
                <p className="contact-sub">Mon–Fri, 9am–5pm CAT</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
};

export default Help;
