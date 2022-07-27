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
    axios.get('https://asia-southeast2-beacon-run.cloudfunctions.net/app/runs?userId=U65543e5b34c1a89fb0078c5193ae6621&limit=1', //eslint-disable-line
      { 
        headers: 
        {
        refreshToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJVNjU1NDNlNWIzNGMxYTg5ZmIwMDc4YzUxOTNhZTY2MjEiLCJyb2xlIjoidXNlciIsImlhdCI6MTY1ODg5MjUyODQ3NH0.uXWdCPcDjfyJ5_KkgLh9VIbhPvHlkktkHygCr8av1XA', //eslint-disable-line
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJVNjU1NDNlNWIzNGMxYTg5ZmIwMDc4YzUxOTNhZTY2MjEiLCJyb2xlIjoidXNlciIsImlhdCI6MTY1ODg5MjUyODQ3NCwiZXhwIjoxNjU4ODkyNTI5MDc0fQ.ytx0xemtcppK0dsuqoQ6HetOiCFiVGPAtjr21dtf-_g' //eslint-disable-line
      }}).then((response) => { //eslint-disable-line
      this.setState({
        time: Math.floor((new Date(response.data.result[0].stopTimestamp) - new Date(response.data.result[0].startTimestamp))/ 60000), // eslint-disable-line
        // time: console.log(response.data.result[0].stopTimestamp - response.data.result[0].startTimestamp),
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

