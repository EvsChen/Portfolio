import React from 'react';
import Post from '../components/Post';
import solutionImg from '../images/bosch/bosch-solution.jpg';
import groupImg from '../images/bosch/group.jpg';
import assembleImg from '../images/bosch/assemble.jpg';
import problemImg from '../images/bosch/problem.jpg';
import xdkImg from '../images/bosch/xdk.jpg';

class Page extends React.Component {
  render() {
    return (
      <Post>
        <h2>Bosch hackathon - Evacuation Strategy</h2>
        <div>
          <blockquote>
            “On December 31, 2014, a deadly stampede occurred in Shanghai,
            near Chen Yi Square on the Bund,
            where around <span className="red">300,000</span> people had gathered for the new year celebration.
            <span className="red"> 36</span> people <span className="red">were killed</span> and there were 
            <span className="red"> 49</span> injured,
            <span className="red"> 13</span> seriously.”
          </blockquote>

          <p className="quote-origin">
            --"Shanghai new year crush kills 35". BBC News. 31 December 2014. Retrieved 31 December 2014.
          </p>

          <blockquote>
            “The police expressed regret that they had not managed to 
            <span className="red"> "effectively intervene" </span> when the flow of tourists in the area 
            <span className="red"> "increased irregularly" </span> at 23:30 (15:30 GMT), the news agency added.”
          </blockquote>

          <p className="quote-origin">
            -- "Shanghai: dozens killed and injured in stampede at new year celebrations". The Guardian. 1 January 2015.
          </p>
        </div>

        <h3>
          Problems
        </h3>
        <h4>Traditional CCTV</h4>
        <ul>
          <li>Give intuitive estimation of pedestrian volume</li>
          <li>Channeling or evacuation strategy based on experience</li>
          <li>Lack of efficient way to instruct people to evacuate</li>
        </ul>

        <h3>Target</h3>
        <p>
          Targeting users:
          <ul>
            <li>Enterprise</li>
            <li>Government</li>
          </ul>
        </p>
        
        <p>
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
        </p>

        <h3>Our Solution</h3>
        <p>
          We use the Bosch sdk and hardwares provided to build a demo system.
        </p>
        <img src={solutionImg} alt=""/>

        <h3>Process</h3>
        <img src={problemImg} />
        <img src={xdkImg}/>
        <img src={assembleImg} />
        <img src={groupImg}/>

        <h3>Afterthoughts</h3>

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

        <h3>
          Demostration
        </h3>
        <p>
          A simple demostration can be viewed <a target="_blank" href="https://evschen.github.io/bosch-hackathon/">here</a>. Since the hardwares have already been collected after the hackathon, I just migrated our 
          frontend and used some fake data for demostration.
        </p>
      </Post>
    );
  }
}

export default Page;