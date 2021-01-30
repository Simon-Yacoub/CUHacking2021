import React from 'react';
import { CountrySelector, Cards, Graph } from '../components';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={styles.container}>
      <CountrySelector />
      <Graph />
      <Cards />
    </div>
  );
}

export default Dashboard;
