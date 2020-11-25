import React from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'
import VerticalSearch from './../components/VerticalSearch'
import Checkbox from '../components/forms/Checkbox'

const ProductsLayout = props => {
    console.log('lays', props.location)
    return (
    
        <div >
            <Header {...props}/>

            {/* <div className='sidebar' >
                <VerticalSearch>
                    <Checkbox />
                </VerticalSearch>

            </div> */}

            <div className="main">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default ProductsLayout