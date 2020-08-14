import React, { Component } from 'react'
import { fetchTape } from '../tapes-api'
import './DetailsPage.css'

export default class DetailsPage extends Component {

    state = {
        tape: {}

    }
    componentDidMount = async () => {
        const data = await fetchTape(this.props.match.params.id);
        await this.setState({
            tape: data.body[0]
        })
    }
    render() {
        const {
            id,
            title,
            artist,
            description,
            coverImg=this.state.tape.cover_img,
            genre,
            price,
            inStock=this.state.tape.in_stock
        } = this.state.tape;
        console.log(this.state.tape)
        return (
            <div className='details'>{
                    id ?<>
                        <h1 className='details-title'>{title}</h1>
                        <img src={coverImg} alt={title} className='details-cover-img'/>
                        <div className='details-artist'>{artist}</div>
                        <div className='details-genre'>{genre}</div>
                        <div className='details-description'>{description}</div>
                        <div className='details-price'>Price: ${price}</div>
                        <div>In Stock? {inStock ? 'Yes' : 'No'}</div>
                        </>
                    : <h1>Loading</h1>
                
                 }
            </div>
        )
    }
}
