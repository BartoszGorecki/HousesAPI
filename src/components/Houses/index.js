import React, { Component } from "react";
import axios from 'axios';
import "./houses.css";

import {url} from '../../constans';

class Houses extends Component {

  state = {
    houses: [],
    error: ''
  }

  componentDidMount = async () => {
    axios.get(`${url}/houses`)
    .then(response => {
      if (response.status !== 200 || response.statusText !== 'OK') {
        this.setState({error: response.data.error})
      } else {
        const {data: {houses}} = response;
        this.setState({houses})
      }  
    })
    .catch(err => {
      console.log(err);
    })
  }

  renderHouses = () => {
    const {houses} = this.state;
    return houses.map(({address, area, owner, price}) => {
      return (
        <div className='houseItem'>
          <span>Address: {address}</span>
          <span>Area: {area}</span>
          <span>Owner: {owner}</span>
          <span>Price: {price}</span>
        </div>
      )
    })
  }
  
  render() {
    const {houses} = this.state;
    if (!houses.length) return <div>Loading...</div>
    return (
      <div>
        {this.renderHouses()}
      </div>
    )
  }
}
export default Houses;