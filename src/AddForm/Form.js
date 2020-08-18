import React, { Component } from 'react';
// import { addTapes, fetchGenres, updateTape} from '../tapes-api';
import './AddForm.css';



export default class Form extends Component {
    componentDidMount = ()=> {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <form className="add-form" onSubmit={this.props.handleFormSubmit}>
                <label>Title:</label>
                <input name="title" onChange={this.props.handleItemChange} value={this.props.title} />
                
                <label>Artist:</label>
                <input name="artist" onChange={this.props.handleItemChange} value={this.props.artist}/>
                <label>Description:</label>
                <input name="description" onChange={this.props.handleItemChange} value={this.props.description}/>
                
                <label>Cover Image URL:</label>
                <input name="cover_img" onChange={this.props.handleItemChange} value={this.props.cover_img}/>
                
                <label>Genre:</label>
                <select name="genre_id" onChange={this.props.handleItemChange} value={this.props.genre_id}>
                    {
                        this.props.genres.length && this.props.genres.map(genre => <option value={genre.id} key={genre.id}>{genre.genre} </option>)
                    }
                </select>
                
                <label>Price:</label>
                <input name="price" type="number" step=".01" onChange={this.props.handleItemChange} value={this.props.price} />
                
                <label>In Stock:</label>
                <input name="in_stock" type="checkbox" onChange={this.props.handleItemChange} checked={this.props.in_stock}/>
                
                <button>Save</button>
            </form> 
               
            </div>
        )
    }
}
