import React, { Component } from 'react'
import './TapeList.css';

export default class TapeList extends Component {
    render() {
        
        const {
            id,
            title,
            artist,
            description,
            cover_img,
            genre,
            price,
            instock
        } = this.props.tape;
        const itemStock = instock ? 'greenBox' : 'redBox';

        return (<>
                {<li key={id} className={itemStock}>
                    <h1 className='title'>{title}</h1>
                    <img src={cover_img} alt={title} className='cover-img'/>
                    <div classname='artist'>{artist}</div>
                    <div className='genre'>{genre}</div>
                    <div className='description'>{description}</div>
                    <div className='price'>Price: ${price}</div>
                </li>}
                </>
        )
    }
}
