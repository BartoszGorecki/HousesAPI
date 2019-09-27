import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./houses.css";

import {url} from '../../constans';

class Houses extends Component {

  state = {
    houses: [],
    error: '',
    loading: true
  }

  componentDidMount = () => {
    this.fetchHouses()
  }

  fetchHouses = () => {
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
    .finally(() => {
      this.setState({loading: false})
    })
  }

  removeHouse = id => {
    axios.delete(`${url}/houses/${id}`)
      .then(response => {
        console.log(response)
        if (response.status === 200 && response.statusText === 'OK') {
          alert('House deleted successfully')
        } else {
          alert('Could not delete house!')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  renderMainContent = () => {
      const {houses, loading} = this.state;
      if (loading) return <div>Loading...</div>
      if (!houses.length) return <div>There is no houses in database!</div>
      return (
        <>
          <button><Link to='/'>Back to Home</Link></button>
          {this.renderHouses()}
        </>
      )
  }

  renderHouses = () => {
    const {houses} = this.state;
    return houses.map(({address, area, owner, price, _id}) => {
      return (
        <div className='houseItem' key={_id}>
          <span>Address: {address}</span>
          <span>Area: {area}</span>
          <span>Owner: {owner}</span>
          <span>Price: {price}</span>
          <div className='close' onClick={() => this.removeHouse(_id)}>X</div>
        </div>
      )
    })
  }
  
  render() {
    return (
      <>
        {this.renderMainContent()}
        <button><Link to='/create'>Add home</Link></button>
      </>
    )
  }
}
export default Houses;