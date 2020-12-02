import React from 'react';
import './styles.scss';
import Logo from './../../assets/F45-stripped.png'
import { Link } from 'react-router-dom'

const Header = props => {
    const { handleLogout } = props
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to='/'>
                        <img src={Logo} alt="F45 Logo"/>
                    </Link>
                </div>
                
            <div className="callToActions">
                {localStorage.id && (
                    <ul>
                        <li>
                            <Link to='/orders'>Orders</Link>
                        </li>
                        {localStorage.status === 'admin' && (
                            <>
                        <li>
                            <Link to='/admin'>Admin</Link>
                        </li>
                        <li>
                            <Link to='/newproduct'>New Product</Link>
                        </li>
                            </>
                        )}
                        <li onClick={()=>handleLogout()}>
                           <a>LogOut</a>
                          
                        </li>
                        
                           {/* <li> <img src={localStorage.image}/></li>  */}
                           
                               
                     
                        
                    </ul>
                )}

                {!localStorage.id && (
                
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

export default Header