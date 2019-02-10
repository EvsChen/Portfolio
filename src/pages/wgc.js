import React from 'react';
import Post from '../components/Post';
import conceptImg from '../images/wgc/concept.jpg';
import trexImg from '../images/wgc/trex.jpg';
import acceGif from '../images/wgc/accelerometer.gif';

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
          can be the controllers. Also, the console may be an iPad, and the controller can be an iPad at the same time.
          The controllers need to support different kind of operations for different games.
        </p>
        <h4>
          Operations supported by mobile browsers
        </h4>
        <p>
          By default, mobile device are able to read the user touch input and send them to the server. For example, the position of the touch
          and multi-touch such as the pinching done by two fingers.
        </p>
        <p>
          Although not used a lot, modern mobile browsers also provice access to the <strong><a href="https://www.w3.org/TR/generic-sensor/">Generic Sensor API</a></strong>.
          This API allows us developers to use the following kinds of sensor data:
        </p>
        <ul>
          <li>Accelerometer</li>
          <li>Gyroscope</li>
          <li>LinearAccelerationSensor</li>
          <li>AbsoluteOrientationSensor</li>
          <li>RelativeOrientationSensor</li>
          <li>AmbientLightSensor</li>
          <li>Magnetometer</li>
        </ul>
        <p>
          These APIs greatly expand the kinds of motion that the mobile browser can support. More detailed explanation can be viewed
          in <a href="https://developers.google.com/web/updates/2017/09/sensors-for-the-web">this article</a>.
        </p>
        <img src={acceGif} alt="A concept of accelerometer sensor API" style={{height: 200}}/>
        <h3>
          Examples
        </h3>
        <h4>
          Chrome T-Rex
        </h4>
        <p>
          Many of the chrome users have discovered this Easter Egg on chrome "No Internet" page. This is a great 
          example of a simple web-based game. All of the game codes are written in JavaScpript and are open-source.
          I use this game as an example to demostrate how my project works. 
        </p>
        <img src={trexImg} style={{height: 400}} alt=""/>
        <p>
          The game requires only one button to control everything from start to end. To make this game more interactive,
          I try to make use of the accelerometer on the mobile phone. The player can actually <strong>jump together</strong> with the little T-Rex. 
          By observing the accleration in z-axis, we are able to detect whether the player is jumping or not, and further control the T-Rex.
        </p>
        <p>
          For example, when the acceleration on z-axis is greater than 3, we simulate pressing the "Up" key.
          And when the acceleration is less than 0, we press the "Down".
        </p>
        <p>
          Below is a short clip for demostration. I did not "jump" to control the T-rex but use the up and down of my 
          arm instead, but both will have similar effects .
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WM7nFsCEbaw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <h4>
          Konterball
        </h4>
        <p>
          Konterball is a 3D ping-pong game which supports both single-player and multy-player mode. The player can 
          use the mouse to control the position of the bat and hit the ball against the wall. In multi-player mode, 
          the player can connect to each other via the Internet.
        </p>
        <p>
          Initially, I want to control the bat by using the relative position of the phone. However, this attempt
          failed due to the accuracy of the mobile sensor (see detailed description below). Instead, I use the touch 
          position on the screen and the relative orientation sensor to control both the position and the direction
          of the bat.
        </p>
        <h3>
          Future improvements
        </h3>
        <h4>
          Calculation of the device position
        </h4>
        <p>
          When I was experimenting the use of accelerometer, I tried calculating the displacement of the device by using 
          high school physics knowledge. However, this attempt failed: the accuracy of the sensor api and computation power
          of the device are not able to give a accurate estimation of the device relative position in the 3D space. Other 
          methods might be useful to find the position of the device, such as the <strong>gyroscope</strong>.
        </p>
        <h4>
          
        </h4>
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