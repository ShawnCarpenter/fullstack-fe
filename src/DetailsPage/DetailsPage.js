import React, { Component } from 'react'
import { fetchTape } from '../tapes-api'

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
            <div>{
                    id ?<>
                         <h1 className='title'>{title}</h1>
                    <img src={coverImg} alt={title} className='cover-img'/>
                    <div className='artist'>{artist}</div>
                    <div className='genre'>{genre}</div>
                    <div className='description'>{description}</div>
                    <div className='price'>Price: ${price}</div>
                        </>
                    : <h1>Loading</h1>
                
                 }
            </div>
        )
    }
}
