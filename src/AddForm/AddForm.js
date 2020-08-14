import React, { Component } from 'react';
import { addTapes } from '../tapes-api';



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
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Title:
                        <input onChange={this.handleTitleChange} />
                    </label>
                    <label>
                        Artist:
                        <input onChange={this.handleArtistChange} />
                    </label>
                    <label>
                        Description:
                        <input onChange={this.handleDescriptionChange} />
                    </label>
                    <label>
                        Cover Image URL:
                        <input onChange={this.handleCoverChange} />
                    </label>
                    <label>
                        Genre:
                        <input onChange={this.handleGenreChange} />
                    </label>
                    <label>
                        Price:
                        <input type="number" step=".01" onChange={this.handlePriceChange}></input>
                    </label>
                    <label>
                        In Stock:
                        <input type="checkbox" onChange={this.handleInStockChange}></input>
                    </label>
                    <button>Add Tape</button>
                </form> 
            </div>
        )
    }
}
