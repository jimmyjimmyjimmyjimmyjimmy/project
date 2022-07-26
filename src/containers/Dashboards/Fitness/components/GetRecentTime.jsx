import React, { Component } from 'react';
import axios from 'axios';

export default class GetRecentTime extends Component {
  constructor() {
    super();
    this.state = {
      time: 'Null',
    };
  }

  componentDidMount = () => {
    axios.get('/getRecentTime').then((response) => {
      this.setState({
        time: response.data.temp_c,
      });
    });
  };

  render() {
    const timetime = (this.state.time); //eslint-disable-line
    return (
      <div className="mobile-app-widget__top-line mobile-app-widget__top-line--lime">
        <p className="mobile-app-widget__total-stat">{ timetime }</p>
      </div>
    );
  }
}

