import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // 如果有全局样式


import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);