import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../styles/Layout.css';

const Layout = ({ user, onLogout, children }) => {
  return (
    <div className="layout-container">
      <Navbar user={user} onLogout={onLogout} /> {/* Navbar visible on all pages */}
      <main>{children}</main> {/* Main content (Routes) */}
      <Footer /> {/* Footer visible on all pages */}
    </div>
  );
};

export default Layout;
