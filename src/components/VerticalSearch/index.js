import React from 'react';
import './styles.scss';


const VerticalNav = ({ children }) => {

  return (
    <div className="verticalNav">


      <div className="menu">
        {children}
      </div>
    </div>
  );
}

export default VerticalNav;