import React from 'react';
import Layout from '../components/layout';
import styles from './bosch.module.less';
import solutionImg from '../images/bosch-solution.jpg';

class Page extends React.Component {
  render() {
    return (
      <Layout>
        <div className="post">
          <h2 className="title">Bosch hackathon - Evacuation Strategy</h2>
          <div className={styles.intro}>
            <blockquote>
              “On December 31, 2014, a deadly stampede occurred in Shanghai,
              near Chen Yi Square on the Bund,
              where around <span className="red">300,000</span> people had gathered for the new year celebration.
              <span className="red">36</span> people <span className="red">were killed</span> and there were 
              <span className="red">49</span> injured,
              <span className="red">13</span> seriously.”
            </blockquote>
            <p className="quote-origin">
              --"Shanghai new year crush kills 35". BBC News. 31 December 2014. Retrieved 31 December 2014.
            </p>
            <blockquote>
              “The police expressed regret that they had not managed to 
              <span className="red">‘effectively intervene’</span> when the flow of tourists in the area 
              <span className="red">‘increased irregularly’</span> at 23:30 (15:30 GMT), the news agency added.”
            </blockquote>
            <p className="quote-origin">
              -- "Shanghai: dozens killed and injured in stampede at new year celebrations". The Guardian. 1 January 2015.
            </p>
          </div>

          <h3>Current Situation <span className="red">ADD SOME PHOTOS</span></h3>
          <div className={styles.current}>
            <h4>Traditional CCTV</h4>
            <ul>
              <li>Give intuitive estimation of pedestrian volume</li>
              <li>Channeling or evacuation strategy based on experience</li>
              <li>Lack of efficient way to instruct people to evacuate</li>
            </ul>
          </div>

          <h3>Target</h3>
          <div className={styles.target}>
            Targeting users:
            <ul>
              <li>Enterprise</li>
              <li>Government</li>
            </ul>
            Massive scale situations: 
            <ul>
              <li>Factory</li>
              <li>Campus</li>
              <li>Shopping center</li>
              <li>Stadium</li>
              <li>Concert</li>
            </ul>
            <ul>
              <li>Public safety surveillance</li>
              <li>High density of crowd</li>  
              <li>Intelligent evacuation strategy under emergency</li>
              <li>Quick and real-time response</li>
            </ul>
          </div>

          <h3>Our Solution</h3>
          <div className={styles.solution}>
            We use the Bosch sdk and hardwares provided to build a demo system.
            <img src={solutionImg} alt=""/>
          </div>

          <h3>Steps <span className="red">ADD SOME PHOTOS</span></h3>
          <div>
          </div>

          <h3>Demostration <span className="red">ADD IFRAME</span></h3>
          <div className={styles.demo}>
            Since the hardwares have already been collected after the hackathon, I just migrated our 
            frontend and used some fake data for demostration.
          </div>

          <h3>Hackathon Afterthoughts</h3>
          <div className={styles.afterThought}>
            <h4>
              Prototype limitations:
            </h4>
            <ul>
              <li>At most 64 faces detection due to API limitation</li>
              <li>Not tested under real-life circumstances</li>
              <li>Unable to handle massive data flow</li>
              <li>Lack of direct guide to the crowd</li>
            </ul>
            <h4>
              Future Development
            </h4>
            <ul>
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Large-scale field test and training data collection</li>
              <li>Expand to enterprise-level IoT hub and web server </li>
              <li>Better LED guidance or Augmented Reality</li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Page;