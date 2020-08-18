import React, { Component } from 'react';
import { addTapes, fetchGenres, updateTape} from '../tapes-api';
import './AddForm.css';



export default class Form extends Component {
    state = {
        id: 1,
        title:'',
        artist:'',
        description: '',
        cover_img: '',
        genre_id:1,
        price:'',
        in_stock:false,
        genres:[],
        new: true,  
    }
componentDidMount = async () => {
    const genreList = await fetchGenres();
    this.setState({
        genres: genreList.body
    });
    
    await this.setState({
        id:this.props.tape.id,
        title: this.props.tape.title,
        artist:this.props.tape.artist,
        description: this.props.tape.description,
        cover_img:this.props.tape.cover_img,
        genre_id:this.props.tape.genre_id,
        price:this.props.tape.price,
        in_stock:this.props.tape.in_stock,
        new: this.props.tape.new,
    })
    console.log(this.props)
    }
    handleFormSubmit = async (e) => {
        e.preventDefault();
        this.state.new? await addTapes(this.state) : await updateTape(this.state);
        this.props.history.push('/')

    }
    handleItemChange = async (e) => {
        const target = e.target;
        const name = target.name;
        //Stole the next line from https://reactjs.org/docs/forms.html
        const val = name === 'in_stock' ? target.checked : target.value;
        await this.setState({[name]:val});
    }


    render() {
        return (
            <div>
                <form className="add-form" onSubmit={this.handleFormSubmit}>
                <label>Title:</label>
                <input name="title" onChange={this.handleItemChange} value={this.state.title} />
                
                <label>Artist:</label>
                <input name="artist" onChange={this.handleItemChange} value={this.state.artist}/>
                <label>Description:</label>
                <input name="description" onChange={this.handleItemChange} value={this.state.description}/>
                
                <label>Cover Image URL:</label>
                <input name="cover_img" onChange={this.handleItemChange} value={this.state.cover_img}/>
                
                <label>Genre:</label>
                <select name="genre_id" onChange={this.handleItemChange} value={this.state.genre_id}>
                    {
                        this.state.genres.length && this.state.genres.map(genre => <option value={genre.id} key={genre.id}>{genre.genre} </option>)
                    }
                </select>
                
                <label>Price:</label>
                <input name="price" type="number" step=".01" onChange={this.handleItemChange} value={this.state.price} />
                
                <label>In Stock:</label>
                <input name="in_stock" type="checkbox" onChange={this.handleItemChange}/>
                
                <button>{this.state.new ? 'Add' : 'Edit'}</button>
            </form> 
               
            </div>
        )
    }
}
