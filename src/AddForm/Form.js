import React, { Component } from 'react';
import AddForm from './AddForm';

export default class Form extends Component {
  state = {
    title:'',
    artist:'',
    description: '',
    cover_img: '',
    genre:'',
    price:'',
    in_stock:false,
    addEdit: true,  
}
  render() {
    return (
      <AddForm tape={this.state} genre_id='1'/>
    )
  }
}
