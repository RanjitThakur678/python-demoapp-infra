import React from 'react';
import ReactDOM from 'react-dom/client';  // Use the new ReactDOM import for React 18
import './index.css'; // Add your styles here
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
