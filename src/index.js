/**
 * Vendor imports
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Custom imports
 */
import App from './components/app';
import styles from '../style/style.scss';
import fonts from '../style/fontello.css';

/**
 * Render function call
 */
ReactDOM.render(
    <App />,
    document.querySelector('.container')
  );
