// src/components/User/UserDashboard.js
import React, { useState } from 'react';
import ViewSoilDetails from './ViewSoilDetails';
import ViewDistributorDetails from './ViewDistributorDetails';
import '../../styles/UserDashboard.css';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('soil'); // State to manage active tab

  return (
    <div className="user-dashboard">
      <h2 className="dashboard-title">User Dashboard</h2>
      <div className="tab-container">
        <button
          className={`tab ${activeTab === 'soil' ? 'active' : ''}`} // Fixed class name
          onClick={() => setActiveTab('soil')}
        >
          Soil Details
        </button>
        <button
          className={`tab ${activeTab === 'distributor' ? 'active' : ''}`} // Fixed class name
          onClick={() => setActiveTab('distributor')}
        >
          Distributor Details
        </button>
      </div>
      <div className="content-container">
        {activeTab === 'soil' ? <ViewSoilDetails /> : <ViewDistributorDetails />}
      </div>
    </div>
  );
};

export default UserDashboard;
