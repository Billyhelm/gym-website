import React from 'react'
import './styles.scss'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'


const ProductCard = ({product}) => {

    const {color, image, description, gender, gyms, name, price, sizes} = product
    const sizeShow = sizes.map(size=>size.name).join(', ')

    return(
        <Link to={{pathname:`/products/${product.id}`, state: {product}}}>
      <div className="five wide column card productCard">
        <div className="">
            <div className="image">
            <img src={image} />
            </div>
            <div className="content">
            <h3>{name}</h3>
            <div className="description">
                {description}
            </div><br/>
            <div className="meta">
                <p>Sizes</p>
            </div>
            
            </div>
            <div className="extra content">
            <span>
                {sizeShow}
            </span>
            <div className="right">
                ${price}
            </div>
            </div>
        </div>

      </div>
</Link>
      
    )
}

export default ProductCard 
