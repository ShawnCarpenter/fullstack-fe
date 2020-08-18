import React, { Component } from 'react'
import { fetchTape, deleteTape, updateTape, fetchGenres } from '../tapes-api'
import './DetailsPage.css'
import Form from '../AddForm/Form'

export default class DetailsPage extends Component {
state = {
    id:'',
    title:'',
    artist:'',
    description:'',
    cover_img:'',
    genre:'',
    genre_id:'',
    price:'',
    in_stock:'',
    genres: [],
    edit: false,
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
        });
        const genreList = await fetchGenres();
        this.setState({
            genres: genreList.body
        });
    }
    editButtonHandler = async () => {
        this.setState({edit: true})
    }
    deleteButtonHandler = async () => {
        console.log(this.props.match.params.id)
        await deleteTape(this.props.match.params.id);
        this.props.history.push('/');
    }

    handleFormSubmit = async (e) => {
        e.preventDefault();
        await updateTape(this.state, this.props.match.params.id);
        this.props.history.push(`/detail/${this.props.match.params.id}`);
        console.log(this.props.match.params.id);
      }
      handleItemChange = async (e) => {
        const target = e.target;
        const name = target.name;
        const val = name === 'in_stock' ? target.checked : target.value;
        await this.setState({[name]:val});
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
            in_stock,
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
                this.state.edit && <Form handleItemChange={this.handleItemChange}
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
            }
            
            </>
            
        )
    }
}
