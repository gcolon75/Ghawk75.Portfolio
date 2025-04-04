import React from 'react';
import Header from './Header';
import './Layout.css'; // Optional: for layout-level styling

function Layout({ children }) {
  return (
    <div className="App-layout">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;