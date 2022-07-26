import React, { Component } from 'react';
import axios from 'axios';

export default class GetRecentPace extends Component {
  constructor() {
    super();
    this.state = {
      pace: 'Null',
    };
  }

  componentDidMount = () => {
    axios.get('/getRecentPace').then((response) => {
      this.setState({
        pace: response.data.temp_c,
      });
    });
  };

  render() {
    const pacepace = (this.state.pace); //eslint-disable-line
    return (
      <div className="mobile-app-widget__top-line mobile-app-widget__top-line--pink">
        <p className="mobile-app-widget__total-stat">{ pacepace }</p>
      </div>
    );
  }
}

