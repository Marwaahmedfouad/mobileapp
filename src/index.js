// import React, { StrictMode } from 'react';
// import ReactDOM from 'react-dom/client';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import '@fortawesome/fontawesome-free/css/all.min.css'

// import App from './App';




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   //<React.StrictMode>
//     <App />
//   //</React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
