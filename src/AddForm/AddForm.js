import React, { Component } from 'react';
import { addTapes, fetchGenres } from '../tapes-api';
import './AddForm.css';



export default class AddForm extends Component {
    state = {
        title:'',
        artist:'',
        description: '',
        cover_img: '',
        genre_id:'',
        price:'',
        in_stock:false,
        genres:[],
        addEdit: true,  
    }
componentDidMount = async () => {
    const genreList = await fetchGenres();
    this.setState({
        genres: genreList.body
    });
    }
    


    handleFormSubmit = async (e) => {
        e.preventDefault();
        await addTapes(this.state)
    }
    handleItemChange = (e) => {
        const target = e.target;
        const name = target.name;
        //Stole the next line from https://reactjs.org/docs/forms.html
        const val = name === 'in_stock' ? target.checked : target.value;
        this.setState({[name]:val});
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
                    <input name="price" type="number" step=".01" onChange={this.handleItemChange} />
                    
                    <label>In Stock:</label>
                    <input name="in_stock" type="checkbox" onChange={this.handleItemChange}/>
                    
                    <button>{this.state.addEdit ? 'Add' : 'Edit'}</button>
                </form> 
            </div>
        )
    }
}
