import React from 'react'
import ShopMen from './../../assets/men-home.jpg'
import ShopWomen from './../../assets/women-home.jpg'
import './styles.scss'
import { Link } from 'react-router-dom'

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap" >
            <div
            className="item"
            style={{backgroundImage: `url(${ShopWomen})`}}>
                <Link to={{ pathname: '/products', state: {gender: 'F'}}}><a>Shop Womens</a></Link>
            </div>
            <div className="item"
            style={{backgroundImage: `url(${ShopMen})`}}> 
                <Link to={{pathname: '/products', state: {gender: 'M'}}}><a>Shop Mens</a></Link>
            </div>
            </div>
        </div>
    )
}

export default Directory