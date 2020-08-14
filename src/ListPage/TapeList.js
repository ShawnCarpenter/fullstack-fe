import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './TapeList.css';

export default class TapeList extends Component {
    render() {
        
        const {
            id,
            title,
            artist,
            description,
            coverImg=this.props.tape.cover_img,
            genre,
            price,
            inStock=this.props.tape.in_stock
        } = this.props.tape;
        
        const itemStock = inStock ? 'greenBox' : 'redBox';

        return (<>
                {
                <Link to={`/detail/${id}`}>
                <li key={id} className={itemStock}>
                    <h1 className='title'>{title}</h1>
                    <img src={coverImg} alt={title} className='cover-img'/>
                    <div className='artist'>{artist}</div>
                    <div className='genre'>{genre}</div>
                    <div className='description'>{description}</div>
                    <div className='price'>Price: ${price}</div>
                </li>
                </Link>
                }
                </>
        )
    }
}
