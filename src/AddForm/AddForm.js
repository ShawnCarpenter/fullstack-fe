import React, { Component } from 'react';
import { addTapes, fetchGenres } from '../tapes-api';
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
    genres: [],
}
componentDidMount = async () => {
  const genreList = await fetchGenres();
    this.setState({
        genres: genreList.body
    });
}
handleFormSubmit = async (e) => {
  e.preventDefault();
   await addTapes(this.state);
   this.props.history.push('/');
}
handleItemChange = async (e) => {
  const target = e.target;
  const name = target.name;
  const val = name === 'in_stock' ? target.checked : target.value;
  await this.setState({[name]:val});
}
  render() {
    
    return (
      <div>
        <Form handleItemChange={this.handleItemChange}
          handleFormSubmit={this.handleFormSubmit}
          genres={this.state.genres}
          title={this.state.title}
          artist={this.state.artist}
          description={this.state.description}
          cover_img={this.state.cover_img}
          genre_id={this.state.genre_id}
          price={this.state.price}
          in_stock={this.state.in_stock}
          />
      </div>
      
    )
  }
}
