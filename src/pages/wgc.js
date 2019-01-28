import React from 'react';
import Post from '../components/Post';
import conceptImg from '../images/wgc/concept.jpg';

export default class WGC extends React.Component {
  render() {
    return (
      <Post>
        <h2>
          WGC - Web Game Controller
        </h2>
        <h3>
          The challenge
        </h3>
        <p>
          This project is an experiment to enable multi-player game experience on the web platform.
          Due to the fast development of web technology, it has been possible to develop quite
          complicated web-based games. The ubiquity of web browsers on almost any platform
          has made web itself accessible. By combining these two characteristics,
          it is possible to create a new kind of game experience by using the browser as both <strong>the console </strong>
          and <strong>the controllers</strong>.
        </p>
        <h3>
          The approach
        </h3>
        <img src={conceptImg} style={{height: 400}}alt="Concept Diagram"/>
        <p>
        Above is the concept diagram for the system. In the center is a server that hosts the whole game.
        The console and the controllers can connect to the server via WebSocket, which is a kind of internet 
        communication protocol that allows duplex connection. The console and the controllers theoretically can be 
        any device that has a modern browser.
        </p>
        <p>
          For example, a laptop can serve as the console and two mobile phones
          can be the controllers. Also, the console may be an iPad, and the controller can be iPads at the same time.
          The controllers need to support different kind of operations for different games.
        </p>
        <h3>
          Refinement
        </h3>
        <p>
          
        </p>
        <h3>
          Future improvements
        </h3>
        <h3>
          Demostration  
        </h3>
        <p>
          A simple working demostration can be viewed at <a href="https://evschen.github.io/wgc">EvsChen/WGC</a>.
          All the source code is open source on <a href="https://github.com/EvsChen/WGC">GitHub</a>
        </p>
        <h3>
          Reflections
        </h3>
      </Post>
    );
  }
}