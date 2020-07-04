// Modification du nom index.jsx en main.jsx dans le fichier webpack.config
import '@babel/polyfill';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import App from '@components/App';

import '@styles/index.sass';

const rootComponent = (
  <Router>
    <App />
  </Router>
);
render(rootComponent, document.getElementById('root'));
