import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import styles from '../style/style.scss';
import fonts from '../style/fontello.css';

ReactDOM.render(
    <App />,
    document.querySelector('.container')
  );
