import React from 'react';
import ReactDOM from 'react-dom/client';
//library ที่ใช้ในการเรียกการแสดงผล
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



reportWebVitals();
