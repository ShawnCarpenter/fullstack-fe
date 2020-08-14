import React, { Component } from 'react';
import { addTapes } from '../tapes-api';
import './AddForm.css'



export default class AddForm extends Component {
    state = {
        title:null,
        artist:null,
        description: null,
        coverImg: null,
        genre:null,
        price:null,
        inStock:false,  
    }

    handleFormSubmit = async (e) => {
        e.preventDefault();
        await addTapes(this.state)
        console.log(this.state);
    }
    //TODO combine these handlers into one using e.target.name and e.target.value?
    handleTitleChange = e => this.setState({title:e.target.value})
    handleArtistChange = e => this.setState({artist: e.target.value})
    handleDescriptionChange = e => this.setState({description: e.target.value})
    handleCoverChange = e => this.setState({coverImg: e.target.value})
    handleGenreChange = e => this.setState({genre: e.target.value})
    handlePriceChange = e => this.setState({price: e.target.value})
    handleInStockChange = e => this.setState({inStock: e.target.checked})




    render() {
        return (
            <div>
                <form className="add-form" onSubmit={this.handleFormSubmit}>
                    <label>Title:</label>
                    <input onChange={this.handleTitleChange} />
                    
                    <label>Artist:</label>
                    <input onChange={this.handleArtistChange} />
                    <label>Description:</label>
                    <input onChange={this.handleDescriptionChange} />
                    
                    <label>Cover Image URL:</label>
                    <input onChange={this.handleCoverChange} />
                    
                    <label>Genre:</label>
                    <select onChange={this.handleGenreChange}>
                        <option value="Rock">Rock</option>
                        <option value="Punk">Punk</option>
                        <option value="Grunge">Grunge</option>
                        <option value="Folk Punk" >Folk Punk</option>
                        <option value="Celtic Punk" >Celtic Punk</option>
                    </select>
                    
                    <label>Price:</label>
                    <input type="number" step=".01" onChange={this.handlePriceChange} />
                    
                    <label>In Stock:</label>
                    <input type="checkbox" onChange={this.handleInStockChange}/>
                    
                    <button>Add Tape</button>
                </form> 
            </div>
        )
    }
}
