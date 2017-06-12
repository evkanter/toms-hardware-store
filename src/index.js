import React from 'react';
import ReactDOM from 'react-dom';

import MainRouter from './core/components/main-router';

import './css/base.css';
import './css/header.css';
import './css/footer.css';
import './css/lorem-ipsum.css';

ReactDOM.render(
  <MainRouter />,
  document.getElementById('root')
);
