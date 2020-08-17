import React, { Component } from 'react'
import { fetchTape, fetchGenres, deleteTape } from '../tapes-api'
import './DetailsPage.css'
import AddForm from '../AddForm/AddForm'

export default class DetailsPage extends Component {

    state = {
        tape: {},
        edit: false,
        genres: []

    }
    componentDidMount = async () => {
        const data = await fetchTape(this.props.match.params.id);
        this.setState({
            tape: data.body[0]
        })
        const genreList = await fetchGenres();
        this.setState({
            genres: genreList.body
        })
        const genre_id = this.state.genres.find(genre => genre.genre === data.body[0].genre).id;
        this.setState({genre_id: genre_id})
    }
    editButtonHandler = () => {
        this.setState({edit: true})
    }
    deleteButtonHandler = async () => {
        console.log(this.state.tape.id)
        const deletedTape = await deleteTape(this.state.tape.id);
        console.log(deletedTape);
    }
    render() {
        const {
            id,
            title,
            artist,
            description,
            cover_img,
            genre,
            price,
            in_stock
        } = this.state.tape;
        console.log(this.state.tape)
        return (
            <>
            <div className='details'>{
                    id ?<>
                        <h1 className='details-title'>{title}</h1>
                        <img src={cover_img} alt={title} className='details-cover-img'/>
                        <div className='details-artist'>{artist}</div>
                        <div className='details-genre'>{genre}</div>
                        <div className='details-description'>{description}</div>
                        <div className='details-price'>Price: ${price}</div>
                        <div>In Stock? {in_stock ? 'Yes' : 'No'}</div>
                        </>
                    : <h1>Loading</h1>
                
                 }
            </div>
            <button className='delete' onClick={this.deleteButtonHandler} >Delete</button>
            <button onClick={this.editButtonHandler}>Edit</button>
                 {
                     this.state.edit && <AddForm tape={this.state.tape} genre_id={this.state.genre_id} addEdit={false}/>
                 }
            
            </>
            
        )
    }
}
