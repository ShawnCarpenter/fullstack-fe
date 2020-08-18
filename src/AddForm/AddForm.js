import React, { Component } from 'react';
import Form from './Form';

export default class AddForm extends Component {
  state = {
    id:'',
    title:'',
    artist:'',
    description: '',
    cover_img: '',
    genre:'',
    genre_id: 1,
    price:'',
    in_stock:false,
    new: true,
}

  render() {
    
    return (
      <div>
        <Form tape={this.state}/>
      </div>
      
    )
  }
}
