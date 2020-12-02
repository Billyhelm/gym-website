import React from 'react'
import 'semantic-ui-css/semantic.min.css'
// import SortPrice from './../../../SortFunctions/index'

const Status = ({ children, ...otherProps }) => {

    const {handleFilter} = otherProps

    return (

        <form>
            <h2>Filter By Status</h2>
        <label><input
          type="radio"
          name="filter"
          value="processing"
          onChange={(e) => handleFilter(e.target.value)}
        /> Processing</label>
        <br />
        <label><input
          type="radio"
          name="filter"
          value="recieved"
          onChange={(e) => handleFilter(e.target.value )}
        /> Recieved</label>
        <br />
        <label><input
          type="radio"
          name="filter"
          value="ready for pickup"
          onChange={(e) => handleFilter(e.target.value )}
        /> Ready For Pickup</label>
        <br />
        <label><input
          type="radio"
          name="filter"
          value="picked up"
          onChange={(e) => handleFilter(e.target.value )}
        /> Picked Up</label>
        <br/>
        <label><input
          type="radio"
          name="filter"
          value=""
          onChange={(e) => handleFilter(e.target.value )}
        /> All</label>

      </form>
       
    )
}

export default Status