import React from 'react';
import Post from '../components/Post';
import ironManImg from '../images/iron-man-ar-interface.jpg';
import fingerTrackingGif from '../images/paint/finger_tracking_small.gif';
import rectGif from '../images/paint/rect.gif';
import zoomRectGif from '../images/paint/zooming.gif';
import rectHeightGif from '../images/paint/rect-height.gif';
import drawingGif from '../images/paint/drawing.gif';
import drawingHeightGif from '../images/paint/drawing-height.gif';

export default class Paint extends React.Component {
  render() {
    return (
      <Post>
        <h2>3D drawing with AR</h2>
        <p>
          This project is an extension of the open source project <a href="https://github.com/oabdelkarim/ARPaint">ARPaint</a>.
          Thanks a lot for the work done by the original author.
        </p>
        <p>
          The code for this project is also open source on my GitHub: <a href="https://github.com/EvsChen/ARPaint">EvsChen/ARPaint</a>
        </p>
        <h3>Introduction</h3>
        <p>
          It is one of my childhood dreams to be able to design myself a suit like Iron Man did in the movie.
        </p>
        <img src={ironManImg}/>
        <h3>Project Aims</h3>
        <p>The aim of the project is to achieve basic operations on graphics within the scope of AR. Include but not confined to the following: </p>
        <ul>
          <li>Drawing</li>
          <li>Drawing regular shapes</li>
          <li>Scaling</li>
          <li>Scaling height</li>
        </ul>
        <p>
          To make this experience as natural as possible, all of the above operations should be achieved using fingers in the real space or touch on the device screen.
        </p>
        <h3>Setup</h3>
        <p>
          The project is hosted on an iOS application. Apple has provided a wonderful frameworl for building AR applications, <a href="https://developer.apple.com/arkit/">ARKit</a>.
        </p>
        <h3>Technology overview</h3>
        <h4>Finger tracking</h4>
        <p>
          One of the most important requirements for this software is to accurately track the finger motion.
          To achieve this, the original proposes the method to track the pixels captured by the camera. By touching on the screen,
          I indicate the position for the app to track, with a box of 20 x 20 pixels. From the animated gif we can see two points 
          on the screen that represent the tracked position of my fingertips. The tracking accuracy is enough to perform some simple operations.
        </p>
        <p>
          Since I want to simulate the zooming and pinching operation like we do with our touch screens, I choose to track two fingers.
          It's possible to track more fingers theoretically, but it may hurt the app performance.
        </p>
        <img src={fingerTrackingGif} alt="Finger tracking"/>
        <h3>Demostration</h3>
        <h4>Draw</h4>
        <img src={drawingGif} alt="Draw"/>
        <h4>Draw a rectangle</h4>
        <img src={rectGif} alt="Draw rect"/>
        <h4>Zooming the rectagle</h4>
        <img src={zoomRectGif} alt="Zoom rect"/>
        <h4>Draw height</h4>
        <img src={drawingHeightGif} alt="Draw height"/>
        <h4>Change the height of the rectangle</h4>
        <img src={rectHeightGif} alt="Rect height" />
      </Post>
    );
  }
}