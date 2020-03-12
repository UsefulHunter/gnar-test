import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header/Header';

import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app__main">
        <Header />
        <section className="app__content">{this.props.children}</section>
      </div>
    );
  }
}

export default withRouter(App);
