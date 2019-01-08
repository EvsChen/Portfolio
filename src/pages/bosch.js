import React from 'react';
import Layout from '../components/layout';
import styles from './bosch.module.css';

class Page extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <h2 className={styles.title}>
            Bosch hackathon - Evacuation Strategy
          </h2>
          <h3>Our focuses</h3>
          <ul>
            <li>Public safety surveillance</li>
            <li>High density of crowd</li>  
            <li>Intelligent evacuation strategy under emergency</li>
            <li>Quick and real-time response</li>
          </ul>
        </div>
      </Layout>
    );
  }
}

export default Page;