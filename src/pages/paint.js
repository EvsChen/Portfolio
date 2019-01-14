import React from 'react';
import Layout from '../components/layout';
import ironManImg from '../images/iron-man-ar-interface.jpg';

export default class Paint extends React.Component {
  render() {
    return (
      <Layout>
        <div className="post">
          <h2 className="title">3D drawing with AR</h2>
          <p>
            This project is a extension of the opensource project <a href="https://github.com/oabdelkarim/ARPaint">ARPaint</a>.
          </p>
          <p>
            Thanks a lot for the work done by the original author. 
          </p>
          <p>
            It is one of my childhood dreams to be able to design myself like Iron Man did in the movie.
          </p>
          <img src={ironManImg}/>
        </div>
      </Layout>
    );
  }
}