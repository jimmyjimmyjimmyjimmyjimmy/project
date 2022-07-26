import React, { Component } from 'react';
import axios from 'axios';

export default class GetRecentDistance extends Component {
  constructor() {
    super();
    this.state = {
      distance: 'Null',
    };
  }

  componentDidMount = () => {
    axios.get('https://asia-southeast2-beacon-run.cloudfunctions.net/app/runs?userId=U65543e5b34c1a89fb0078c5193ae6621&limit=1', //eslint-disable-line
      { 
        headers: 
        {
        refreshToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJVNjU1NDNlNWIzNGMxYTg5ZmIwMDc4YzUxOTNhZTY2MjEiLCJyb2xlIjoidXNlciIsImlhdCI6MTY1ODgwNDczNzA2NX0.YMjg7E6PAi622X9u031XPwGPh7Vohvq_M3kFH5NWg4w', //eslint-disable-line
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJVNjU1NDNlNWIzNGMxYTg5ZmIwMDc4YzUxOTNhZTY2MjEiLCJyb2xlIjoidXNlciIsImlhdCI6MTY1ODgwNDczNzA2NSwiZXhwIjoxNjU4ODA0NzM3NjY1fQ.E11rWAIFJG1heA2sZHWJW9Fzx3ztbMrT3zXS09B_duw' //eslint-disable-line
      }}).then((response) => { //eslint-disable-line
      this.setState({
        distance: console.log(response),
      });
    });
  };

  render() {
    const dist = (this.state.distance); //eslint-disable-line
    return (
      <div className="mobile-app-widget__top-line mobile-app-widget__top-line--lime">
        <p className="mobile-app-widget__total-stat">{ dist }</p>
      </div>
    );
  }
}

