import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./createHouse.css";
import axios from "axios";

import {url} from '../../constans';
const uuidv4 = require('uuid/v4');

class CreateHouse extends Component {

  state = {
    address: '',
    area: '',
    owner: '',
    price: ''
  }

  componentDidMount() {
    console.log(uuidv4())
  }

  changeInput = ({target: {name, value}}) => this.setState({[name]: value})

  createHouse = e => {
    e.preventDefault();
    const {address, area, owner, price} = this.state;
    const house = {
      address,
      area,
      owner,
      price
    }
    axios.post(`${url}/houses`, house)
    .then(response => {
      if (response.status !== 201 || response.statusText !== 'Created') {
        alert('Could not create a house!')
      } else {
        alert('House created successfully!')
        this.setState({
          address: '',
          area: '',
          owner: '',
          price: ''
        })
      } 
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  render() {
    const {address, area, owner, price} = this.state;
    return (
      <>
        <button><Link to='/'>Back to Home</Link></button>
        <form onSubmit={this.createHouse}>
          <input type='text' name='address' value={address} onChange={this.changeInput} placeholder='Address' required minLength='5' />
          <input type='number' name='area' value={area} onChange={this.changeInput} placeholder='Area' required/>
          <input type='text' name='owner' value={owner} onChange={this.changeInput} placeholder='Owner' required minLength='5'/>
          <input type='text' name='price' value={price} onChange={this.changeInput} placeholder='Price' required/>
          <button type='submit'>Add house</button>
        </form>
      </>
    );
  }
}
export default CreateHouse;