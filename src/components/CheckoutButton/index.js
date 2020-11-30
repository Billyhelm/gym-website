import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

const CheckoutButton = () => {
    return(


                <div className="sideBtn">
                    <Link to='/checkout' >
                    checkout
                    </Link>
                </div>

    )
}

export default CheckoutButton