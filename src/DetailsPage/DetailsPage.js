import React, { Component } from 'react'
import { fetchTape, deleteTape } from '../tapes-api'
import './DetailsPage.css'
import Form from '../AddForm/Form'

export default class DetailsPage extends Component {

    state = {
            id:null,
            title:'',
            artist:'',
            description: '',
            cover_img: '',
            genre_id:'',
            price:'',
            in_stock:false, 
            new: false
    }
    componentDidMount = async () => {
        const returnedData = await fetchTape(this.props.match.params.id);
        const data = returnedData.body[0];
        await this.setState({
            id: data.id,
            title: data.title,
            artist: data.artist,
            description: data.description,
            cover_img: data.cover_img,
            genre: data.genre,
            genre_id: data.genre_id,
            price: data.price,
            in_stock: data.in_stock
        })
    }
    editButtonHandler = async () => {
        await this.setState({edit: true})
    }
    deleteButtonHandler = async () => {
        console.log(this.state.id)
        await deleteTape(this.state.id);
        this.props.history.push('/');
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
        } = this.state;
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
                     this.state.edit && <Form tape={this.state} />
                 }
            
            </>
            
        )
    }
}
