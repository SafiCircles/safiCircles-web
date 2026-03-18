import React from 'react';
import { motion } from 'framer-motion';
import './Dashboard.css';
import { image } from '../../constants/images';

const Dashboard = () => {
    // Mock data for the dashboard
    const stats = [
        { label: 'Saved this month', value: '45,000 Rwf', trend: '+12%', color: '#4f46e5' },
        { label: 'Total Contribution', value: '1,200,000 Rwf', trend: '+5%', color: '#10b981' },
        { label: 'Next Payout', value: 'Dec 15', trend: 'In 12 days', color: '#f59e0b' },
        { label: 'Active Circles', value: '3', trend: 'Stable', color: '#3b82f6' }
    ];

    const circles = [
        { name: 'Family Asset Group', role: 'Leader', progress: 85, nextAmount: '15,000 Rwf' },
        { name: 'University Startup', role: 'Member', progress: 42, nextAmount: '10,000 Rwf' },
        { name: 'Investment Circle', role: 'Member', progress: 94, nextAmount: '50,000 Rwf' }
    ];

    return (
        <div className="dash-container">
            {/* Sidebar */}
            <aside className="dash-sidebar">
                <div className="sidebar-header">
                    <img src={image.safiLogo} alt="Logo" className="sidebar-logo" />
                    <h2>SafiCircles</h2>
                </div>
                
                <nav className="sidebar-nav">
                    <div className="nav-item active"><i className="fas fa-th-large"></i> Overview</div>
                    <div className="nav-item"><i className="fas fa-users"></i> my Circles</div>
                    <div className="nav-item"><i className="fas fa-wallet"></i> Wallet</div>
                    <div className="nav-item"><i className="fas fa-chart-line"></i> Analytics</div>
                    <div className="nav-item"><i className="fas fa-cog"></i> Settings</div>
                </nav>

                <div className="sidebar-user">
                    <div className="user-avatar">JD</div>
                    <div className="user-info">
                        <h4>Jean Damascene</h4>
                        <p>Pro Member</p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="dash-main">
                <header className="dash-header">
                    <div className="header-search">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search circles, transactions..." />
                    </div>
                    <div className="header-actions">
                        <button className="notif-btn"><i className="fas fa-bell"></i></button>
                        <button className="create-circle-btn">+ Create New Circle</button>
                    </div>
                </header>

                <div className="dash-content">
                    <div className="welcome-section">
                        <h1>Dashboard Overview</h1>
                        <p>Welcome back, Jean! Your circles are performing well today.</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="stats-grid">
                        {stats.map((stat, idx) => (
                            <motion.div 
                                key={idx} 
                                className="stat-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <p className="stat-label">{stat.label}</p>
                                <h2 className="stat-value">{stat.value}</h2>
                                <p className="stat-trend" style={{ color: stat.color }}>{stat.trend}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="dash-grid-secondary">
                        {/* Active Circles */}
                        <section className="circles-section">
                            <div className="section-header">
                                <h3>Active Circles</h3>
                                <button className="view-all">View All</button>
                            </div>
                            <div className="circles-list">
                                {circles.map((circle, idx) => (
                                    <div key={idx} className="circle-item">
                                        <div className="circle-info">
                                            <h4>{circle.name}</h4>
                                            <span>{circle.role}</span>
                                        </div>
                                        <div className="circle-progress">
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{ width: `${circle.progress}%` }}></div>
                                            </div>
                                            <span>{circle.progress}%</span>
                                        </div>
                                        <div className="circle-action">
                                            <p>{circle.nextAmount}</p>
                                            <button className="pay-btn">Pay</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Recent Transactions */}
                        <section className="trans-section">
                            <div className="section-header">
                                <h3>Notifications</h3>
                                <button className="view-all">Settings</button>
                            </div>
                            <div className="notif-list">
                                <div className="notif-item">
                                    <div className="notif-icon payment"><i className="fas fa-check"></i></div>
                                    <div className="notif-text">
                                        <p>Payment of <strong>15,000 Rwf</strong> for Family Asset confirmed.</p>
                                        <span>2 hours ago</span>
                                    </div>
                                </div>
                                <div className="notif-item">
                                    <div className="notif-icon alert"><i className="fas fa-exclamation-triangle"></i></div>
                                    <div className="notif-text">
                                        <p>Circle payout for <strong>Investment Circle</strong> scheduled tomorrow!</p>
                                        <span>5 hours ago</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
