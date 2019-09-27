import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import {url} from '../../constans';
import "./houseDetails.css";

class HouseDetails extends Component {
  state = {
    house: null,
    loading: true
  }

  componentDidMount() {
    this.fetchHouse(this.props.match.params.houseId)
  }

  fetchHouse = id => {
    axios.get(`${url}/houses/${id}`)
    .then(response => {
      if (response.status !== 200 || response.statusText !== 'OK') {
        alert('There is no house in database!')
      } else {
        const {data} = response;
        this.setState({house: data})
      }  
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      this.setState({loading: false})
    })
  }

  renderInfo = () => {
    const {address, area, owner, price} = this.state.house
    return (
      <div>
        <span>Address: {address}</span> <br />
        <span>Area: {area}</span> <br />
        <span>Owner: {owner}</span> <br />
        <span>Price: {price}</span> <br />
      </div>
    )
  }
  
  render() {
    if (this.state.loading) return <div>Loading...</div>
    return (
        <>
          {this.renderInfo()}
          <button><Link to='/'>Back to Home</Link></button>
        </>
    )
  }
}

export default HouseDetails;