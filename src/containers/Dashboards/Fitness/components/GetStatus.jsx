import React, { Component } from 'react';
import axios from 'axios';

export default class GetStatus extends Component {
  constructor() {
    super();
    this.state = {
      status: 'ไม่ได้อยู่ระหว่างการวิ่ง',
    };
  }

  componentDidMount = () => {
    axios.get('/getStatus').then((response) => { 
      this.setState({
        status: response.data.temp_c,
      });
    });
  };

  render() {
    const statusstatus = (this.state.status); //eslint-disable-line
    return (
      <div className="mobile-app-widget__top-line mobile-app-widget__top-line--blue">
        <h5 /*eslint-disable-line*/ className="mobile-app-widget__stat-stat">{'●   ' + statusstatus }</h5>
      </div>
    );
  }
}

