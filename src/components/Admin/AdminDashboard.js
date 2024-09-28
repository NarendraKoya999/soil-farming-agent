import React, { useEffect } from 'react';
import PostSoilDetails from './PostSoilDetails';
import PostDistributorDetails from './PostDistributorDetails';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebaseConfig';
import '../../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('soil');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="admin-dashboard">
      <h2 className="dashboard-title">Admin Dashboard</h2>
      <div className="tab-container">
        <button className={`tab ${activeTab === 'soil' ? 'active' : ''}`} onClick={() => setActiveTab('soil')}>
          Soil Details
        </button>
        <button className={`tab ${activeTab === 'distributor' ? 'active' : ''}`} onClick={() => setActiveTab('distributor')}>
          Distributor Details
        </button>
      </div>
      <div className="content-container">
        {activeTab === 'soil' ? <PostSoilDetails /> : <PostDistributorDetails />}
      </div>
    </div>
  );
};

export default AdminDashboard;
