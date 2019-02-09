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
          <span className="red"> "effectively intervene" </span> when the flow of tourists in the area 
          <span className="red"> "increased irregularly" </span> at 23:30 (15:30 GMT), the news agency added.”
        </blockquote>

        <p className="quote-origin">
          -- "Shanghai: dozens killed and injured in stampede at new year celebrations". The Guardian. 1 January 2015.
        </p>

        <h3>
          Problems
        </h3>
        <p>
          Shanghai has witnessed a tragedy on the first day of 2015. Tens and millions of people gathered at
          the Bund celebrating the new year. However, the density of people far exceeded the limit and an
          unexpected incident caused the people flowing in the same direction, which led to the stampede.
        </p>
        <p>
          Despite being the direct cause of the tragedy, the inefficiency of emergency handling is also another 
          problem that we cannot ignore. The traditional CCTV can give an <strong>intuitive estimation of pedestrian volume</strong>.
          But the administrative staff cannot get any quantitative information merely based on the surveillance 
          camera and thus can only give <strong>evacuation strategy based on their experience</strong>. Therefore, under emergency, 
          the current technology can hardly instruct people to evacuate efficiently.
        </p>
        <h3>Target</h3>
        <p>
          In order to tackle this problem, we need to improve the current <strong>public safety surveillance</strong> system in its ability of
          assisting people finding an <strong>intelligent evacuation strategy under emergency</strong>. And this solution are targeting users such as 
          enterprise and government. It should be used in <strong>massive scale situations</strong> such as stadium and campus.
          The algorithm used should be efficient enough to give a quick solution in a changing environment.
        </p>

        <h3>Our Solution</h3>
        <p>
          We use the Bosch sdk and hardwares provided to build a demo system.
        </p>
        <img src={solutionImg} style={{height: 400}} alt=""/>

        <h3>Process</h3>
        <img src={problemImg} />
        <img src={xdkImg}/>
        <img src={assembleImg} />
        <img src={groupImg}/>

        <h3>Future Development</h3>
        <h4>Face detection</h4>
        <p>
          Due to the limitation of time and hardware, the prototype we made is limited in many ways. The remote
          API we used for detecting the faces can only detect 64 faces at maximum, which is far less for real-life
          situation. We need to deploy an local version of the face detection algorithm to reduce the cost of 
          data transmission, by using machine learning or deep learning. Technology like marginal computing may 
          also help.
        </p>
        <h4>Guidance for the crowd</h4>
        <p>
        
        </p>
        <ul>
          <li>Not tested under real-life circumstances</li>
          <li>Lack of direct guide to the crowd</li>
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