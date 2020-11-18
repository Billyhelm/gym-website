import React from 'react';
import './styles.scss';
import Logo from './../../assets/F45-stripped.png'

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="F45 Logo"/>
                </div>
            </div>
        </header>
    )
}

export default Header