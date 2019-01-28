import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import index from './pages/index';
import bosch from './pages/bosch';
import paint from './pages/paint';
import wgc from './pages/wgc';
import './index.less';

export default class App extends React.Component {
  render() {
    return (
      <Router basename={BASENAME}>
        <div>
          <Route exact path="/" component={index}></Route>
          <Route path="/bosch" component={bosch}></Route>
          <Route path="/paint" component={paint}></Route>
          <Route path="/wgc" component={wgc}></Route>
        </div>
      </Router>
    )
  }
}