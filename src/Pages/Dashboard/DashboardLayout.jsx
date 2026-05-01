<<<<<<< HEAD
import React from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content-wrapper" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
=======
import React from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content-wrapper" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
>>>>>>> c8e57c2da76ec770fc85200eb5067df3cbd76c97
