import React from 'react';
import './styles.scss';
import Logo from './../../assets/F45-stripped.png'
import { Link } from 'react-router-dom'

const Header = props => {
    const { currentUser, handleLogout } = props
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to='/'>
                        <img src={Logo} alt="F45 Logo"/>
                    </Link>
                </div>
            <div className="callToActions">
                {currentUser && (
                    <ul>
                        <li>
                            <Link to='/profile'>{currentUser.name}</Link>
                        </li>
                        <li onClick={()=>handleLogout()}>
                           <a>LogOut</a>
                          
                        </li>
                    </ul>
                )}

                {!currentUser && (
                
                    <ul>
                        <li>
                            <Link to='/registration'>
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link to='/login'>
                                Login
                            </Link>
                        </li>
                    </ul>)}
                </div> 
            </div> 
        </header>
    )
}

Header.defaultProps = {
    currentUser: null
}

export default Header