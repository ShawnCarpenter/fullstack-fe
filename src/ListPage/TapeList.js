import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './TapeList.css';

export default class TapeList extends Component {
    render() {
        
        const {
            id,
            title,
            artist,
            cover_img,
            in_stock,
        } = this.props.tape;
        
        const itemStock = in_stock ? 'greenBox' : 'redBox';

        return (<>
                {
                <Link to={`/detail/${id}`}>
                <li key={id} className={itemStock}>
                    <h1 className='title'>{title}</h1>
                    <img src={cover_img} alt={title} className='cover-img'/>
                    <div className='artist'>{artist}</div>
                </li>
                </Link>
                }
                </>
        )
    }
}
